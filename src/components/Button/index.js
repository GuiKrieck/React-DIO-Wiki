import { StyledButton } from "./styles"


const Button = ({onClick}) => {
    return(
        <StyledButton onClick={onClick}>
            Buscar
        </StyledButton>
    )
}

export default Button