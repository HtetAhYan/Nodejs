import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/users.js';
import { PrismaClient } from '@prisma/client'
import cors from'cors';
const prisma = new PrismaClient()
const app =express()
const Port =5556;
app.use(bodyParser.json())

app.use('/users',router)
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());


app.post("/job", async (req, res) => {
  const job = await prisma.job.create({ data: req.body });
  res.json(job);
});

app.get("/", async (req, res) => {
  const job = await prisma.job.findMany();
  res.json(job);
});


