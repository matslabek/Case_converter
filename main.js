function getText() {
    return document.getElementById("text").value;
}
function toUpper() {
    document.getElementById("text").value = getText().toUpperCase();
}

function toLower(){
    document.getElementById("text").value = getText().toLowerCase();
}

function toProper(){
    let words = document.getElementById("text").value.split(" ");
    let wordsProper = [];
    for (let word of words){
        if (word !== ""){
            let properL = word[0].toUpperCase();
            wordsProper.push(properL + word.slice(1));
        }
    }
    document.getElementById("text").value = wordsProper.join(" ");
}
//Different approach
function toSentence() {
    let textToConvert = document.getElementById("text").value;
    document.getElementById("text").value = textToConvert.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c){return c.toUpperCase()});
}

function saveTextFile() {
    let element = document.createElement('a');
    let text=document.getElementById("text").value
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let upper = document.getElementById("upper-case");
upper.addEventListener("click", toUpper);

let lower = document.getElementById("lower-case");
lower.addEventListener("click", toLower);

let proper = document.getElementById("proper-case");
proper.addEventListener("click", toProper);

let sentence = document.getElementById("sentence-case");
sentence.addEventListener("click", toSentence);

let save = document.getElementById("save-text-file");
save.addEventListener("click", saveTextFile)
