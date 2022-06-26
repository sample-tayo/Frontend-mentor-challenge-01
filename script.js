// document.querySelector('.submit-button').onclick = function () {
//    location.href='index2.html';
// };
// const value =document.getElementsByTagName(value);

// let selectedElement = null;

// if (selectedElement) {
 
//     const changeRating = document.createElement('p')
//     changeRating.classList.add('changerating-span')
//     changeRating.innerText = `You selected ${selectedElement} out of 5`
//     else {
//         alert("Select a rating value first!")
//       }
    
//     }

const submit = document.querySelector('.submit-button');

function onclick() {
    location.href='index2.html';
};

submit.addEventListener('click', onclick);
