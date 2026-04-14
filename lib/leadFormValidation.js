/**
 * Client-side sanitization and validation for the lead modal.
 * Server must still validate; this reduces junk and basic XSS-style payloads in transit.
 */

const CTRL_EXCEPT_NEWLINE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

const EMAIL_MAX = 254;
const NAME_MAX = 80;
const NAME_MIN = 2;
const PHONE_MAX_CHARS = 22;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;

/** Strip disallowed control characters (keep \n \t for message). */
export function stripControlsAllowNewline(s) {
  return String(s).replace(CTRL_EXCEPT_NEWLINE, "");
}

export function stripControlsStrict(s) {
  return String(s).replace(/[\x00-\x1F\x7F]/g, "");
}

/** Remove common HTML/script injection patterns from plain text. */
export function stripDangerousPatterns(s) {
  return String(s)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/?[a-z][\s\S]*?>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/data:\s*text\/html/gi, "")
    .replace(/on\w+\s*=/gi, "");
}

/**
 * Sanitize full name: trim, cap length, allow letters/marks, space, period, apostrophe, hyphen.
 */
/** While typing: cap length, strip controls and brackets (full name cleanup on blur/submit). */
export function sanitizeNameInput(raw) {
  return stripControlsStrict(raw)
    .replace(/[<>]/g, "")
    .slice(0, NAME_MAX);
}

export function sanitizeName(raw) {
  let t = stripControlsStrict(raw).trim().slice(0, NAME_MAX);
  t = stripDangerousPatterns(t);
  t = t.replace(/[^\p{L}\p{M}\s'.-]+/gu, "");
  t = t.replace(/\s+/g, " ");
  return t.trim();
}

/** While typing: no lowercase yet so cursor behavior stays natural. */
export function sanitizeEmailInput(raw) {
  return stripControlsStrict(raw).replace(/\s/g, "").slice(0, EMAIL_MAX);
}

/**
 * Sanitize email: trim, lowercase, strip controls and angle brackets, cap length.
 */
export function sanitizeEmail(raw) {
  let t = stripControlsStrict(raw).trim().slice(0, EMAIL_MAX).toLowerCase();
  t = t.replace(/[\s<>"]/g, "");
  return t;
}

/**
 * Sanitize phone: keep + at start, digits, spaces, parentheses, hyphens, dots; cap length.
 */
export function sanitizePhone(raw) {
  let t = stripControlsStrict(raw).trim().slice(0, PHONE_MAX_CHARS);
  if (t.startsWith("+")) {
    return ("+" + t.slice(1).replace(/[^\d\s().-]/g, "")).trim();
  }
  return t.replace(/[^\d\s().-]/g, "").trim();
}

export function countPhoneDigits(s) {
  return (String(s).match(/\d/g) || []).length;
}

/** While typing: keep newlines, cap length, strip control chars (full scrub on blur/submit). */
export function sanitizeMessageInput(raw) {
  return stripControlsAllowNewline(String(raw))
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .slice(0, MESSAGE_MAX);
}

/**
 * Sanitize message: newlines preserved, capped, dangerous patterns stripped.
 */
export function sanitizeMessage(raw) {
  let t = stripControlsAllowNewline(String(raw))
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");
  t = stripDangerousPatterns(t);
  if (t.length > MESSAGE_MAX) t = t.slice(0, MESSAGE_MAX);
  return t.trim();
}

// Practical email pattern (not exhaustive RFC, good for UX validation)
const EMAIL_RE =
  /^[a-z0-9._%+-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

/**
 * @param {{ name: string, email: string, phone: string, message: string }} fields — already sanitized
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateLeadFields(fields) {
  const errors = {};

  if (!fields.name) {
    errors.name = "Please enter your name.";
  } else if (fields.name.length < NAME_MIN) {
    errors.name = `Please enter at least ${NAME_MIN} characters for your name.`;
  } else if (fields.name.length > NAME_MAX) {
    errors.name = `Name must be at most ${NAME_MAX} characters.`;
  }

  if (!fields.email) {
    errors.email = "Please enter your work email.";
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = countPhoneDigits(fields.phone);
  if (!fields.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (digits < 10) {
    errors.phone = "Enter a valid phone number (at least 10 digits).";
  } else if (digits > 15) {
    errors.phone = "Phone number looks too long (max 15 digits).";
  }

  if (!fields.message) {
    errors.message = "Please add a short message so we know how to help.";
  } else if (fields.message.length < MESSAGE_MIN) {
    errors.message = `Message should be at least ${MESSAGE_MIN} characters.`;
  } else if (fields.message.length > MESSAGE_MAX) {
    errors.message = `Message must be at most ${MESSAGE_MAX} characters.`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/** Single-field error after full sanitization of all keys (e.g. on blur). */
export function getLeadFieldError(key, data) {
  const { errors } = validateLeadFields(data);
  return errors[key] ?? null;
}

/**
 * Full pipeline: sanitize all fields then validate.
 * @returns {{ valid: boolean, errors: Record<string, string>, data: object }}
 */
export function sanitizeAndValidateLeadForm(raw) {
  const data = {
    name: sanitizeName(raw.name),
    email: sanitizeEmail(sanitizeEmailInput(raw.email)),
    phone: sanitizePhone(raw.phone),
    message: sanitizeMessage(sanitizeMessageInput(raw.message)),
  };
  const { valid, errors } = validateLeadFields(data);
  return { valid, errors, data };
}
