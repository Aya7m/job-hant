import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'

import { dbConnect } from './config/db.js'
import { clerkWebhooks } from './controller/webhooks.js'

const port = 3000


app.use(cors())
app.use(express.json())

dotenv.config()
dbConnect()


app.post('/webhooks',clerkWebhooks)
app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => console.log(`Example app listening on port ${port}!`))