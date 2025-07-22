import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[];
}

interface TransactionsProvidersProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProvidersProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function loadTransactions() {
    const reponse = await fetch("http://localhost:3333/transactions");
    const data = await reponse.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
