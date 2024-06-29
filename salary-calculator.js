// Declare input for basic salary, benefits and benefits

const basicSalary = parseFloat(prompt('Enter basic salary: '));

const benefits = parseFloat(prompt('Enter benefits: '));

// INVALID INPUT
if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log('Invalid input. Please enter a valid basic salary and benefits.');
} else if (basicSalary <= 0 || benefits <= 0) {
    console.log('Invalid input. Basic salary and benefits must be greater than 0');
} else {

    // Gross salary
    const grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`)

    // PAYE TAX

    let paye = 0;
    if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
    paye = 2400 + (grossSalary - 24000) * 0.15;
    } else if (grossSalary <= 40667) {
    paye = 6333 + (grossSalary - 32333) * 0.2;
    } else if (grossSalary <= 57000) {
    paye = 11333 + (grossSalary - 40667) * 0.25;
    } else {
    paye = 16333 + (grossSalary - 57000) * 0.3;
    }

    // paye results
    console.log(`PAYE: ${paye}`);

    // NHIF DEDUCTIONS
    const nhifDeductions = 0;

    // gross pay of upto 5999
    if (grossSalary <= 5999) {
    nhifDeductions = 150;
    } 

    //gross pay of 6000 to 7999
    else if (grossSalary <= 7999) {
    nhifDeductions = 300;
    } 

    //gross pay of 8000 to 11999
    else if (grossSalary <= 11999) {
    nhifDeductions = 400;
    } 


    //gross pay of 12000 to 14999
    else if (grossSalary <= 14999) {
    nhifDeductions = 500;
    } 

    //gross pay of 15000 to 19999
    else if (grossSalary <= 19999) {
    nhifDeductions = 600;
    } 

    //gross pay of 20000 to 24999
    else if (grossSalary <= 24999) {
    nhifDeductions = 750;
    }


    //gross pay of 25000 to 29999
    else if (grossSalary <= 29999) {
    nhifDeductions = 850;
    }


    //gross pay of 30000 to 34999
    else if (grossSalary <= 34999) {
    nhifDeductions = 900;
    }


    //gross pay of 35000 to 39999
    else if (grossSalary <= 39999) {
    nhifDeductions = 950;
    }

    //gross pay of 40000 to 44999
    else if (grossSalary <= 44999) {
    nhifDeductions = 1000;
    }

    //gross pay of 45000 to 49999
    else if (grossSalary <= 49999) {
    nhifDeductions = 1100;
    }

    //gross pay of 50000 to 59999
    else if (grossSalary <= 59999) {
    nhifDeductions = 1200;
    }

    //gross pay of 60000 to 69999
    else if (grossSalary <= 69999) {
    nhifDeductions = 1300;
    }

    //gross pay of 70000 to 79999
    else if (grossSalary <= 79999) {
    nhifDeductions = 1400;
    }

    //gross pay of 80000 to 89999
    else if (grossSalary <= 89999) {
    nhifDeductions = 1500;
    }
 
    //gross pay of 90000 to 99999
    else if (grossSalary <= 99999) {
    nhifDeductions = 1600;
    }

    //gross pay of above 100000
    else {
    nhifDeductions = 1700;
    }

    //nhif deductions results
    console.log(`NHIF Deductions: ${nhifDeductions}`);

    //NSSF DEDUCTIONS
    const nssfDeductions = grossSalary * 0.06;

    //results
    console.log(`NSSF Deductions: ${nssfDeductions}`);

    // HOUSING LEVY
    const housingLevy = grossSalary * 0.015;
    
    //results
    console.log(`Housing Levy: ${housingLevy}`);

    // NET SALARY
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions - housingLevy;
    
    //results
    console.log(`Net Salary: ${netSalary}`);

}
