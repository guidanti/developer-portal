import { z } from 'zod';

export const ComponentResultSchema = z.object({
  compliance: z.array(
    z.object({
      policy: z.string(),
      status: z.enum(['pass', 'fail']),
      failure_count: z.number(),
      total_count: z.number(),
    })
  ).optional(),
});
