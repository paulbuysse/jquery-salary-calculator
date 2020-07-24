$(document).ready(readyNow);

function readyNow() {
    console.log('jq and js ready');

    //xadd inputs: first name, last name, id number, job title, and annual salary.

    //SUBMIT BUTTON
    //xcollects form info
    //xstores it
    //xappends info to dom
    //xclears inputs
    //using annual salary, calculates MONTHLY salary total cost
    //append monthly salary to DOM
    //if monthly costs exceed 20,000, highlight number in red

    //*********create a delete button for employee objects******

    //make button click
    $('#submitBtn').on('click', appendToDom);


    let employeeArray = [];

    function deleteEmployee() {
        $(this).closest('tr').remove();
    }

    function appendToDom() {
        //test
        console.log('button working!')

        //empty td's
        $('#bigTable').empty();


        //variable inputs
        const employeeFirstName = $('#firstNameInput').val();
        const employeeLastName = $('#lastNameInput').val();
        const employeeId = $('#idInput').val();
        const employeeTitle = $('#titleInput').val();
        const employeeAnnualSalary = $('#annualSalaryInput').val();

        //adding to object array
        let employeeObject = {
            firstName: employeeFirstName,
            lastName: employeeLastName,
            id: employeeId,
            title: employeeTitle,
            annualSalary: employeeAnnualSalary,
        }

        employeeArray.push(employeeObject);

        console.log(employeeArray);

        //append info to dom

        for (let employee of employeeArray) {
            $('#bigTable').append(`<tr>
        <td class="firstNameSec"> ${employee.firstName} </th>
        <td class="lastNameSec"> ${employee.lastName} </td>
        <td class="idSec"> ${employee.id} </td>
        <td class="titleSec"> ${employee.title} </td>
        <td class="annualSalarySec"> ${employee.annualSalary} <button class="deleteSec">Delete</button> </td>
    </tr>`)
        }

        //clear inputs
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#annualSalaryInput').val('');

        $('.deleteSec').on('click', deleteEmployee);

        let monthlySalaryTotal = 0



        //calculating monthly


        $('#monthlyTotal').empty();

        const annualSalary = employeeObject.annualSalary;

        console.log(annualSalary)

        monthlySalary = annualSalary / 12;

        console.log(monthlySalary);

        for (let i = 0; i < employeeArray.length; i++) {
            monthlySalaryTotal += (employeeArray[i].annualSalary / 12)

            $('#monthlyTotal').empty();

            $('#monthlyTotal').append(`<h1 id="possiblyRed">Monthly Total: ${monthlySalaryTotal} </h1>`)

        if (monthlySalaryTotal > 20000) {
            console.log('this is working!!')
            $('#possiblyRed').addClass("isRed");
        }
        console.log(monthlySalaryTotal);
        






        }


    }


}


