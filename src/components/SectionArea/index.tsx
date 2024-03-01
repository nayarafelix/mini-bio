import React from "react"
import { SectionAreaStyled } from './SectionArea.styles'

interface SectionAreaProps {
  children: React.ReactNode
}

const SectionArea = ({ children }: SectionAreaProps) => {
  return (
      <SectionAreaStyled>{ children }</SectionAreaStyled>
  )
}

export { SectionArea }
