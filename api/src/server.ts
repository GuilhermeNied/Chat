import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.use(express.json())
app.use(router)

app.listen('5500', () => console.log('Server is running on port 5500🚀'))
