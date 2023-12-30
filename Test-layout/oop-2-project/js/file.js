const budgetForm = document.querySelector("#budget-form");
budgetForm.addEventListener("submit",function(e){
    e.preventDefault();
    function UI(){}
    UI.prototype.adBook = function(adKrna){
        let budgetInput = document.querySelector("#budget-input");
        let bugetPriceSafe = document.querySelector("#budget-amount");
        let BalancePRiceSafe = document.querySelector("#balance-amount");
        bugetPriceSafe = +budgetInput
        BalancePRiceSafe = + budgetInput
    }

    function createObject(budgetInput,bugetPriceSafe,BalancePRiceSafe){
        this.BalancePRiceSafe = BalancePRiceSafe,
        this.bugetPriceSafe = bugetPriceSafe,
        this.budgetInput = budgetInput
    }

let Booker = new createObject(
    BalancePRiceSafe.innerHTML
)

let ui = new UI()
ui.adBook()
console.log(ui)
});