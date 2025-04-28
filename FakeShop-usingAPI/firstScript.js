// Store è un array di oggetti che rappresenta una serie di prodotti, come se arrivassero dal backend di un ecommerce
// Possiamo usare le conoscenze di JavaScript, HTML e CSS per creare una pagina in cui mostrare i prodotti di questo array.
let store = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
]




console.log(store);

// ------ Solution -------
// per ogni prodotto che mi arriva dallo store, creo un oggetto e lo passo alla funzione
store.forEach(product => createProduct(product))

// ------- Functions -------------
// di ogni oggetto che mi arriva, estraggo gli elementi che mi servono e li poggio su delle variabili
function createProduct(product){

  //setto le variabili di appoggio per le proprietà
  let titolo = product.title;
  let descrizione = product.description;
  let immagine = product.image;
  let categoria = product.category;
  let prezzo = product.price;


  // definisco il contenitore di tutti gli article 
  let container = document.querySelector(`main`);


  // creo l'oggetto Article e gli assegno 
  let article = document.createElement(`article`);
  article.classList.add(`article`);


  // inserisco tutti gli articoli nel contenitore
  container.append(article);


  // creo la header per la categoria
  let categoryContainer = document.createElement(`div`);
  categoryContainer.classList.add(`category-Container`)
  let txtCategoria = document.createElement(`p`);
  txtCategoria.innerHTML = categoria;
  categoryContainer.append(txtCategoria);
  
  
  // carico il div che conterrà immagine e descrizione
  let imgContainer = document.createElement(`div`);
  imgContainer.classList.add(`img-container`)

  let productImg = document.createElement(`img`);
  productImg.classList.add(`show`);
  productImg.src = immagine;

  let textDescription = document.createElement(`p`);
  textDescription.classList.add(`hidden`,`description`);
  textDescription.innerHTML = descrizione;
  
  imgContainer.prepend(productImg);
  imgContainer.append(textDescription);
  
  
  // creo un div per titolo e descrizione
  let textContainer = document.createElement(`div`);
  textContainer.classList.add(`text-container`);
  
  let textTitolo = document.createElement(`h3`);
  textTitolo.classList.add(`titolo`)
  textTitolo.innerHTML = titolo;
  
  textContainer.prepend(textTitolo);
  
  
  // creo un div per prezzo
  let priceContainer = document.createElement(`div`);
  priceContainer.classList.add(`footer-container`);

  let txtPrezzo = document.createElement(`h4`);
  txtPrezzo.classList.add(`prezzo`);
  txtPrezzo.innerHTML = `${prezzo} €`;

  priceContainer.append(txtPrezzo);
  
  
  //inserisco tutti le info nell'article
  article.prepend(categoryContainer);
  article.append(imgContainer);
  article.append(textContainer);
  article.append(priceContainer);
  
  
  //creo gli eventi per visualizzare o nascondere la descrizione

  // Mostro
  article.addEventListener(`mouseover`,() =>{
    textDescription.classList.replace(`hidden`,`show`);
    productImg.classList.replace(`show`,`hidden`)
  })
  
  // Nascondo
  article.addEventListener(`mouseout`,() =>{
    textDescription.classList.replace(`show`,`hidden`)
    productImg.classList.replace(`hidden`,`show`)
  })

}

