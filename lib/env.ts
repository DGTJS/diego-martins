const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function requirePublicEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  emailJs: {
    serviceId: requirePublicEnv(
      emailJsServiceId,
      "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
    ),
    templateId: requirePublicEnv(
      emailJsTemplateId,
      "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
    ),
    publicKey: requirePublicEnv(
      emailJsPublicKey,
      "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
    ),
  },
} as const;
