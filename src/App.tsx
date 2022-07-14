import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";
import { AppRoutes } from "./routes/Routes";
import { LoginProvider } from "./hooks/useLogin";

Modal.setAppElement("#root");

export function App() {
  return (
    <TransactionsProvider>
      <LoginProvider>
        <AppRoutes />
        {/*  <DashBoardPage /> */}
        <GlobalStyle />
      </LoginProvider>
    </TransactionsProvider>
  );
}
