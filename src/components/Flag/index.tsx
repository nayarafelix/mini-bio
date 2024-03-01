import { Button } from './Flag.styles'
import type { FlagProps } from './types'

const Flag = ({ name, Icon }: FlagProps) => {
  return (
      <Button>
        <Icon size={20} />
        <span>{name}</span>
      </Button>
  )
}

export { Flag }
