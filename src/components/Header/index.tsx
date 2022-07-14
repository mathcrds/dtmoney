import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { LoginContext } from "../../hooks/useLogin";
import { Login } from "../../pages/Login";
import { Container, Content, LoginStyle } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { login, setLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  function handleLogout() {
    navigate(-1);
  }

  return (
    <Container>
      <button className="LogoutButton" onClick={handleLogout} type="button">
        Logout
      </button>

      <Content>
        <div>
          <img src={logoImg} alt="dt money" />
          <LoginStyle>Olá {login}, seja bem-vindo!</LoginStyle>
        </div>

        <div>
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </div>
      </Content>
    </Container>
  );
}
