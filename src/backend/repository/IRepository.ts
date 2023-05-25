import type { Account, AccountWithPassword } from '@/@types'

export interface IRepository<T> {
  getAll: () => Promise<T[]>
  getById: (id: string) => Promise<T | null>
  create: (item: T) => Promise<T>
  update: (id: string, item: Partial<T>) => Promise<T | null>
  delete: (id: string) => Promise<T | null>
}

export interface IAccountRepository extends IRepository<AccountWithPassword> {
  getByEmail: (email: string) => Promise<Account | null>
}

export interface IRepositoryCollection {
  getAccountRepository: () => IAccountRepository
}
