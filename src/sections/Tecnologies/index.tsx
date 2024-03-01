import { SectionArea, SectionTitle, Flag } from "../../components"
import { Flags } from "./Tecnologies.styles"
import { FaHtml5, FaCss3Alt, FaLess, FaReact, FaJs } from 'react-icons/fa'
import { SiJquery, SiPhp, SiTypescript, SiStorybook, SiEslint } from 'react-icons/si'

const Tecnologies = () => {
  return (
    <SectionArea>
      <SectionTitle>Tecnologias</SectionTitle>
      <Flags>
          <Flag name="HTML5" Icon={FaHtml5} />
          <Flag name="CSS3" Icon={FaCss3Alt} />
          <Flag name="LESS" Icon={FaLess} />
          <Flag name="jQuery" Icon={SiJquery} />
          <Flag name="JavaScript" Icon={FaJs} />
          <Flag name="PHP" Icon={SiPhp} />
          <Flag name="React" Icon={FaReact} />
          <Flag name="TypeScript" Icon={SiTypescript} />
          <Flag name="Storybook" Icon={SiStorybook} />
          <Flag name="ESlint" Icon={SiEslint} />
      </Flags>
    </SectionArea>
  )
}

export { Tecnologies }
