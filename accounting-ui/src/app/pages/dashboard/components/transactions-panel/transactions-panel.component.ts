import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ApiService } from '../../../../core/services/api.service';
import { DocumentItem, Transaction } from '../../../../core/contracts/contracts';
import { Column } from '../../../../core/models/models';


export type Product = { 
  id: string; 
  title: string; 
  description: string; 
  price: string; 
  image: string; 
};
@Component({
  selector: 'app-transactions-panel',
  imports: [
    CommonModule,
    TableModule,
    BadgeModule
  ],
  templateUrl: './transactions-panel.component.html',
  styleUrl: './transactions-panel.component.scss'
})
export class TransactionsPanelComponent implements OnInit {
  statementId = "7095c1db8618cd4dec30ec3047b309f824566868577527d5693cb0a57e1c5a6b" // invoice SOLO
  documentId = "22656226ca68c08b35677d9a0fa461b26e306181e1f5cc97ea89f0b39c0281eb"

  public txs: Transaction[] = [];
  public selectedTransaction!: Transaction;


  cols!: Column[];
  
  constructor(
    private apiService: ApiService
  ) {
    this.cols = [
      { field: 'reference', header: 'Reference' },
      { field: 'description', header: 'Description' },
      { field: 'amount', header: 'Amount' },
      { field: 'currency', header: 'Currency' },
      { field: 'account_number', header: 'Account Number' },
      { field: 'transaction_date', header: 'Transaction Date' },
    ];
    
  }

  ngOnInit(): void {
    this.apiService.getStatementTxs(this.documentId).subscribe((response: DocumentItem) => {
      console.log(response)
      const allTransactions: Transaction[] = response.content.flatMap(item => item.transactions)
      this.txs = allTransactions;
      console.warn(allTransactions)
    })
  }

  onRowSelect($event: TableRowSelectEvent<any>) {
    console.log($event.data);
    // this.appStateService.onTaskSelected(this.selectedTask);
  }

  statusSeverity(amount: number) {
    if (amount < 0) return 'warn';
    else return 'success';
  }
}
