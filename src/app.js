import express from 'express'
import categoryRouter from './routes/category'
import productRouter from './routes/product'
import authRouter from './routes/auth'
import mongoose from 'mongoose'
const app = express()

app.use(express.json())

app.use(categoryRouter)
app.use(productRouter)
app.use(authRouter)

mongoose.connect('mongodb://127.0.0.1:27017/LuyenTap2')
export const viteNodeApp = app