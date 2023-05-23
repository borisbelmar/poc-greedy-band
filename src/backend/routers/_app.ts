import { procedure, router } from '../trpc'
export const appRouter = router({
  quest: procedure
    .query(() => {
      return {
        quest: 'Rob a Bank!'
      }
    })
})
// export type definition of API
export type AppRouter = typeof appRouter
