import { JOBTYPES } from '@/constants'
import {z} from 'zod'

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: 'Job Title is required' })
    .min(3, { message: 'Job Title must me at least 3 characters' }),
  jobType: z.enum(JOBTYPES, {
    required_error: 'You need to select a job type'
  }),
  salayFrom: z.string({ required_error: 'Salary From is required' }),
  salayTo: z.string({ required_error: 'Salary To is required' }),
  categoryId: z.string({ required_error: 'You need to select a categor' }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: 'Required Skill must be at least 1 skill' }),
  jobDescription: z
    .string({ required_error: 'Job Description is required' })
    .min(10, { message: 'Job Description must be at least 3 characters' }),
  responsibility: z
    .string({ required_error: 'Responsibility is required' })
    .min(10, { message: 'Responsibility must be at least 3 characters' }),
  whoYouAre: z
    .string({ required_error: 'Who You Are is required' })
    .min(10, { message: 'Who You Are must be at least 3 characters' }),
  niceToHaves: z
    .string({ required_error: 'Nice to Haves is required' })
    .min(10, { message: 'Nice to Haves must be at least 3 characters' }),
  benefits: z.object({
    benefit: z.string(),
    description: z.string()
  }).array().nonempty({ message: 'Benefits must be at least 1 benefit'})
})