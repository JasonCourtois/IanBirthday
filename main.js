window.onload = () => {
    let button = document.getElementById("button");

    let mainContainer = document.getElementById("main-container");

    let header = document.getElementById("header-text");

    let revealImage = document.getElementById("reveal-image");

    let video = document.getElementById("background-video");

    let drums = document.getElementById("drums");

    let drumAudio = new Audio('drumsound.mp3');

    let revealAudio = new Audio("reveal.mp3");


    let clicks = 0;

    let animating = false;

    const updateText = (text) => {
        button.disabled = true;
        animating = true;
        header.style.opacity = "0"; // Fade out

        setTimeout(() => {
            header.innerText = text; // Change text
            header.style.opacity = "1"; // Fade in
        }, 500); // Wait for fade out to complete (matches CSS transition)

        setTimeout(() => {
            animating = false;
            button.disabled = false;
        }, 800) // Extra delay until button is re enabled to ensure goblin reads text
    };

    const bigReveal = () => {
        button.style.display = "none";
        header.style.display = "none";
        drums.style.display = "block";
        drumAudio.play();

        setTimeout(() => {
            video.style.display = "block";

            header.innerHTML = "YOU ARE SEEING ED SHEERAN WITH US! <br/> Mark Saturday September 26th 2026 in your calendar!";
            drums.style.display = "none";

            document.body.style.backgroundColor = "#ff74ca";
            document.documentElement.style.backgroundColor = "#ff74ca";

            revealImage.style.display = "block";

            header.style.display = "block";

            revealAudio.play();

        }, 4000)
    }

    button.onclick = () => {
        if (animating) return;
        
        clicks++;

        switch (clicks) {
            case 1:
                updateText("Are you sure you are ready?");
                break;
            case 2:
                updateText("Are you really REALLY sure?");
                break;
            case 3:
                updateText("Okay but what if you changed your mind and you aren't sure now?");
                break;
            case 4:
                updateText("Alright then, turn your volume up! Drumroll please");
                break;
            case 5:
                bigReveal();
                break;
        }
    };
};
