import { SectionArea, SectionTitle } from "../../components/"
import { Text } from "./AboutMe.styles"

const AboutMe = () => {
  return (
    <SectionArea>
      <SectionTitle>Sobre Mim</SectionTitle>
      <Text>Sou desenvolvedora front end há 5 anos, atuando no momento com React e com experiência na plataforma Magento 2 Adobe Commerce.</Text>
      <Text>Tenho habilidades em tecnologias web, incluindo HTML5, CSS3, LESS, jQuery e JavaScript. Também trabalhei com PHP, React, TypeScript, Styled Components, Storybook, ESlint e Apollo Client. Meu conhecimento é complementado pelas metodologias ágeis Scrum e Kanban para planejamento estratégico eficiente.</Text>
      <Text>Sou graduada em Sistemas para Internet pela FIAP e, atualmente, estou aprofundando meu conhecimento com um MBA em Desenvolvimento Mobile na mesma instituição.</Text>
    </SectionArea>
  )
}

export { AboutMe }
