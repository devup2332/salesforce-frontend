import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export type LoginSchemaFields = keyof LoginSchemaType;
