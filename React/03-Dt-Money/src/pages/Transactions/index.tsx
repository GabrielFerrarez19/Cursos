import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/SerachForm";
import {
  PriceHighLight,
  TranasctionsTable,
  TransactionsContainer,
} from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TranasctionsTable>
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td width="40%">{transactions.description}</td>
                  <td>
                    <PriceHighLight variant={transactions.type}>
                      {transactions.type == "outcome" ? "- " : "+ "}
                      {priceFormatter.format(transactions.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transactions.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TranasctionsTable>
      </TransactionsContainer>
    </div>
  );
}
