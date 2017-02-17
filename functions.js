/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws (Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
 * Verifys that the code is only numbers
 * @param   {string}  rawNumber input from user or other function
 * @returns {boolean} returns true or false is string is all numbers or not
 */
function isNumeric(number) {
    if (!isNaN(number) == true && (~number.indexOf("e")) == false) {
        return true
    }
    else {
        var audio = new Audio('error.mp3');
        audio.play();
        return false;
    }
}

/**
 * Returns an area code from a phone Number: (###) ###-####
 * @param   {string} phoneNum The phone Number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && isNumeric(areaCode) == true) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone Number: " + error.message);
    }
}

/**
 * Returns a line code from a phone number: (###) ###-####
 * @throws {Error} If the format is incorrect
 * @param   {string} phoneNum The phine number
 * @returns {string} The pline code
 */
function getLineCode(phoneNum) {
    var lineCode;

    try {
        lineCode = phoneNum.slice(9);
        if (lineCode.length == 4 && isNumeric(lineCode) == true) {
            return lineCode
        } else {
            throw new Error("Invalid line code: " + lineCode);
        }
    } catch (error) {
        throw new Error("Invalid phone Number: " + error.message)
    }
}

/**
 * Returns a CO code from a phone number: (###) ###-####
 * @throws {Error} If the format is incorrect
 * @param   {string} phoneNum The phone number
 * @returns {string} the CO code
 */
function getCO(phoneNum) {
    var coCode;

    try {
        coCode = between(phoneNum, ")", "-");
        coCode = coCode.trim();
        if (coCode.length == 3 && isNumeric(coCode)) {
            return coCode;
        } else {
            throw new Error("Invalid CO code: " + coCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the area code for an inputted phone Number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayEverything(inputId, outputIdArea, outputIdLine, outputIdCO) {
    var outputTextArea = "";
    var outputTextLine = "";
    var outputTextCO = "";
    var phoneNum = document.getElementById(inputId).value;

    try {
        var areaCode = getAreaCode(phoneNum.replace(/ /g,""));
        outputTextArea = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputTextArea = error.message;
    }
        try {
        var lineCode = getLineCode(phoneNum.replace(/ /g,""));
        outputTextLine = "Your line code is " + lineCode;
    } catch (error) {
        console.log(error.message);
        outputTextLine = error.message;
    }
        try {
        var coCode = getCO(phoneNum.replace(/ /g, ""));
        outputTextCO = "Your CO code is " + coCode;
    } catch (error) {
        console.log(error.message);
        outputTextCO = error.message;
    }

    document.getElementById(outputIdArea).innerHTML = outputTextArea;
    document.getElementById(outputIdLine).innerHTML = outputTextLine;
    document.getElementById(outputIdCO).innerHTML = outputTextCO;
}
