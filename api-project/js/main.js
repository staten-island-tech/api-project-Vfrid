import '../styles/style.css'
// import { createeverythingcard, createnosourcecard, createnothingcard, createcatcard } from './card_functions.js'

export const DOMSelectors ={
  app: document.querySelector('#app'),
  form: document.querySelector('#form'),
  category_form: document.querySelector('#cat_form'),
  search: document.querySelector('#search'),
  category_search: document.querySelector('#category_search')
};

const request = new XMLHttpRequest();

function createeverythingcard(x){
  return DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
  `<a href=${x.strSource}>
  <div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${x.strMeal} </p>
          <p class="goto"> Go To Source Recipe </p>
        </div>
          <span class="item_date"> ${x.strCategory}
          </span>
      </div>
    </div>
  </div>
  </a>`,
  )
}
function createnosourcecard(x){
  return DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
  `<a href=${x.strYoutube}>
  <div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>
          
        <div class="item_title"> 
          <p class="name_title">${x.strMeal} </p>
          <p class="goto"> Go To Video Recipe </p>
        </div> 
          <span class="item_date"> ${x.strCategory}
          </span> 
      </div>
    </div>
  </div>
  </a>`,
  )
}
function createnothingcard(x){
  return DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
  `<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${x.strMeal} </p>
        </div>
          <span class="item_date"> ${x.strCategory}
          </span>
      </div>
    </div>
  </div>`,
  )
}
function createcatcard(x, y){
  return DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
  `<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${x.strMeal} </p>
        </div>
          <span class="item_category"> ${y}
          </span>
      </div>
    </div>
  </div>`
  )
}
function callAPIsearch(e){
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
    recipes.forEach(function(meal){
    if (meal.strSource === null){
      if (meal.strYoutube === null){
        createnothingcard(meal);
        console.log('nothing');
      }
      createnosourcecard(meal);
      console.log('nosource : go to utube')
    }
    else {
      createeverythingcard(meal);
      console.log('everything')
    }})
  }

}
function callAPIcat(e){
  const category = DOMSelectors.category_search.value
  console.log(category)
  request.open('GET', `https:themealdb.com/api/json/v1/1/search.php?s=`);


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
    const all_recipes=reply.meals;
    recipes = all_recipes.filter((recipe)=> recipe.strCategory=== category)
  // Do something with the response
  //   recipes.forEach(function(meal){
  //   createcatcard(meal, category);
  // })
  recipes.forEach(function(meal){
    if (meal.strSource === null){
      if (meal.strYoutube === null){
        createnothingcard(meal);
        console.log('nothing');
      }
      createnosourcecard(meal);
      console.log('nosource : go to utube')
    }
    else {
      createeverythingcard(meal);
      console.log('everything')
    }})
  }

}

function callAPI(e){
  request.open('GET', `https:themealdb.com/api/json/v1/1/search.php?s=`);


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
  recipes.forEach(function(meal){
  if (meal.strSource === null){
    if (meal.strYoutube === null){
      createnothingcard(meal);
      console.log('nothing');
    }
    createnosourcecard(meal);
    console.log('nosource : go to utube')
  }
  else {
    createeverythingcard(meal);
    console.log('everything')
  }})
}

}

function clearinput(){
  DOMSelectors.search.value="";
  DOMSelectors.category_search.value="";
}

function clearcards(){
  DOMSelectors.app.innerHTML = ""
}

callAPI();

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearcards();
  callAPIsearch();
  clearinput();
});

DOMSelectors.category_form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearcards();
  callAPIcat();
  clearinput();
});

