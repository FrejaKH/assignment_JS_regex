let inputForm = document.getElementById("text");
let inputText = document.getElementById("inputText");
let btn = document.getElementById("btn");


function func () {
    let haystack = inputForm.value;
    let regex = /^(http\:\/\/www\.|http\:\/\/|www\.|https\:\/\/www\.)([\w]+\.)+([a-zA-Z]{2,})/;
    let a = haystack.match(regex);
    console.log(a);
    inputText.innerHTML = a[2]+a[3];
}

btn.addEventListener("click", func);
