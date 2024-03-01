import { ContainerStyled } from './Container.styles'

const Container = ({ children }) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export { Container }
