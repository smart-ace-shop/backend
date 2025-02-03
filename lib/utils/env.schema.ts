import { z } from 'zod';

const envSchema = z.object({
  APP_PORT: z.union([z.string(), z.number()]).optional().default(3000),
});

/**
 * This object is parsed and validated by zod schema. Provides type-safety,
 * validation for process.env.
 *
 * @example
 * const appPort = env.APP_PORT
 * //      ^? string | number
 */
export const env = envSchema.parse(process.env);
