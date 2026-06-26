import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'

const app: Application = express()
const PORT = 8000
const MONGO_URI = 'mongodb://127.0.0.1:27017/octofit'

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'OctoFit Tracker backend is running.' })
})

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB at', MONGO_URI)

    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
