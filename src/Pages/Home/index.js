import githubIcon from "assets/github.png"
import { Container } from "./styles";
import Input from "components/Input";
import ItemRepo from "components/ItemRepo";
import { useState } from "react";
import Button from "components/Button";
import { api } from "services/api";

function App() {

  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    await api.get(`repos/${currentRepo}`)
      .then((response) => {
        const isExist = repos.find((repo) => repo.id === response.data.id)
        setCurrentRepo("")
        !isExist ? setRepos([...repos,response.data]) : alert('Repositório já Adicionado')
      })
      .catch(() => {
        alert("Repositório não encontrado!")
      })
  }

  function handleRemove(remove){
    setRepos(repos.filter((repo) => repo.id !== remove))
  }
  return (
    <Container>
      <img src={githubIcon} alt="logo do git hub" width={72} height={72} />
      <Input value={currentRepo} onChange={(event) => setCurrentRepo(event.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => <ItemRepo key={repo.name} repo={repo} handleRemove={(remove) => handleRemove(remove)} />)}
    </Container>
  );
}

export default App;
