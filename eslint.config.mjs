// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    ignores: ['api/hono.ts', 'drizzle'],
    typeChecked: 'essential',
    project: true,
  },
)
