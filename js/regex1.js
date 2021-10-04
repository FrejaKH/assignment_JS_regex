let haystack = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="assignment_JS_regex_0.html">Assignment regex 0</a>
    <a href="assignment_JS_regex_1.html">Assignment regex 1</a>
    <script src="js/regex1.js"></script>
</body>
</html>`

let regex = /<a\s*href=[\'"](.+?)[\'"].*?>(.+?)<\/a>/gi;
let a = haystack.match(regex);
console.log(a);

let linkText = document.getElementById("linkText");


function func () {
    for (let elm of a) {
        linkText.textContent += elm;
    }
}

func();




/*
const $ = function (foo) { return document.getElementById(foo); };
const ajaxobj = new XMLHttpRequest();

const getFile = function (ajax, url, callback) {
    console.log(`nml: ${url}`);
    try {
        ajax.addEventListener('load', function(ev) {
            callback(ev);
        });
        ajax.open('get', url);
        ajax.send('');
    } catch(err) {
        window.alert(`WTF: \n${err.message}`);
    }
};

const handler = function (e) {
    $('remote').innerHTML = '';
    let s = e.target.responseText;
    //console.log('nml s ' + s);

    let r = /<a\s*href=[\'"](.+?)[\'"].*?>(.+?)<\/a>/gi;
    let a = s.match(r);
    //console.log(`\nml ${a.length} ${a[1].length}\n ${a}`);

    let di = document.createElement('div');
    let h2 = document.createElement('h2');
    let h2t = document.createTextNode(`Linked URLs found at ${url}`);
    h2.appendChild(h2t);
    di.appendChild(h2);
    let ul = document.createElement('ul');
    for (let elm of a.slice(1)) {
        let li = document.createElement('li');
        let lit = document.createTextNode(elm);
        li.appendChild(lit);
        ul.appendChild(li);
    }
    di.appendChild(ul);
    $('remote').appendChild(di);
}

const getRemoteContent = function (e) {
    let url = $('url').value;
    e.preventDefault();
    getFile(ajaxobj, url, handler);
}

const showStarter = function () {
    const titles = document.getElementsByClassName('title');
    for (let title of titles)
        title.innerHTML = 'Get Linked URLs from Webpage';
    $('btn').addEventListener('click', getRemoteContent);
}

window.addEventListener("load", showStarter);
*/