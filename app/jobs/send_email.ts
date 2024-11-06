import { Job } from 'adonisjs-jobs'
import FileService from '#services/file_service'

type SendEmailPayload = {}

export default class SendEmail extends Job {
  async handle(payload: SendEmailPayload) {
    this.logger.info('SendEmail job handled')
    const service = new FileService()
    await service.test()
  }
}
