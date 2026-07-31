#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
env_file="${project_root}/.env"

if [[ -f "${env_file}" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "${env_file}"
  set +a
fi

: "${CLOUDFLARE_ACCOUNT_ID:?Set CLOUDFLARE_ACCOUNT_ID in .env or the environment}"
: "${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN in .env or the environment}"

for dependency in curl jq; do
  if ! command -v "${dependency}" >/dev/null 2>&1; then
    echo "Missing required command: ${dependency}" >&2
    exit 1
  fi
done

api_base="https://api.cloudflare.com/client/v4"
auth_header="Authorization: Bearer ${CLOUDFLARE_API_TOKEN}"
temp_dir="$(mktemp -d "${TMPDIR:-/tmp}/cloudflare-check.XXXXXX")"
trap 'rm -rf "${temp_dir}"' EXIT

curl --silent --show-error \
  "${api_base}/accounts/${CLOUDFLARE_ACCOUNT_ID}/tokens/verify" \
  --header "${auth_header}" \
  --output "${temp_dir}/verify.json"

if ! jq -e '.success == true and .result.status == "active"' \
  "${temp_dir}/verify.json" >/dev/null; then
  jq '{success, errors}' "${temp_dir}/verify.json" >&2
  exit 1
fi

curl --silent --show-error \
  "${api_base}/zones?account.id=${CLOUDFLARE_ACCOUNT_ID}&per_page=50&page=1" \
  --header "${auth_header}" \
  --output "${temp_dir}/zones.json"

if ! jq -e '.success == true' "${temp_dir}/zones.json" >/dev/null; then
  jq '{success, errors}' "${temp_dir}/zones.json" >&2
  exit 1
fi

jq '{
  connection: "successful",
  token_status: "active",
  account_id: $account_id,
  zone_count: .result_info.total_count,
  zones: [
    .result[] | {
      name,
      status,
      type,
      plan: .plan.name,
      paused
    }
  ]
}' --arg account_id "${CLOUDFLARE_ACCOUNT_ID}" "${temp_dir}/zones.json"

