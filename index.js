const loadCocktails= async(searchText)=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayCocktail(data.drinks);
}


const displayCocktail = cocktail =>{
    const cardSectionEl = document.getElementById('card-section');
    cardSectionEl.textContent ='';
    const noCocktail = document.getElementById('no-msg-found');
    cocktail = cocktail.slice(0,9);
    if(cocktail.length ==='9'){
        noCocktail.classList.remove('hidden'); 
    }else{
        noCocktail.classList.add('hidden')
    }
   
    
    cocktail.forEach(cocktail=>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card' ,'card-compact' ,'w-96','bg-base-100' ,'shadow-xl','mx-auto','my-3');
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
    document.getElementById('search-cocktail').addEventListener('click', ()=>{
    //  searchText = '';
    const searchFieldEl = document.getElementById('search-field');
    let searchText = searchFieldEl.value ;  

    loadCocktails(searchText);
    
})


// loadCocktails();