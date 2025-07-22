import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SeachForm } from "../../components/SerachForm";
import {
  PriceHighLight,
  TranasctionsTable,
  TransactionsContainer,
} from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SeachForm />
        <TranasctionsTable>
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td width="40%">{transactions.description}</td>
                  <td>
                    <PriceHighLight variant={transactions.type}>
                      R$ {transactions.price}
                    </PriceHighLight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{transactions.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TranasctionsTable>
      </TransactionsContainer>
    </div>
  );
}
