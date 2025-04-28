// Store è un array di oggetti che rappresenta una serie di prodotti, come se arrivassero dal backend di un ecommerce
// Possiamo usare le conoscenze di JavaScript, HTML e CSS per creare una pagina in cui mostrare i prodotti di questo array.

// importo la funzione "qs"
import {qs,ce} from "./modules/dom-manipulation.js";


let categoriesContainer = qs(`#categoriesContainer`)
let main = document.querySelector(`main`)

// creo la funzione che mi carica le categorie
function getCategories() {
  fetch(`https://fakestoreapi.com/products/categories`)
    .then((response)  => response.json())
    .then((categoriesList) => createButtons(categoriesList));
}

// richiamo la funzione per caricare le categorie
getCategories();

// creo i pulsanti delle categorie
function createButtons(categoriesList){
  categoriesList.forEach(category => {
    let button = ce(`button`)
    button.textContent = category;
    button.classList.add(`button`);
    categoriesContainer.append(button)
  })
} 

// controllo quale pulsante è stato premuto e lo passo alla relativa funzione
categoriesContainer.addEventListener(`click`,(e) => {
  if (e.target.tagName === `BUTTON`){
    getProductByCategory(e.target.textContent)
  }
})

function getProductByCategory(category) {
fetch(`https://fakestoreapi.com/products/category/${category}`)
  .then((response) => response.json())
  .then((articles) => loadArticles(articles));
}

// carico tutti gli articoli e li visualizzo
function loadArticles(articles) {
  main.innerHTML = ``;
  articles.forEach(product => {

    //setto le variabili di appoggio per le proprietà
    let titolo = product.title;
    let descrizione = product.description;
    let immagine = product.image;
    let categoria = product.category;
    let prezzo = product.price;


    // definisco il contenitore di tutti gli article 


    // creo l'oggetto Article e gli assegno 
    let article = ce(`article`);
    article.classList.add(`article`);


    // inserisco tutti gli articoli nel contenitore
    main.append(article);


    // creo la header per la categoria
    let categoryContainer = ce(`div`);
    categoryContainer.classList.add(`category-Container`)
    let txtCategoria = ce(`p`);
    txtCategoria.innerHTML = categoria;
    categoryContainer.append(txtCategoria);
    
    
    // carico il div che conterrà immagine e descrizione
    let imgContainer = ce(`div`);
    imgContainer.classList.add(`img-container`);

    let productImg = ce(`img`);
    productImg.classList.add(`show`);
    productImg.src = immagine;

    let textDescription = ce(`p`);
    textDescription.classList.add(`hidden`,`description`);
    textDescription.innerHTML = descrizione;
    
    imgContainer.prepend(productImg);
    imgContainer.append(textDescription);

    // creo un div per titolo e descrizione
    let textContainer = ce(`div`);
    textContainer.classList.add(`text-container`);
    
    let textTitolo = ce(`h3`);
    textTitolo.classList.add(`titolo`);
    textTitolo.innerHTML = titolo;
    textContainer.prepend(textTitolo);

    // creo un div per prezzo
    let priceContainer = ce(`div`);
    priceContainer.classList.add(`footer-container`);

    let txtPrezzo = ce(`h4`);
    txtPrezzo.classList.add(`prezzo`);
    txtPrezzo.innerHTML = `${prezzo} €`;

    priceContainer.append(txtPrezzo);

    //inserisco tutti le info nell'article
    article.prepend(categoryContainer);
    article.append(imgContainer);
    article.append(textContainer);
    article.append(priceContainer);

    article.addEventListener(`mouseover`,() =>{
      textDescription.classList.replace(`hidden`,`show`);
      productImg.classList.replace(`show`,`hidden`)
    })
    
    // Nascondo
    article.addEventListener(`mouseout`,() =>{
      textDescription.classList.replace(`show`,`hidden`)
      productImg.classList.replace(`hidden`,`show`)
    })

  })
}












