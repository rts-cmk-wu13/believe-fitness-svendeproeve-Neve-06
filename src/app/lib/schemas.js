import { z } from "zod";

export const newsletterSchema = z.object({
    email: z.email("Write a valid email address"),
})
export const loginSchema = z.object({
    username: z.string("Write a valid username"),
    password: z.string().min(3, "Password must be at least 3 characters long"),
})