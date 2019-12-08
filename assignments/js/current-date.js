var dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
document.getElementById('currentDate').innerHTML = new Date().toLocaleString("en-US", dateOptions);