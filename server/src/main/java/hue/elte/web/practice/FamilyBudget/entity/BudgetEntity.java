package hue.elte.web.practice.FamilyBudget.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BUDGET")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class BudgetEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @Length(min = 2)
    @Column
    @NotNull
    private String title;

    @Column
    private Double amount;

    @NotBlank
    @Length(min = 2)
    @Column
    @NotNull
    private String category;

}
