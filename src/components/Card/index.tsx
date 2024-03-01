import React from "react"
import { CardArea, Area, Position, Period, Description } from './Card.styles'

interface CardProps {
  position: string
  period: string
  children: React.ReactNode
}

const Card = ({ position, period, children }: CardProps) => {
  return (
      <CardArea>
        <Area>
          <Position>{ position }</Position>
          <Period>{ period }</Period>
        </Area>
        <Description>{ children }</Description>
      </CardArea>
  )
}

export { Card }
