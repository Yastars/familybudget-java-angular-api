import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { BudgetEntity } from 'src/app/entities/budget-entity.model';


@Component({
  selector: 'app-list-budgets',
  templateUrl: './list-budgets.component.html',
  styleUrls: ['./list-budgets.component.css']
})
export class ListBudgetsComponent implements OnInit {

  constructor(
    private budgetService: BudgetService
  ) { }

  listBudgets: BudgetEntity[];
  ngOnInit(): void {
    this.budgetService.getBudgetsList().subscribe(result => {
      this.listBudgets = result;
  });
  }

}
