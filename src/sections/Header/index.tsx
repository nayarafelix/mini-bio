import { Image, Title, Subtitle } from './Header.styles'

const Header = () => {
  return (
      <header>
        <Image alt="Fotografia" src="/foto.jpg"/>
        <Title>Nayara Felix</Title>
        <Subtitle>Front-end Developer</Subtitle>
      </header>
  )
}

export {Header}
