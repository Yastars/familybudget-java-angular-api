package hue.elte.web.practice.FamilyBudget.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hue.elte.web.practice.FamilyBudget.entity.BudgetEntity;
import hue.elte.web.practice.FamilyBudget.repository.BudgetRepository;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public List<BudgetEntity> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public BudgetEntity getById(int id) {
        return budgetRepository.findById(id);
    }

    public <S extends BudgetEntity> BudgetEntity insert(BudgetEntity budget) {
        return budgetRepository.save(budget);
    }

    public void delete(int id) {
        budgetRepository.deleteById(id);
    }

    public void update(BudgetEntity budget) {
        budgetRepository.save(budget);
    }
}