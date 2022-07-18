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
    // year = [];

    var year = [{
        January: 31
    },
    { February: 29 },
    { March: 31 },
    { April: 30 },
    { May: 31 },
    { June: 30 },
    { July: 31 },
    { August: 30 },
    { September: 31 },
    { October: 30 },
    { November: 31 },
    {
        December: 30,
    }];

    // capture and store user input to be used for income generation
    const shedA = document.getElementById("sA").value;
    const shedB = document.getElementById("sB").value;
    const shedC = document.getElementById("sC").value;
    const shedD = document.getElementById("sD").value;

    var milkProduction = parseInt(shedA) + parseInt(shedB) + parseInt(shedC) + parseInt(shedD);
    console.log(milkProduction);

    // for (let i = 0; i < year.length; i++) {
    //     lyIncome = year[i] * sellingPrice * milkProduction;
    // }
    // parseInt(lyIncome);
    // document.getElementById("lpy").innerHTML = "Your monthly income is " + lyIncome;
    var janIncome = milkProduction * sellingPrice * year[0].January;
    document.getElementById("jan").innerHTML = "Your January income is Ksh. " + janIncome;
    console.log(janIncome)

    var febIncome = milkProduction * sellingPrice * year[1].February;
    document.getElementById("feb").innerHTML = "Your February income is Ksh. " + febIncome;
    console.log(febIncome)

    var marIncome = milkProduction * sellingPrice * year[2].March;
    document.getElementById("mar").innerHTML = "Your March income is Ksh. " + marIncome;
    console.log(marIncome)

    var aprIncome = milkProduction * sellingPrice * year[3].April;
    document.getElementById("apr").innerHTML = "Your April income is Ksh. " + aprIncome;
    console.log(aprIncome)

    var mayIncome = milkProduction * sellingPrice * year[4].May;
    document.getElementById("may").innerHTML = "Your May income is Ksh. " + mayIncome;
    console.log(mayIncome)

    var junIncome = milkProduction * sellingPrice * year[5].June;
    document.getElementById("jun").innerHTML = "Your June income is Ksh. " + junIncome;
    console.log(junIncome)

    var julIncome = milkProduction * sellingPrice * year[6].July;
    document.getElementById("jul").innerHTML = "Your July income is Ksh. " + julIncome;
    console.log(julIncome)

    var augIncome = milkProduction * sellingPrice * year[7].August;
    document.getElementById("aug").innerHTML = "Your August income is Ksh. " + augIncome;
    console.log(augIncome)

    var sepIncome = milkProduction * sellingPrice * year[8].September;
    document.getElementById("sep").innerHTML = "Your September income is Ksh. " + sepIncome;
    console.log(sepIncome)

    var octIncome = milkProduction * sellingPrice * year[9].October;
    document.getElementById("oct").innerHTML = "Your October income is Ksh. " + octIncome;
    console.log(octIncome)

    var novIncome = milkProduction * sellingPrice * year[10].November;
    document.getElementById("nov").innerHTML = "Your November income is Ksh. " + novIncome;
    console.log(novIncome)

    var decIncome = milkProduction * sellingPrice * year[11].December;
    document.getElementById("dec").innerHTML = "Your December income is Ksh. " + decIncome;
    console.log(decIncome)
}
lpy.addEventListener("click", monthIncome);



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
    const weeklyIncome = sellingPrice * (time * 7) * milkProduction;
    const monthlyIncome = sellingPrice * (time * 28) * milkProduction;
    const yearlyIncome = sellingPrice * (time * 365) * milkProduction;

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