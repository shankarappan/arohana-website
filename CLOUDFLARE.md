# Cloudflare connection

This repository uses an account-owned Cloudflare API token supplied through
environment variables. Secrets must not be committed.

## Local setup

1. Revoke the token that was shared in chat and create a replacement token.
2. Copy `.env.example` to `.env`.
3. Add the replacement token to `CLOUDFLARE_API_TOKEN` in `.env`.
4. Run:

   ```sh
   ./scripts/cloudflare-check.sh
   ```

The connection check verifies the account-owned token with Cloudflare and lists
the zones available to it. It never prints the token or DNS record values.

## Current verified inventory

- `arohana.nz` — active, full zone, Free plan
- `mokshabase.com` — active, full zone, Free plan

At the time of verification, the supplied token could read zones, DNS records,
and zone settings. It could not access Pages projects, Workers scripts, R2
buckets, or its own policy details.

For full account management, create a least-privilege replacement token with
only the services this project will actually use. Avoid granting API Tokens
Write unless automated token administration is explicitly required.
