import { treaty } from '@elysia/eden'
import type { app } from '../app/api/[[...slugs]]/route'

export const client = treaty<app>('localhost:3000').api