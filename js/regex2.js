// Version 1 som printer det rigtige udtryk i consolen
let haystack = "blåbærgrød";
let regex = /[\w]{10}/

if (haystack.match(regex)) {
    s = 'æ,ø,å is a part of the Regular Expression concept of word characters'
} else {
    s = 'æ,ø,å is NOT a part of the Regular Expression concept of word characters';
}

console.log(s);

// Version 2 som printer de karakterer som eksisterer
let text = document.getElementById("text");

let haystack2 = "blåbærgrød";
let regex2 = /\w+/
let a2 = haystack.match(regex2);
console.log(a2);

function func () {
    text.innerHTML = a2;
}
func();


