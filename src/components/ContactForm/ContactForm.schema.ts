import z from "zod";

export type ContactFormDef = z.infer<typeof contactFormSchema>;
export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  content: z.string().min(1),
});
