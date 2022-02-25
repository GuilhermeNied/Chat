import { prismaClient } from '../database/prismaClient'
import { Request, Response } from 'express'

export class CreateMessagesService {
  async handle(req: Request, res: Response) {
    const { text } = req.body

    const messages = await prismaClient.message.create({
      data: {
        text: text != null ? text : undefined
      }
    })

    return res.json(messages)
  }
}
