const Budgetforms = document.querySelector('.budget-form'); 
const budgetInput = document.querySelector("#budget-input");
const budgetPrice = document.querySelector("#budget-amount");
const balancePrice = document.querySelector('#balance-amount')
const ExpencePrice = document.querySelector('#expense-amount')
const Expenseforms = document.querySelector('.expense-form'); 
const ExpenseInput = document.querySelector("#expense-input");
const ExpenceWritePrice = document.querySelector("#amount-input")
const expenseList = document.getElementById('expense-list');
const justExpence = document.querySelector('.expense');
// Budget Form & addition in budgetPrice &balancePrice //
 
Budgetforms.addEventListener("submit",function(event){
  event.preventDefault();
  const value1 = budgetInput?.value;
  if(!value1){
    alert("Please Fill This form ?")
    return alert;
  }
  budgetPrice.innerHTML = + budgetInput.value;
  balancePrice.innerHTML = + budgetInput.value;
  budgetInput.value = "";

});

// expense create & addition in Expense & subtraction in balance

Expenseforms.addEventListener('submit',function(event){
event.preventDefault();
let ExpenceTitle = ExpenseInput.value;
let ExpenceAmount = ExpenceWritePrice.value;

const ExpenseCreate = document.createElement('div');
ExpenseCreate.className = "expense";
ExpenseCreate.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
<h6 class="expense-title mb-0 text-uppercase list-item">- ${ExpenceTitle}</h6>
<h5 class="expense-amount mb-0 list-item">- ${ExpenceAmount}</h5>
<div class="expense-icons list-item">
 <a href="#" class="delete-icon"  >
  <i class="fas fa-trash"></i>
 </a>
</div>
</div>`;

expenseList.append(ExpenseCreate);

const NewBlance = balancePrice.innerHTML - ExpenceAmount;
balancePrice.innerHTML = + NewBlance;
ExpencePrice.innerHTML = + (parseInt(ExpencePrice.innerHTML)  +  parseInt(ExpenceAmount));

let value2 = ExpenseInput?.value;

if(value2,ExpenceAmount == 0 || value2,ExpenceAmount == "" ){
  alert("Please Fill This form ?")
  return alert;
}
ExpenseInput.value =  "";
ExpenceWritePrice.value = "" ;
});

    expenseList.addEventListener('click', function(event) {
        event.preventDefault();
         if(event.target.className == "fas fa-trash"){
            console.warn("btn is working");
            if(confirm("seriously ?")){
              event.target.parentElement.parentElement.parentElement.remove();
              console.log("all working");
           }
          }
});
