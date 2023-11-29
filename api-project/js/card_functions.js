import '../styles/style.css'
import { DOMSelectors } from './main.js'

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