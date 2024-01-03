import '../styles/style.css';
import { js_extension_check, createCatCard, createeverythingcard, createnosourcecard, createnothingcard } from './card_functions';

export const DOMSelectors ={
  app: document.querySelector('#app'),
  form: document.querySelector('#form'),
  category_form: document.querySelector('#cat_form'),
  search: document.querySelector('#search'),
  category_search: document.querySelector('#category_search'),
};

async function getData(URL){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data.meals);
        const meals = data.meals
        console.log(meals)
        console.log(meals.length)
        return meals
    } catch(error){
        console.log('could not get data (getData)')
    }
}

async function createCardsforData(meals){
  meals.forEach((meal)=> createCatCard(meal));
}

async function getFirstData(URL){
  try{
      const response = await fetch(URL);
      const data = await response.json();
      const first_meals = data.meals[0];
      console.log(first_meals);
      return first_meals
  } catch(error){
      console.log('could not get data (getFirstData)')
  }
}



async function getCatData(URL){
  try{
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    const all_meals = data.meals
    const all_names = [];
    all_meals.forEach((dat)=> all_names.push(dat.strMeal));
    // console.log(all_names);
    all_names.forEach(async function(name){
      const now_search_URL = `https:themealdb.com/api/json/v1/1/search.php?s=${name}`;
      const result = await getFirstData(now_search_URL); 
      createCatCard(result);
      
    })
  } catch(error){
      console.log('could not get data (getCatData)')
  }
}

function clearinput(){
  DOMSelectors.search.value="";
  DOMSelectors.category_search.value="";
}
function clearcards(){
  DOMSelectors.app.innerHTML = ""
}


async function dropdown(e){
  try{
    const urly=`https://themealdb.com/api/json/v1/1/categories.php`
    const response = await fetch(urly);
    const data = await response.json();
    const all_cats=data.categories;
    if (DOMSelectors.category_search.innerHTML='<option ></option>'){
      all_cats.forEach((cat)=> DOMSelectors.category_search.insertAdjacentHTML(
        'afterbegin',
        `<option value=${cat.strCategory}> ${cat.strCategory}</option> `
      ))
    }

} catch(error){
    console.log('could not get data')
}

}

dropdown();
clearinput();

DOMSelectors.form.addEventListener("submit", async function (e) {
    e.preventDefault();
    clearcards();
    let value = DOMSelectors.search.value;
    const name_search_URL = `https://themealdb.com/api/json/v1/1/search.php?s=${value}`;
    console.log(value);
    js_extension_check('card_functions js extension works');
    const meals = await getData(name_search_URL);
    createCardsforData(meals);
    clearinput();
  });
  
  DOMSelectors.category_form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearcards();
    let category = DOMSelectors.category_search.value;
    console.log(category);
    const category_search_URL = `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
    getCatData(category_search_URL);
    // const returned_categories = getData(category_search_URL);
    // console.log(returned_categories, 'returned categories')
    // const category_names = []
    // returned_categories.forEach((mel)=> category_names.push(mel.strMeal))
    // console.log(category_names, 'category names')
    clearinput();
  });