// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerDiv = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(headerTemp);

  headerDiv.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");
}

// const headerContainer = document.querySelector("header-container");
// headerContainer.appendChild(Header());
