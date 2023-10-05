import { hover } from "@testing-library/user-event/dist/hover"
import { MainContainer } from "./style"
import Router from "./Routes/Router"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <MainContainer>
      <h1>Aula de React Router</h1>
      <Router/>
    </MainContainer>
  )
}

export default App
