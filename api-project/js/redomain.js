import '../styles/style.css'

export const DOMSelectors ={
  app: document.querySelector('#app'),
  form: document.querySelector('#form'),
  category_form: document.querySelector('#cat_form'),
  search: document.querySelector('#search'),
  category_search: document.querySelector('#category_search'),
};

const value = DOMSelectors.search.value;
const name_search_URL = `https:themealdb.com/api/json/v1/1/search.php?s=${value}`;

async function getData(URL){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log('could not get data')
    }

}


DOMSelectors.form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(value);
    getData(name_search_URL);
  });
  
  DOMSelectors.category_form.addEventListener("submit", function (e) {
    e.preventDefault();
    getData(name_search_URL);
  });
  
  
