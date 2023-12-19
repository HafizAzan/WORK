// let budgetInput = parseInt(document.querySelector('#budget-input').value);
// const Btn1 = document.querySelector("#budget-submit");
// let ExpenceWrite = document.querySelector('#expense-input');
// let AmountInput = document.querySelector('#amount-input');
// const Btn = document.querySelector("#expense-submit");

// let Expence = document.querySelector("#expense-amount");
// let Balance = parseInt(document.querySelector("#balance-amount").innerText);
// const List = document.querySelector('#expense-list');
// const SelectIputField = document.querySelector('.form-control');
// console.log({budgetInput,Btn1,ExpenceWrite,AmountInput,Btn,Amount,Expence,Balance,List});

// // let kaam = {
// //     1Value =  
// // }
// let TotalAmount = 0;

// const InputBox = document.querySelector(".budget-form");
// InputBox.addEventListener('submit', function(event){
//     event.preventDefault();
//     var budget = parseInt(budgetInput);
//     var expense = parseInt(budgetInput);
    
// console.log(InputBox,"SUBMITED!");

// const Selectbudget = document.querySelector('#budget-amount');

// console.log(SelectIputField,"SelectIputField")

// const FieldValue = SelectIputField?.value; 
// console.log(FieldValue,"SelectIputFieldValue");
// if(!FieldValue){
//     alert("Fill your budget")
//     return;
// }

// const SelectRow = document.querySelector(".budget");
// console.log(SelectRow,"SelectRow");
// const CreateKrna = document.createElement("span");
// CreateKrna.id ="budget-amount";
// CreateKrna.innerHTML = `${FieldValue}`
// SelectRow.append(CreateKrna);
// // /================================ //
// const SelectBalance = document.querySelector(".balance");
// console.log(SelectBalance,"SelectBalance");
// const CreateKrnaa = document.createElement("span");
// CreateKrnaa.id ="balance-amount";
// CreateKrnaa.innerHTML = `${FieldValue}`
// SelectBalance.append(CreateKrnaa);
// SelectIputField.value = "";
// update()
// });


document.addEventListener('DOMContentLoaded', function() {
    const budgetForm = document.querySelector('.budget-form');
    const budgetInput = document.getElementById('budget-input');
    const budgetAmount = document.getElementById('budget-amount');
    const expenseAmount = document.getElementById('expense-amount');
    const balanceAmount = document.getElementById('balance-amount');
    const expenseForm = document.querySelector('.expense-form');
    const expenseInput = document.getElementById('expense-input');
    const amountInput = document.getElementById('amount-input');
    const expenseList = document.getElementById('expense-list');
  
    budgetForm.addEventListener('submit', function(event) {
      event.preventDefault();
      budgetAmount.textContent =  + budgetInput.value;
      balanceAmount.textContent =  + budgetInput.value;
      budgetInput.value = '';
    });
  
    expenseForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const expenseTitle = expenseInput.value;
      const expenseValue = amountInput.value;
  
      const expense = document.createElement('div');
      expense.classList.add('expense');
      expense.innerHTML = `
        <div class="expense-item d-flex justify-content-between align-items-baseline">
          <h6 class="expense-title mb-0 text-uppercase list-item">- ${expenseTitle}</h6>
          <h5 class="expense-amount mb-0 list-item">${expenseValue}</h5>
          <div class="expense-icons list-item">
            <a href="#" class="delete-icon">
              <i class="fas fa-trash"></i>
            </a>
          </div>
        </div>
      `;
      expenseList.appendChild(expense);
  
      const newBalance = balanceAmount.textContent - expenseValue;
      balanceAmount.textContent =  + newBalance;
      expenseAmount.textContent =  + (parseInt(expenseAmount.textContent) + parseInt(expenseValue));
      
      expenseInput.value = '';
      amountInput.value = '';
    });
  
    expenseList.addEventListener('click', function(event) {
        event.preventDefault();
         if(event.target.className == "fas fa-trash"){
            console.warn("btn is working");
            if(confirm("seriously ?")){
              event.target.parentElement.parentElement.remove();
              console.log("all working");
              }
         }
        })
        // if (targeter.classList.contains('delete-icon')) {
        //   const parent = targeter.closest('.expense');
        //   const amount = parent.querySelector('.expense-amount').textContent;
        //   const newBalance = balanceAmount.textContent - amount;
        //   balanceAmount.textContent = '$' + newBalance;
        //   expenseAmount.textContent = '$' + (parseInt(expenseAmount.textContent) - parseInt(amount));
        //   parent.remove();
        // }
    // });
  });
  
