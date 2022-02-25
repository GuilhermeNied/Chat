import { Router } from 'express'
import { CreateMessagesService } from './services/CreateMessageService '
import { ListMessagesService } from './services/ListMessagesService'

const router = Router()

const createMessage = new CreateMessagesService()
const listMessage = new ListMessagesService()

router.post('/createMessage', createMessage.handle)
router.get('/listMessages', listMessage.handle)

export { router }
