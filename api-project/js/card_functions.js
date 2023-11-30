import '../styles/style.css'
import { DOMSelectors } from './main.js'



if (recipes.length === 0){
  DOMSelectors.app.insertAdjacentHTML(
    "afterbegin",
    `<p class="no_cat_message"> There Are No Meals In This Category </p>`
  )
}
else{recipes.forEach(function(meal){
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
}}

export function createeverythingcard(x){
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
export function createnosourcecard(x){
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
export function createnothingcard(x){
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
export function createcatcard(x, y){
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


  request.open('GET', `https:themealdb.com/api/json/v1/1/search.php?s=${str_meals}`);
  request.responseType = 'json';
  request.send();
  request.onload = function aa(e) {
    e.preventDefault();
    const reply = request.response;
    console.log(reply);
    const recipes=reply.meals;
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



const all_str_meals = [];
      all_str_meals.push(x.str_meals);
      console.log(all_str_meals);
      console.log(all_str_meals.length)
      for (let i = 0; i < all_str_meals.length; i++) {
        request.open('GET', `https:themealdb.com/api/json/v1/1/search.php?s=${str_meals}`);
        request.responseType = 'json';
        request.send();
        request.onload = function aa(e) {
          e.preventDefault();
          const reply = request.response;
          console.log(reply);
          const recipes=reply.meals;
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