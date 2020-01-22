

// test 1 --------------------------------------------------------------------


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


// test 2 ------------------------------------------------------------------------

//helper function to count character number

function character_count(str, char) {

    var i, j, character_count = 0;
    for (i = 0; i < string.length; ++i) {
        if (str.charAt(i) == char) {
            character_count += 1;
        }

    }
    return character_count;
}

// function to count character 
function output2() {
    var string1 = document.getElementById("string1").value;
    string = String(string1);

    // refining duplicate character in string

    var x, refine = []; for (x = 0; x < string.length; ++x) {
        var found = false;
        for (var a = 0; a < refine.length; ++a) {
            if (string[x] == refine[a]) {
                found = true;
            }
        }
        if (found == false) {

            refine.push(string[x]);
        }
    }

    // bringing out the output

    var x, output = []; for (x = 0; x < refine.length; ++x) {
        output.push(refine[x] + ' : ' + character_count(string, refine[x]));
    }

    document.getElementById("show1").innerHTML = output.join("<br/>");

    // calculating total character number

    document.getElementById("totalCharacter").innerHTML = string.length;
}


// test 3 --------------------------------------------------------------

// calculator

function input(val) {
    var input = val;

    if (input === '=') {
        //checking if the input is null
        if (document.getElementById('calcInput').value != '') {
            //catching syntax error
            try {
                //if the value is infinity
                if (eval(document.getElementById('calcInput').value) == Infinity) {
                    document.getElementById('calcInput').value = 'Error: Divisible by zero !';
                    document.getElementById("calculator").innerHTML = 'Error: Divisible by zero !';
                } else {
                    document.getElementById('calcInput').value = eval(document.getElementById('calcInput').value);
                    document.getElementById("calculator").innerHTML = document.getElementById('calcInput').value;
                }

            } catch (err) {
                //catching syntax error
                if (err instanceof SyntaxError) {
                    document.getElementById('calcInput').value = 'Error: Syntax Error!';
                    document.getElementById("calculator").innerHTML = 'Error: Syntax Error!';
                }
            }
        }
        //when cancle is clicked
    } else if (input === 'c') {
        document.getElementById('calcInput').value = '';
        document.getElementById("calculator").innerHTML = '';
    } else {
        document.getElementById('calcInput').value += val;
    }

}

// <-----------------------end------------------------>







