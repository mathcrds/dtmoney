import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../hooks/useLogin";
import { ContainerLoginPage } from "./styles";

export const Login = () => {
  const navigation = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    navigation("/transactions");
  }

  const { login, setLogin } = useContext(LoginContext);

  return (
    <ContainerLoginPage>
      <TextField
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        required
        id="outlined-required"
        label="Required"
        defaultValue=""
      />

      <Button onClick={handleSubmit} variant="contained" size="large">
        Entrar
      </Button>
    </ContainerLoginPage>
  );
};
