function getWindChill(tempF, wSpeed) {
    if (tempF < 50 && wSpeed > 3) {
        var f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(wSpeed, 0.16)) +
            (0.4275 * tempF * Math.pow(wSpeed, 0.16));
        return f;
    } else {
        return "N/A";
    }
}