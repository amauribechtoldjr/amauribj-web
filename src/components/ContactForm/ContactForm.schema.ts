import z from "zod";

export const NAME_MAX_LENGTH = 150;
export const EMAIL_MAX_LENGTH = 255;
export const CONTENT_MAX_LENGTH = 500;

export type ContactFormDef = z.infer<typeof contactFormSchema>;
export const contactFormSchema = z.object({
  name: z.string().min(1).max(NAME_MAX_LENGTH),
  email: z.email().max(EMAIL_MAX_LENGTH),
  content: z.string().min(1).max(CONTENT_MAX_LENGTH),
});
