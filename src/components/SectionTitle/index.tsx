import React from 'react'
import { Title } from './SectionTitle.styles.ts'

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <Title>{ children }</Title>
}

export { SectionTitle }
