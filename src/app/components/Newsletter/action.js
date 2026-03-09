"use server"
import { newsletterSchema } from "../../lib/schemas"
import { z } from "zod"

export default async function subscribeToNewsletter(prevState, formData) {
    const email = formData.get("email")

    if (email === prevState.values.email) {
        return prevState // no changes
    }

    const result = newsletterSchema.safeParse({ email })

    if (!result.success) {
        return {
            values: { email },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    return {
        values: { email: "" },
        errors: {},
        success: "Thank you for subscribing to our newsletter!"
    }
}