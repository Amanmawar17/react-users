import { z } from "zod";

// Define a Zod schema for user validation
export const userSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[a-zA-Z0-9_ ]+$/, "Full Name must not contain special characters (only letters, numbers, and underscores are allowed)"),

    email: z
        .string()
        .email("Provide a valid email address")
        // eslint-disable-next-line no-useless-escape
        .regex(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, { message: "Provide a valid email." }),


    phone: z
        .string()
        .regex(/^\d{10}$/, { message: "Kindly add a valid 10-digit phone number" }),

    username: z
        .string()
        .min(3, { message: "username must be at least 3 characters" }),

    address: z
        .string({message: "submit street no city zipcode"}),

    companyName: z
        .string()
        .min(3, { message: "Company Name must be at least 8 characters" }),

    website: z
        .string()

});