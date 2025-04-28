import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recenttransaction',
  templateUrl: './recenttransaction.component.html',
  styleUrls: ['./recenttransaction.component.css']
})
export class RecenttransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() transactions: any[] = [];
  @Input() onTransactionClick: (transaction: any) => void = () => {};

  getTransactionName(transaction: any): string {
    return transaction.symbol || transaction.name || transaction.scheme;
  }

  isRecent(date: Date): boolean {
    const transactionDate = new Date(date);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return transactionDate >= sevenDaysAgo;
  }
}
