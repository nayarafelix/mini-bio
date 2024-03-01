import { CardArea, Area, Position, Period, Description } from './Card.styles'

const Card = ({ position, period, children }) => {
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
