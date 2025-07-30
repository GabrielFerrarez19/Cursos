import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Grid from "./components/Grid.js";
import Form from "./components/Form.js";
import GlobalStyle from "./styles/global";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;
function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  console.log(users);

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form
          getUsers={getUsers}
          onEdit={onEdit}
          setUsers={setUsers}
          setOnEdit={setOnEdit}
        />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
