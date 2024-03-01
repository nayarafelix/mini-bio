import React from 'react'
import { ContainerStyled } from './Container.styles'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export { Container }
