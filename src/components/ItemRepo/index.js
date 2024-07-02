import { ItemContainer } from "./styles"

const ItemRepo = ({repo, handleRemove}) => {
    return(
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">Ver Repositório</a>
            <button onClick={() => handleRemove(repo.id)}>Remover</button>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo