/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const gitCard = (responseData) => {
  // create DOM elements
  const newCard = document.createElement('div');
  const userPic = document.createElement('img');
  const name = document.createElement('h1');
  const userName = document.createElement('h1');
  const bio = document.createElement('p');

  // populate text/img from response data
  userPic.src = responseData.avatar_url;
  name.textContent = responseData.name;
  userName.textContent = responseData.login;
  bio.textContent = responseData.bio;
  
  // assign classes
  userPic.classList.add('card');
  name.classList.add('card', 'name');
  userName.classList.add('card', 'username');
  bio.classList.add('card');

  // parent child relationship
  newCard.appendChild(userPic);
  newCard.appendChild(name);
  newCard.appendChild(userName);
  newCard.appendChild(bio);

  return newCard;

}

const entry = document.querySelector('.cards');

axios
  .get("https://api.github.com/users/b1zz3")
  .then(response => {
    console.log('res', response);
    const gitData = response.data;
    const makeCard = gitCard(gitData);
    entry.appendChild(makeCard);
  })
  .catch(error => {
    console.log('we got issues', error);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
