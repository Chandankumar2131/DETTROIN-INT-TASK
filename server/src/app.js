import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { env } from './config/env.js'
import { errorHandler, notFound } from './middleware/error.middleware.js'
import schoolRoutes from './routes/school.routes.js'

const app = express()
app.use(helmet())
app.use(cors({ origin: env.clientUrl, credentials: true }))
app.use(express.json({ limit: '1mb' }))
app.use(morgan(env.isProduction ? 'combined' : 'dev'))
app.get('/api/health', (_request, response) => response.json({ status: 'ok' }))
app.use('/api', schoolRoutes)
app.use(notFound)
app.use(errorHandler)

export default app
