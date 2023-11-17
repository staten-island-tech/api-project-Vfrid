import '../styles/style.css'
// import { value } from './api.js'

export const DOMSelectors ={
  app: document.querySelector('body'),
  form: document.querySelector('#form'),
  search: document.querySelector('#search')
};
function callAPI(e){
  const request = new XMLHttpRequest();
  const value = DOMSelectors.search.value
  console.log(value)
  request.open('GET', `https:themealdb.com/api/json/v1/1/search.php?s=${value}`);


// Set the response type to JSON
  request.responseType = 'json';


// Send the request
  request.send();


// Define a callback function to handle the response
  request.onload = function(e) {
  // Access the api data
    e.preventDefault();
    const response = request.response;
    console.log(response)
    const meal=String(response.strMeal);


  // Do something with the response
    console.log(meal);
}
}


function clearinput(){
  DOMSelectors.search.value="";
}

// function createcard(){
//   return response.forEach((thing)=> DOMSelectors.app.insertAdjacentHTML(
//     "afterbegin", 
// `<div class="box">
//     <div class="item">
//       <div class="item_link">
//         <div class="item_bg"></div>

//         <div class="item_title">
//           <p class="name_title">${thing.strMeal} </p>
//         </div>
//           <span class="item_date"> ${thing.strCategory}
//           </span>
//       </div>
//     </div>
//   </div>`
//   ))
//   }


DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();

  callAPI();
  // createcard();
  clearinput();
});

