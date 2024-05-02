import { css } from "../styled-system/css"
import { Button } from "~/components/ui/button"

function App() {
  return (
    <div>
      <div className="container">
        <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
        <Button>Hey !!</Button>
      </div>
    </div>
  )
}

export default App
