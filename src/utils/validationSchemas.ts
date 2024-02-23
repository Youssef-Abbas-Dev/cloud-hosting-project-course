import { z } from 'zod';

// Create Article Schema
export const createArticleSchema = z.object({
    title: z.string({
        required_error: "title is required",
        invalid_type_error: "title should be of type string"
    })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),

    description: z.string().min(10),
});

// Register Schema
export const registerSchema = z.object({
    username: z.string().min(2).max(100), //.optional(),
    email: z.string().min(3).max(200).email(),
    password: z.string().min(6),
});