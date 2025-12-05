import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'

import { dbConnect } from './config/db.js'
import { clerkWebhooks } from './controller/webhooks.js'

const port = 3000


app.use(cors())


dotenv.config()
dbConnect()


app.post('/webhooks', express.raw({ type: 'application/json' }), clerkWebhooks)

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => console.log(`Example app listening on port ${port}!`))