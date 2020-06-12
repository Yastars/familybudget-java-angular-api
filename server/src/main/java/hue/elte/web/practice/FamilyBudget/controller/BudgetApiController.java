package hue.elte.web.practice.FamilyBudget.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import hue.elte.web.practice.DTO.OutcomeIncomeDTO;
import hue.elte.web.practice.FamilyBudget.entity.BudgetEntity;
import hue.elte.web.practice.FamilyBudget.service.BudgetService;

@RestController
@RequestMapping("/api/budgets")
@CrossOrigin(origins = "http://localhost:4200")
public class BudgetApiController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping("")
    private List<BudgetEntity> getBudgets(){
        return budgetService.getAllBudgets();
    }


    @GetMapping("/{id}")
    private BudgetEntity getById(@PathVariable int id){
        return budgetService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    private void delete(@PathVariable int id){
        budgetService.delete(id);
    }

    @PostMapping(path="/add", consumes = "application/json", produces = "application/json")
    private void insertBudget (@RequestBody BudgetEntity budget){
        budgetService.insert(budget);
    }

    @PostMapping(path="/update", consumes = "application/json", produces = "application/json")
    private void updateBudget (@RequestBody BudgetEntity budget){
        budgetService.update(budget);
    }

    @GetMapping(path="/getIncomeOutcome", produces = "application/json")
    private OutcomeIncomeDTO getIncomeOutcome (){
        List<BudgetEntity> list = budgetService.getAllBudgets();
        OutcomeIncomeDTO result;

        Double outcome = 0.0;
        Double income = 0.0;

        for (BudgetEntity budget : list) {
            if (budget.getAmount() < 0)
                outcome += budget.getAmount();
            else
                income += budget.getAmount();
        }

        result = new OutcomeIncomeDTO(outcome, income);
        return result;
    }
}