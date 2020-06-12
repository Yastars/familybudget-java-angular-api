import { Component, OnInit } from "@angular/core";
import { BudgetService } from "src/app/services/budget.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  outcome = 0.0;
  income = 0.0;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getIncomeOutcome().subscribe((result) => {
      this.outcome = result.outcome,
      this.income = result.income;
    });
  }
}
