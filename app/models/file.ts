import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import type { Attachment } from '@jrmc/adonis-attachment/types/attachment'
import { attachment, Attachmentable } from '@jrmc/adonis-attachment'

export default class File extends compose(BaseModel, Attachmentable) {
  @column({ isPrimary: true })
  declare id: number

  @attachment()
  declare avatar: Attachment

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
