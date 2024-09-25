function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function celsiusToFahrenhite(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Common js 

module.exports = {
    generateRandomNumber,
    celsiusToFahrenhite
};