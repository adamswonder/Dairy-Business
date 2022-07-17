// Generates output from the user input
const milkProduce = () => {
    const shedA = parseInt(document.getElementById("sA").value);
    document.getElementById("o1").innerHTML = "Your production in Shed A is " + shedA + " litres per day ";
    console.log(shedA);

    const shedB = parseInt(document.getElementById("sB").value);
    document.getElementById("o2").innerHTML = "Your production in Shed B is " + shedB + " litres per day ";
    console.log(shedB);

    const shedC = parseInt(document.getElementById("sC").value);
    document.getElementById("o3").innerHTML = "Your production in Shed C is " + shedC + " litres per day ";
    console.log(shedC);

    const shedD = parseInt(document.getElementById("sD").value);
    document.getElementById("o4").innerHTML = "Your production in Shed D is " + shedD + " litres per day ";
    console.log(shedD);

}
genreport.addEventListener("click", milkProduce);

// Total Production
const totalProduction = () => {
    const shedA = document.getElementById("sA").value;

    const shedB = document.getElementById("sB").value;

    const shedC = document.getElementById("sC").value;

    const shedD = document.getElementById("sD").value;

    var milkProduction = parseInt(shedA) + parseInt(shedB) + parseInt(shedC) + parseInt(shedD);
    document.getElementById("totals").innerHTML = "Your total production in all Sheds is " + milkProduction + " litres per day ";
    console.log(milkProduction);
}
totalprod.addEventListener("click", totalProduction);


// Income Over Time Leap Year

const monthIncome = (sellingPrice, year) => {
    sellingPrice = document.getElementById("sp").value;
    year = [];

    var year = [{
        January: 31},
        {February: 29},
        {March: 31},
        {April: 30},
        {May: 31},
        {June: 30},
        {July: 31},
        {August: 30},
        {September: 31},
        {October: 30},
        {November: 31},
        {December: 30,
    }];

    // capture and store user input to be used for income generation
    const shedA = document.getElementById("sA").value;
    const shedB = document.getElementById("sB").value;
    const shedC = document.getElementById("sC").value;
    const shedD = document.getElementById("sD").value;

    var milkProduction = parseInt(shedA) + parseInt(shedB) + parseInt(shedC) + parseInt(shedD);
    console.log(milkProduction);

    for (let i = 0; i < year.length; i++) {
        lyIncome = year[i] * sellingPrice * milkProduction;
    }
    parseInt(lyIncome);
    document.getElementById("lyIncome").innerHTML = "Your monthly income is " + lyIncome;
}
lpy.addEventListener("click",monthIncome);



const incomeOverTime = (sellingPrice, time) => {
    sellingPrice = document.getElementById("sp").value;
    time = document.getElementById("tm").value;

    // capture and store user input to be used for income generation
    const shedA = document.getElementById("sA").value;
    const shedB = document.getElementById("sB").value;
    const shedC = document.getElementById("sC").value;
    const shedD = document.getElementById("sD").value;

    let milkProduction = parseInt(shedA) + parseInt(shedB) + parseInt(shedC) + parseInt(shedD);
    console.log(milkProduction);

    // users have freedom to change price and time
    const weeklyIncome = sellingPrice * (time/7) * milkProduction;
    const monthlyIncome = sellingPrice * (time/28) * milkProduction;
    const yearlyIncome = sellingPrice * (time/365) * milkProduction;

    // convert inputs into integers
    parseInt(weeklyIncome);
    parseInt(monthlyIncome);
    parseInt(yearlyIncome);

    // Render to  HTML
    document.getElementById("weeklyIncome").innerHTML = "Your weekly income is " + weeklyIncome;
    document.getElementById("monthlyIncome").innerHTML = "Your monthly income is " + monthlyIncome;
    document.getElementById("yearlyIncome").innerHTML = "Your yearly income is " + yearlyIncome;

}
iot.addEventListener("click", incomeOverTime);