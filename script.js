const scanBtn =
document.getElementById("scanBtn");

scanBtn.addEventListener("click", checkSpam);

function checkSpam(){

    let text =
    document.getElementById("message")
    .value.toLowerCase();

    let spamWords = [
        "win",
        "free",
        "money",
        "lottery",
        "offer",
        "prize",
        "urgent",
        "cashback",
        "winner",
        "claim",
        "login",
        "payment",
        "credit card",
        "kyc"
    ];

    let detected = [];

    let loading =
    document.getElementById("loading");

    loading.style.display = "block";

    setTimeout(function(){

        for(let i = 0; i < spamWords.length; i++){

            if(text.includes(spamWords[i])){

                detected.push(spamWords[i]);
            }
        }

        let spamScore =
        detected.length * 15;

        if(spamScore > 100){

            spamScore = 100;
        }

        let result =
        document.getElementById("result");

        let percentage =
        document.getElementById("percentage");

        let detectedWords =
        document.getElementById("detectedWords");

        if(detected.length > 0){

            result.innerHTML =
            "⚠ SPAM DETECTED";

            result.style.color = "red";

            percentage.innerHTML =
            "Threat Level : " +
            spamScore + "%";

            detectedWords.innerHTML =
            "Detected Words : " +
            detected.join(", ");

            document.body.classList
            .add("spam-alert");

            let speech =
            new SpeechSynthesisUtterance(
            "Warning. Spam message detected");

            speechSynthesis.speak(speech);

        }
        else{

            result.innerHTML =
            "✓ SAFE MESSAGE";

            result.style.color = "lime";

            percentage.innerHTML =
            "Threat Level : 0%";

            detectedWords.innerHTML =
            "No suspicious words found";

            document.body.classList
            .remove("spam-alert");
        }

        loading.style.display = "none";

    },1500);
}
