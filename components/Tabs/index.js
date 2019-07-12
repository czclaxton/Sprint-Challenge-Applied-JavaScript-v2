// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector(".topics");

axios.get(`https://lambda-times-backend.herokuapp.com/topics`).then(data => {
  const tabsTopics = data.data.topics;
  //   console.log(data);
  tabsTopics.forEach(topic => {
    const newTab = createNewTab(topic);
    topicsDiv.appendChild(newTab);
  });
});
// .catch(error => {
//     console.log('There is an issue', error)
// })

function createNewTab(topic) {
  const tab = document.createElement("div");

  tab.classList.add("tab");

  tab.textContent = topic;

  return tab;
}
