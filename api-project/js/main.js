import '../styles/style.css'
import { value } from './api.js'

export const DOMSelectors ={
  app: document.querySelector('body'),
  form: document.querySelector('#form'),
  search: document.querySelector('.search')
};

xhr.open('GET', `https://themealdb.com/api/json/v1/1/search.php?s=${value}`);


// Set the response type to JSON
xhr.responseType = 'json';


// Send the request
xhr.send();


// Define a callback function to handle the response
xhr.onload = function() {
  // Access the api data
  const response = xhr.response.response;
  const meal=response.strMeal


  // Do something with the response
  console.log(meal);
}

function clearinput(){
  value="";
}

// DOMSelectors.form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   createcard();
//   clearinput();
// });

// function createcard(){
//   return meals.forEach((thing)=> DOMSelectors.app.insertAdjacentHTML(
//     "afterbegin", 
// `<div class="box">
//     <div class="item">
//       <div class="item_link">
//         <div class="item_bg"></div>

//         <div class="item_title">
//           <p class="name_title">${thing.name} </p>
//         </div>
//           <span class="item_date"> ${thing.ingredients}
//           </span>
//       </div>
//     </div>
//   </div>`
//   ))
//   }
