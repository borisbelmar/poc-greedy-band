export interface Account {
  id: string
  email: string
  firstName: string
  lastName: string
  experience: number
  nickname: string
  coins: number
  birthday: Date
}

export interface AccountWithPassword extends Account {
  password: string
}

export type AccountLogin = Pick<AccountWithPassword, 'email' | 'password'>
export type AccountRegister = Omit<AccountWithPassword, 'id' | 'experience' | 'coins'>
