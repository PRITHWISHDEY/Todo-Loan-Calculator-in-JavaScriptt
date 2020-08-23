document.getElementById("loan-form").addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "block";

    e.preventDefault();
    setTimeout(calculateresults, 2000)
});

function calculateresults() {
    // e.preventDefault();
    // console.log("SUbmitting")
    //ui vars

    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterset = parseFloat(interest.value) / 100 / 12;
    const calulatedPayment = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterset, calulatedPayment);
    const monthly = (principal * x * calculatedInterset) / (x - 1);
    // const t = " " + "₹";

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calulatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calulatedPayment) - principal).toFixed(2);
        document.getElementById("results").style.display = "block";
        document.getElementById("loading").style.display = "none";
    } else {
        // console.log("PLease check the numbers");
        showerror("Please check your input");
    }


    function showerror(msg) {
        document.getElementById("results").style.display = "none";
        document.getElementById("loading").style.display = "none";
        const errordiv = document.createElement("div");
        errordiv.className = "alert alert-danger";
        const card = document.querySelector(".card");
        const heading = document.querySelector(".heading");
        errordiv.appendChild(document.createTextNode(msg));
        card.insertBefore(errordiv, heading);

    }

    setTimeout(function () {
        document.querySelector(".alert").remove();

    }, 3500)



}