import { prismaClient } from '../database/prismaClient'
import { Request, Response } from 'express'

export class ListMessagesService {
  async handle(req: Request, res: Response) {
    const { id } = req.body

    const messages = await prismaClient.message.findMany({
      orderBy: {
        id
      }
    })
    return res.json(messages)
  }
}
