export interface Transaction{
    account_number: string;
    amount: number;
    currency: string;
    description: string;
    reference: string;
    transaction_date: string;
}

export interface Txs{
    transactions: Transaction[]
}

export interface DocumentItem{
    documentId: string;
    documentType: string;
    status: string;
    content: Txs[];
}