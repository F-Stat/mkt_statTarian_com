import { z } from 'zod'

export const demoRequestSchema = z.object({
  firstName: z.string().min(1, 'Required').max(50),
  lastName: z.string().min(1, 'Required').max(50),
  email: z.string().email('Enter a valid email address'),
  organisation: z.string().min(1, 'Required').max(100),
  role: z.enum([
    'academy_director',
    'operations_lead',
    'head_coach',
    'coach',
    'medical',
    'safeguarding',
    'other',
  ]),
  plan: z.enum(['starter', 'pro', 'enterprise', 'unsure']).optional(),
  source: z
    .enum(['faw', 'word_of_mouth', 'social', 'search', 'other'])
    .optional(),
  message: z.string().max(500).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to continue' }),
  }),
})

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>
