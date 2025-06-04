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

export interface Document{
    documentId: string;
    status: string;
}

export interface DocumentItem extends Document{
    documentType: string;
    content: Txs;
}

export interface DocumentStatus extends Document{
    isExisting: boolean;
}
