import { fetchApi } from "@/utils/api/fetch";
import { z } from "zod";

export const Step1RegisterSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "required",
    })
    .email({
      message: "invalid_email",
    })
    .transform(async (val, ctx) => {
      // Call an api endpoint to verify if the email is already in use

      const { user } = await fetchApi(`/api/users/validateEmailExist/${val}`, {
        method: "GET",
      });
      if (user) {
        return ctx.addIssue({
          code: "custom",
          fatal: true,
          message: "email_in_use",
        });
      }
      return val;
    }),
  firstName: z.string().min(1, {
    message: "required",
  }),
  lastName: z.string().min(1, {
    message: "required",
  }),
});

export const Step2RegisterSchema = z.object({
  businessName: z.string().min(1, {
    message: "required",
  }),
});

export const Step3RegisterSchema = z
  .object({
    password: z.string().nonempty({ message: "required" }).min(8, {
      message: "too_short",
    }),
    confirmPassword: z.string().nonempty({ message: "required" }).min(8, {
      message: "too_short",
    }),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: "not_matching",
    path: ["confirmPassword"],
  });

// Schema for the whole registration form
export type Step1RegisterSchemaType = z.infer<typeof Step1RegisterSchema>;
export type Step2RegisterSchemaType = z.infer<typeof Step2RegisterSchema>;
export type Step3RegisterSchemaType = z.infer<typeof Step3RegisterSchema>;

export type Step1RegisterFields = keyof Step1RegisterSchemaType;
export type Step2RegisterFields = keyof Step2RegisterSchemaType;
export type Step3RegisterFields = keyof Step3RegisterSchemaType;
