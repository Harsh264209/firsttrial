// function joined(){
//     let title = document.getElementById('title');
//     title.innerText = 'Thanks for joining masterclass🤩👌';
//     let btn = document.getElementById('btn');
//     btn.style.display = 'none'

// }

// function cube(){
//     let number = document.getElementById('number').value;
//     let result = number*number*number;
//     document.getElementById('result').innerText = result;
//     document.getElementById('number').value = '';
// }

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = (amount / persons).toFixed(2);
    document.getElementById('result').innerText = bill;
}

