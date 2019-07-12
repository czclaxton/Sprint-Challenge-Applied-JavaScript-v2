// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(data => {
  articleTopicData = data.data.articles;
  bootstrapData = data.data.articles.bootstrap;
  javascriptData = data.data.articles.javascript;
  jqueryData = data.data.articles.jquery;
  nodeData = data.data.articles.node;
  technologyData = data.data.articles.technology;
  //   console.log(data);
  //   console.log(bootstrapData);

  // CREATES ARTICLES FOR THE BOOTSTRAP TOPIC
  bootstrapData.forEach(article => {
    newCard = createNewCard(article);
    cardsContainer.appendChild(newCard);
  });

  // CREATES ARTICLES FOR THE JAVASCRIPT TOPIC
  javascriptData.forEach(article => {
    newCard = createNewCard(article);
    cardsContainer.appendChild(newCard);
  });

  // CREATES ARTICLES FOR THE JQUERY TOPIC
  jqueryData.forEach(article => {
    newCard = createNewCard(article);
    cardsContainer.appendChild(newCard);
  });

  // CREATES ARTICLES FOR THE NODE TOPIC
  nodeData.forEach(article => {
    newCard = createNewCard(article);
    cardsContainer.appendChild(newCard);
  });

  // CREATES ARTICLES FOR THE TECHNOLOGY TOPIC
  technologyData.forEach(article => {
    newCard = createNewCard(article);
    cardsContainer.appendChild(newCard);
  });
});

function createNewCard(article) {
  const cardDiv = document.createElement("div");
  const headline = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  cardDiv.appendChild(headline);
  cardDiv.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  authorContainer.appendChild(authorName);
  imgContainer.appendChild(img);

  cardDiv.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  return cardDiv;
}
