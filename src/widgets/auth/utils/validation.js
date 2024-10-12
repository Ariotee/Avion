import { z } from 'zod'

export const AuthValidation = z.object({
	surname: z.string(),
	name: z.string(),
	dob: z.string(),
	mail: z.string().email(),
	phone: z.string(),
	password: z.string(),
})
