
let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знаки
let finish = false;

let chislo = ['0', '1','2', '3', '4', '5', '6','7', '8','9', '.'];
let znaki = ['-', '+', 'x','÷','%'];

let calc = document.querySelector('.buttons');
let result = document.querySelector('.calc-screen p');
let clear = document.querySelector('.AC');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    result.textContent = 0;
}

clear.onclick = clearAll;

calc.onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;

    if(event.target.classList.contains('AC')) return;
    result.textContent = '';

    let key = event.target.textContent; // текст внутри Div-a
    
//  есчли нажато число 
    if(chislo.includes(key)){
        if(b==='' && sign===''){
            a += key;
           
            result.textContent = a;   
        } // т.к. перем b=пустой строке, и знак = пустой строке то будет наполнятся перем а
        else if (a!=='' && b!== '' &&  finish) {
            b = key;
            finish = false;
            result.textContent = b;
        }
        else {
            b += key;
            result.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }
// нажатие знаков
    if(znaki.includes(key)){
        sign = key;
        result.textContent = sign;
        console.log(sign)
        return;
    }
// нажатие знака = (результат)
    if(key=== '=') {
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "÷":
                if(b === '0'){
                    result.textContent = 'Ошибка!';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;       
            case "%":
                a = ((a * b) /1000);
                break;
        }
        finish = true; 
        result.textContent = a;
    }

}
// let calc = document.querySelector('.buttons');
// let result = document.querySelector('.calc-screen');

// calc.addEventListener('click', function(event){
//     // console.log(event.target);
//     let value = event.target.innerText;

//     switch(value) {
//         case 'AC':
//             result.innerText = '';
//             break;
        
//         case '=':
//             result.innerText = eval(result.innerText);
//             break;
//         case '/';
            
//         default: 
//             result.innerText += value;        
//     }
    
   
// })