import { z } from "zod";

export const CreateClientValidationSchema = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    email: z
        .string()
        .min(1, "Email address is required.")
        .email("Please enter a valid email address."),
    contactNumber: z.string().min(1, "Contact number is required."),
});

export type CreateClientValidationSchemaType = z.infer<
    typeof CreateClientValidationSchema
>;
