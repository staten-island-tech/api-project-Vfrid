import '../styles/style.css'
import { array } from './api.js'

const DOMSelectors ={
  app: document.querySelector('body'),
};
function createcard(){
  return array.forEach((thing)=> DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
`<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${thing.title} </p>
        </div>
          <span class="item_date"> ${thing.author}
          </span>
      </div>
    </div>
  </div>`
  ))
  }
createcard();