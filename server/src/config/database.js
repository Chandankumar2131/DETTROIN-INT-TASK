import mongoose from 'mongoose'
import { env } from './env.js'

export async function connectDatabase() {
  if (!env.mongoUri) {
    console.warn('MONGODB_URI is not configured; running with static content only.')
    return
  }
  await mongoose.connect(env.mongoUri)
  console.log('MongoDB connected')
}
