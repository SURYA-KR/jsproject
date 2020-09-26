let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click',function(){
    let str = document.getElementById('txt').value;
    output.innerHTML = str.length;
});