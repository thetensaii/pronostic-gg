import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Button } from '~/components/ui/button'


const Home = () => {
  return (
    <div>
      <div className="container">
        <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
        <Button>Hey !!</Button>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home
})