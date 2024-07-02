import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { checkIsAuthenticated } from '~/auth/services/CheckIsAuthenticated'
import { NavigationBar } from '~/navigation/ui/organism/NavigationBar'

export const Route = createFileRoute('/_authenticated')({
  loader: async () => {
    const isAuthenticated = await checkIsAuthenticated()
    // const isAuthenticated = false

    if (!isAuthenticated) {
      throw redirect({
        to: '/signup',
      })
    }
  },
  component: () => (
    <>
      <NavigationBar />
      <hr />
      <Outlet />
    </>
  )
})