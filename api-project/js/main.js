import '../styles/style.css'
// import { value } from './api.js'

export const DOMSelectors ={
  app: document.querySelector('#app'),
  form: document.querySelector('#form'),
  search: document.querySelector('#search')
};

const request = new XMLHttpRequest();

function createcard(x){
  
  return x.forEach((thing)=> DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
`<a href=${thing.strSource}>
<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${thing.strMeal} </p>
        </div>
          <span class="item_date"> ${thing.strCategory}
          </span>
      </div>
    </div>
  </div>
  </a>`
  ))
  }

function callAPI(e){
  const value = DOMSelectors.search.value
  console.log(value)
  request.open('GET', `https:themealdb.com/api/json/v1/1/search.php?s=${value}`);


// Set the response type to JSON
  request.responseType = 'json';


// Send the request
  request.send();


// Define a callback function to handle the response
  request.onload = function aa(e) {
  // Access the api data
    e.preventDefault();
    const reply = request.response;
    console.log(reply);
    const recipes=reply.meals;
  // Do something with the response
    createcard(recipes);
  }

}


function clearinput(){
  DOMSelectors.search.value="";
}



DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();

  callAPI();
  clearinput();
});

