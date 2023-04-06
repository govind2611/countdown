const endDate="06 April 2025 10:00:00";
const inputs = document.querySelectorAll("input")

document.getElementById("endDate").innerText= endDate;

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;


    // it will stop the counter if countdown is going negative
    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours;
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes;
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds;
    inputs[3].value = Math.floor(diff) % 60;
}
clock();

// to refresh the webpage after every second
setInterval(
    () => {
        clock()
    },
    1000
)