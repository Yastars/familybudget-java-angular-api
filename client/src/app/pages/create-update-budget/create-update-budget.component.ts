import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BudgetService } from "src/app/services/budget.service";
import { BudgetEntity } from 'src/app/entities/budget-entity.model';

@Component({
  selector: "app-create-update-budget",
  templateUrl: "./create-update-budget.component.html",
  styleUrls: ["./create-update-budget.component.css"],
})
export class CreateUpdateBudgetComponent implements OnInit {
  budgetForm: FormGroup;

  idBudgetUpdate: number = undefined;
  isCreateView = true;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private budgetService: BudgetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
      id: [""],
      title: [""],
      amount: [""],
      category: [""],
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      const key = "id";
      if (params.get("id")) this.idBudgetUpdate = +params.get("id");
      if (this.idBudgetUpdate !== undefined) {
        this.isCreateView = false;
        this.updateFormField(this.idBudgetUpdate);
      }
      console.log(params[key]);
    });
  }

  updateFormField(id: number){
    this.budgetService.getOneBudget(id).subscribe( result => {
      this.budgetForm = this.fb.group({
        title: [result.title],
        amount: [result.amount],
        category: [result.category],
      });
    });
    console.log({
      ok: this.budgetForm
    });
  }

  submitFormCreate() {
    if(this.isCreateView){
      this.budgetService.createBudget(this.budgetForm.value).subscribe((res) => {
        console.log("Budget Created with success !"),
          this.router.navigateByUrl("budgets");
      });
    }else{
      let budget: BudgetEntity = this.budgetForm.value;
      budget.id = this.idBudgetUpdate;
      this.budgetService.updateBudget(budget).subscribe((res) => {
        console.log("Budget Updated with success !"),
          this.router.navigateByUrl("budgets");
      });
    }
  }

}
