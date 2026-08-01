export const BOOKING_EMAIL = "info@arohana.nz";

export function buildBookingMailto({ name, email, message }) {
  const senderName = name?.trim() || "Website visitor";
  const replyEmail = email?.trim() || "Not supplied";
  const enquiry = message?.trim() || "Not supplied";
  const subject = `Arohana booking enquiry — ${senderName}`;
  const body = [
    "Hello Arohana,",
    "",
    "I would like to make a booking enquiry.",
    "",
    `Name: ${senderName}`,
    `Reply email: ${replyEmail}`,
    "",
    "Event or idea:",
    enquiry,
    "",
    "Sent from arohana.nz",
  ].join("\n");

  return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
