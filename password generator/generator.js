var numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var symbols_array = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 
'-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':'];

var lowercase_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
'x', 'y', 'z'];

var uppercase_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 
'Z'];

function shuffleArray(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

function generateRandomText(userCriteria) {
    var textLength = userCriteria.symbols + userCriteria.numbers + userCriteria.uppercase + userCriteria.lowercase;

    if (textLength <= 0) {
        return "Text size must be greater than 0.";
    }

    var charArrays = [];

    for (var i = 0; i < userCriteria.symbols; i++) {
        charArrays.push(symbols_array);
    }
    for (var i = 0; i < userCriteria.numbers; i++) {
        charArrays.push(numbers_array);
    }
    for (var i = 0; i < userCriteria.uppercase; i++) {
        charArrays.push(uppercase_array);
    }
    for (var i = 0; i < userCriteria.lowercase; i++) {
        charArrays.push(lowercase_array);
    }

    charArrays = shuffleArray(charArrays);

    var randomText = '';

    for (var i = 0; i < textLength; i++) {
        var randomArray = charArrays[i];
        var randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
        randomText += randomChar;
    }

    return randomText;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate').addEventListener('click', function(){
        const userCriteria = {
            symbols: parseInt(document.getElementById('symbols').value),
            numbers: parseInt(document.getElementById('numbers').value),
            uppercase: parseInt(document.getElementById('uppercase').value),
            lowercase: parseInt(document.getElementById('lowercase').value)
        };

        var p1 = generateRandomText(userCriteria);
        var p2 = generateRandomText(userCriteria);
        var p3 = generateRandomText(userCriteria);
        var p4 = generateRandomText(userCriteria);

        document.getElementById('p1').textContent = p1;
        document.getElementById('p2').textContent = p2;
        document.getElementById('p3').textContent = p3;
        document.getElementById('p4').textContent = p4;
    });
});

