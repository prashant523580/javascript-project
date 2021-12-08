class UI {
    constructor(){
        // this.id  = id; m
        this.budget_feedback = document.getElementById("budget-feedback");
        this.budget_form = document.getElementById("budget-form");
        this.budget = document.getElementById("budget");
        this.budget_calculate = document.getElementById("calculate");
        this.budget_output = document.getElementById("budget-output");
        this.expenses_output = document.getElementById("expenses-output");
        this.balance_output = document.getElementById("balance-output");
        this.expenses_form = document.getElementById("expenses-form");
        this.expenses = document.getElementById("expenses");
        this.expenses_amount = document.getElementById("expensesAmt");
        this.add_expenses = document.getElementById("addExpenses");
        this.expenses_list = document.getElementById("expenses-lists");
        this.item_list = [];
        this.itemId = 0;
    }
    BudgetForm(){
        let budget_value = this.budget.value;
        console.log(budget_value);
        if(budget_value === "" || budget_value < 0){
            this.budget_feedback.innerHTML = `<p> value can not be empty or navigate</p>`;
            setTimeout(() => {
            this.budget_feedback.innerHTML = "";
            },2000);
        }else{
            this.budget_output.innerHTML = budget_value;
            this.budget.value = "";
            this.showBalance();
        }
    }
    showBalance(){
        const expense = this.totalExpenses();
        const total = parseInt(this.budget_output.textContent) - expense;
        this.balance_output.innerHTML = total;
            if(total < 0){
                this.balance_output.style.color = "red";
            }else if(total > 0){
                this.balance_output.style.color = "green";
            }else if(total === 0){
                this.balance_output.style.color = "blue";
            }
    }
    
    ExpensesForm(){
        const expenses_value = this.expenses.value;
        const expenses_amount = this.expenses_amount.value;
        if(expenses_value === '' || expenses_value < 0 || expenses_amount === "" || expenses_amount < 0 ){
            console.log("false");
            this.budget_feedback.innerHTML = `<p>value can not be empty or navigate</p>`;
            setTimeout(() => {
                this.budget_feedback.innerHTML = "";
            },2000);
        }else{
            let amount = parseInt(expenses_amount);
            // console.log(amount)
            this.expenses.value = "";
            this.expenses_amount.value = "";
            let expense_obj = {
                id: this.itemId,
                title: expenses_value,
                amount: amount
            };
            
            this.itemId++;
            this.item_list.push(expense_obj);
            // localStorage.setItem("budget-data", JSON.stringify(this.item_list));
            // console.log(this.item_list)
            this.showExpenses(expense_obj);
               this.showBalance();
            //    this.totalExpenses();
        }
    }
    showExpenses(expense) {
        let html = document.createElement("tr");
        // html.setAttribute("data-id", )
        // this.item_list.forEach((ele) => {
            html.innerHTML = `
            <td>${expense.id}</td>
            <td>${expense.title}</td>
            <td>${expense.amount}</td>
            <td data-id="${expense.id}">edit</td>
            <td data-id="${expense.id}">delete</td>
            `;
            // })
            this.expenses_list.appendChild(html);
        }
        totalExpenses(){
            // console.log(typeof this.budget.value);
            // let total = this.expenses_amount.value;
            // let  total_amount = parseInt(total);
            let total = 0;
            if(this.item_list.length > 0){
                total = this.item_list.reduce((acc,current) => {
                    console.log(` acc ${acc}, current ${current.amount}`);
                            acc += current.amount;
                        return acc;
                },0)
            }
            this.expenses_output.textContent = total;
            return total;
        }
        editExpenses(ele){
                let id = parseInt(ele.children[3].dataset.id);
                let parent = ele;
                // remove from dom
                this.expenses_list.removeChild(parent)
                // remove from the list
                let expense  = this.item_list.filter((item) => {
                   return item.id === id;
                })

                //show value 
                this.expenses.value = expense[0].title;
                this.expenses_amount.value = expense[0].amount;
                //remove from the list 
                let temp_list = this.item_list.filter((item) => {
                    return  item.id !== id;
                })
                this.item_list = temp_list;
                this.showBalance();
        }
        deleteExpenses(ele){
            let id = parseInt(ele.children[4].dataset.id);
            let parent = ele;
            this.expenses_list.removeChild(parent)
            let expense  = this.item_list.filter((item) => {
               return item.id === id;
            })

            let temp_list = this.item_list.filter((item) => {
                return  item.id !== id;
            })
            this.item_list = temp_list;
            this.showBalance();



            console.log(expense)
        }
        // show_Budget_data(elem){
            
        //     let html ="";
        //     elem.forEach(element => {
        //         html += `
        //         <tr>
        //         <td>${element.id}</td>
        //         <td>${element.title}</td>
        //         <td>${element.amount}</td>
        //         <td data-id="${element.id}">edit</td>
        //         <td data-id="${element.id}">delete</td>
        //         </tr>
        //         `
        //     });
        //     this.expenses_list.innerHTML = html;
        // }
    }
    const frontEnd = new UI();
    function evt_Listener(){
        const budgetForm = document.getElementById("budget-form");
        const expenses_form = document.getElementById("expenses-form");
        const expenses_list = document.getElementById("expenses-lists");
        budgetForm.addEventListener("submit", (e) => {
            e.preventDefault();
            frontEnd.BudgetForm();
        })
        expenses_form.addEventListener("submit", (e) => {
            e.preventDefault();
            frontEnd.ExpensesForm();
        })
        expenses_list.addEventListener("click", (e) => {
            // console.log(e.target.textContent)
            if(e.target.textContent == "delete"){
                frontEnd.deleteExpenses(e.target.parentElement);
            }
            if(e.target.textContent == "edit"){
                frontEnd.editExpenses(e.target.parentElement);
            }
        });
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        evt_Listener();
        // let data = localStorage.getItem("budget-data");
        // console.log(data);
        // let arr = [];
        // if(data !== null){
        //     arr = JSON.parse(data);
        // }else{
        //     arr = [];
        // }
        // frontEnd.show_Budget_data(arr);
    });