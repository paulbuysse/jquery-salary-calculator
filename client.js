$(document).ready(readyNow);

function readyNow() {
    console.log('jq and js ready');

    //xadd inputs: first name, last name, id number, job title, and annual salary.

    //SUBMIT BUTTON
    //xcollects form info
    //xstores it
    //xappends info to dom
    //xclears inputs
    //xusing annual salary, calculates MONTHLY salary total cost
    //xappend monthly salary to DOM
    //xif monthly costs exceed 20,000, highlight number in red

    //xcreate a delete button for employee objects

    //make button click
    $('#submitBtn').on('click', appendToDom);

    //removes employee from employeeArray
    function deleteEmployee() {
        console.log('d');
    }

    let employeeArray = [];

    function deleteEmployee() {
        $(this).closest('tr').remove();

        for (let i = 0; i < employeeArray.length; i++) {
            if (employeeArray[i].firstName = $(this).closest('employeeArray.firstName')) {
                console.log(employeeArray.firstName)
            }
        }
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

        //no empty inputs!
        if (employeeFirstName === '' || employeeLastName === '' || employeeId === '' || employeeTitle === '' || employeeAnnualSalary === '') {
            alert('Please fill all input fields!');
            return false;
        }

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
        <td class="annualSalarySec"> $${employee.annualSalary} </td>
        <td> <button class="deleteSec">Delete</button> </td>
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

            $('#monthlyTotal').append(`<h1 class="possiblyRed">Monthly Total: $${monthlySalaryTotal.toFixed(2)} </h1>`)

            if (monthlySalaryTotal > 20000) {
                console.log('this is working!!')
                $('.possiblyRed').addClass("isRed");
                $('#monthlyTotal').append(`<h3> $${monthlySalaryTotal.toFixed(2) - 20000} over budget!</h3>`);
            }
            console.log(monthlySalaryTotal);







        }


    }


}
