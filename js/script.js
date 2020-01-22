// function to find character in string

function findPosition() {
    // getting value from input

    var string = document.getElementById("string").value;
    var letter = document.getElementById("letter").value;

    // converting string value to string format

    string = String(string);

    // searching character in string

    var i, indexes = []; for (i = 0; i < string.length; ++i) {
        if (string.charAt(i) === letter) {
            indexes.push(i);
        }
    }

    // if character is not found in string

    if (indexes.length < 1 || indexes == undefined) {
        indexes[0] = 'N/A';
    }

    // getting first position of character in string

    document.getElementById("show").innerHTML = indexes[0];
}

