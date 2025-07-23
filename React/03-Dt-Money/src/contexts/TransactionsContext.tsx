import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProvidersProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProvidersProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  console.log(transactions);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3333/transactions");

    if (query) {
      if (query) {
        url.searchParams.append("category", query);
        console.log("URL com filtro:", url.toString()); // Verifique se a URL está correta
      }
    }

    const response = await fetch(url);
    const data: Transaction[] = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
