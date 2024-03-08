import express from 'express'
import cors from 'cors'

import { router } from './controller/userRouter.js'

const app = express()

app.use(cors())
const PORT = 3000

app.use(`/`,router)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
