package hue.elte.web.practice.DTO;

public class OutcomeIncomeDTO {
    private Double outcome;
    private Double income;

    public OutcomeIncomeDTO(){}
    public OutcomeIncomeDTO(Double outcome, Double income){
        this.outcome = outcome;
        this.income = income;
    }

    public Double getOutcome(){
        return this.outcome;
    }

    public Double getIncome(){
        return this.income;
    }

    public void setOutcome(Double outcome){
        this.outcome = outcome;
    }

    public void setIncome(Double income){
        this.income = income;
    }
}