import { css } from "../styled-system/css"

function App() {
  return (
    <div>
      <div className="container">
        <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      </div>
    </div>
  )
}

export default App
