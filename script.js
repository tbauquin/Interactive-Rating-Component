var a;
const btn1 = document.querySelector('.a1');
const btn2 = document.querySelector('.a2');
const btn3 = document.querySelector('.a3');
const btn4 = document.querySelector('.a4');
const btn5 = document.querySelector('.a5');
const cardChoice = document.querySelector('.choice');
const cardRate = document.querySelector('.rate');

const tab = [{ btn: btn1, val: 1 }, { btn: btn2, val: 2 }, { btn: btn3, val: 3 }, { btn: btn4, val: 4 }, { btn: btn5, val: 5 }];

tab.forEach(element => {
    element.btn.addEventListener('click', () => {
        removeAllActive();
        element.btn.classList.add('active');
        a = element.val;
    })
});

function removeAllActive() {
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
}

function getRating() {
    cardChoice.classList.add('deactivate');
    cardRate.classList.remove('deactivate');
    console.log(a);
    document.getElementById("rate").innerHTML = a;
}




