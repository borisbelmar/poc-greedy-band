import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'
import type { AccountWithPassword } from '@/@types'
import type { IAccountRepository } from '../IRepository'

export type AccountDocument = AccountWithPassword & Document

const AccountSchema: Schema = new Schema<AccountDocument>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  experience: { type: Number, required: true },
  nickname: { type: String, required: true },
  coins: { type: Number, required: true },
  birthday: { type: Date, required: true },
  password: { type: String, required: true }
})

// Define Models

export const AccountModel = mongoose.model<AccountDocument>('Account', AccountSchema)

export default function getAccountMongooseRepository (): IAccountRepository {
  return {
    getAll: async () => {
      return await AccountModel.find()
    },
    getById: async (id: string) => {
      return await AccountModel.findOne({ id })
    },
    getByEmail: async (email: string) => {
      return await AccountModel.findOne({ email })
    },
    create: async (item: AccountWithPassword) => {
      return await AccountModel.create(item)
    },
    update: async (id: string, item: Partial<AccountWithPassword>) => {
      return await AccountModel.findOneAndUpdate({ id }, item)
    },
    delete: async (id: string) => {
      return await AccountModel.findOneAndDelete({ id })
    }
  }
}
