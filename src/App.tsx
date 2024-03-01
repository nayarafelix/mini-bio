import { GlobalStyles } from "./styles/globalStyles"
import { Container } from "./components"
import { Header, AboutMe, Tecnologies, Experiences } from "./sections"

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <AboutMe />
        <Tecnologies />
        <Experiences />
      </Container>
    </>
  )
}

export { App }
