import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BudgetEntity } from "../entities/budget-entity.model";
import { HttpClient } from "@angular/common/http";
import { OutcomeIncomeDTO } from '../DTO/outcome-incode-dto.model';

@Injectable({ providedIn: "root" })
export class BudgetService {
  constructor(private http: HttpClient) {}

  getBudgetsList(): Observable<BudgetEntity[]> {
    return this.http.get<BudgetEntity[]>("http://localhost:8080/api/budgets");
  }

  getOneBudget(id: number): Observable<BudgetEntity> {
    return this.http.get<BudgetEntity>(`http://localhost:8080/api/budgets/${id}`);
  }

  createBudget(budget: BudgetEntity): Observable<BudgetEntity> {
    return this.http.post<BudgetEntity>(`http://localhost:8080/api/budgets/add`,
    { title: budget.title, amount: budget.amount, category: budget.category},
    );
  }

  // Not implemented in backend
  updateBudget(budget: BudgetEntity): Observable<BudgetEntity> {
    return this.http.post<BudgetEntity>(`http://localhost:8080/api/budgets/update/`,
    { id:budget.id, title: budget.title, amount:budget.amount, category: budget.category},
    );
  }

  getIncomeOutcome(): Observable<OutcomeIncomeDTO> {
    return this.http.get<OutcomeIncomeDTO>('http://localhost:8080/api/budgets/getIncomeOutcome');
  }
}
