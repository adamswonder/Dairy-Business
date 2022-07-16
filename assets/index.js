// Generates output from the user input
milkProduce = () => {
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

    const data = [shedA, shedB, shedC, shedD]
    const sum = data.reduce((x, y) => x + y, 0);
    var totalProduction = parseInt(sum);
    document.getElementById("o5").innerHTML = "Your production in all Sheds is " + totalProduction + " litres per day ";
    console.log(totalProduction)
}

addBtn.addEventListener("click", milkProduce);

