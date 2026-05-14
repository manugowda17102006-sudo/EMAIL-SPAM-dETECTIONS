function checkSpam() {

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
        "kyc",
        "cashback",
        "winner",
        "claim",
        "login",
        "payment",
        "credit card"
    ];

    let detected = [];

    document.getElementById("loading")
    .style.display = "block";

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

        let sound =
        document.getElementById("alarmSound");

        if(detected.length > 0){

            result.innerHTML =
            "⚠ SPAM DETECTED";

            result.style.color = "red";

            percentage.innerHTML =
            "Threat Level : " + spamScore + "%";

            detectedWords.innerHTML =
            "Detected Words : " +
            detected.join(", ");

            document.body.classList
            .add("spam-alert");

            // Voice Alert
            let speech =
            new SpeechSynthesisUtterance(
            "Warning! Spam message detected");

            speechSynthesis.speak(speech);

            // Play Siren
            sound.currentTime = 0;

            sound.play();

            // Stop after 5 seconds
            setTimeout(function(){

                sound.pause();

                sound.currentTime = 0;

            }, 5000);

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

        document.getElementById("loading")
        .style.display = "none";

    }, 1500);
}