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

    let milkProduction = parseInt(shedA) + parseInt(shedB) + parseInt(shedC) + parseInt(shedD);
    document.getElementById("totals").innerHTML = "Your total production in all Sheds is " + milkProduction + " litres per day ";
    console.log(milkProduction);
}
totalprod.addEventListener("click", totalProduction);


// Income Over Time
var year = [{
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 30,
    September: 31,
    October: 30,
    November: 31,
    December: 30,
}];

