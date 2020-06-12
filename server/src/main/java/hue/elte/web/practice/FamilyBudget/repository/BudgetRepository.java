package hue.elte.web.practice.FamilyBudget.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hue.elte.web.practice.FamilyBudget.entity.BudgetEntity;

@Repository
public interface BudgetRepository extends CrudRepository<BudgetEntity, Integer>{
    List<BudgetEntity> findAll();
    // <S extends BudgetEntity>BudgetEntity save(BudgetEntity budget);
    BudgetEntity findById(int id);


    void deleteById(int id);

    List<BudgetEntity> findByCategory(String category);
	
}