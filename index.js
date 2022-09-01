function loadCocktails(search){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data => displayCocktail(data.drinks));
}




const displayCocktail = cocktail =>{
    console.log(cocktail.slice(0,10));
    const cocktailArr = cocktail.slice(10);
    cocktailArr.forEach(cocktail=>{
        
        const cardSectionEl = document.getElementById('card-section');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card' ,'card-compact' ,'w-96','bg-base-100' ,'shadow-xl','mx-auto','my-3')
        cardDiv.innerHTML=`
        
        <figure><img src="${cocktail.strDrinkThumb}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${cocktail.strDrink}</h2>
            <p>${cocktail.strInstructions.slice(0,100)}</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
       
        `;
        cardSectionEl.appendChild(cardDiv);
        
    }
       )
}

const search = document.getElementById('search-cocktail').addEventListener('click', ()=>{
    const searchCocktailEl = document.getElementById('search-cocktail');
    console.log('hello');
    const searchText = searchCocktailEl.value ;
    return searchText;
})

loadCocktails();