export function js_extension_check(x){
    console.log(x)
};

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

export async function createCard(x){
    try{
        console.log(x)
        x.forEach(function(meal){
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
    } catch(error){
        console.log('could not get data (createCard)')
    }
    
}