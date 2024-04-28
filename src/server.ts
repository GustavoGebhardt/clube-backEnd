import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import cors from '@fastify/cors'
import { z } from "zod";

const app = fastify()
const prisma = new PrismaClient()

app.register(cors, { 
  hook: 'preHandler'
})

app.get("/users", async () => {
  const users = await prisma.user.findMany()
  return{users}
})

app.post("/users", async (request, reply) => {
  const createUserSchema = z.object({
    name: z.string()
  })
  const {name} = createUserSchema.parse(request.body)
  await prisma.user.create({
    data: {
      name
    }
  })

  return reply.status(201).send()
})

app.listen({
  host: "0.0.0.0",
  port: process.env.PORT ? Number(process.env.PORT): 4000
}).then(() => {
  console.log("HTTP Server Running")
})