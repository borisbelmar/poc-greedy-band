import type { IRepositoryCollection } from '../IRepository'
import getAccountMongooseRepository from './Account'

export default function getMongooseRepository (): IRepositoryCollection {
  return {
    getAccountRepository: getAccountMongooseRepository
  }
}
