import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Enter a valid email",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export type SignInSchemaFields = keyof SignInSchemaType;
