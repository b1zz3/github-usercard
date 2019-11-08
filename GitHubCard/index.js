/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const gitCard = (responseData) => {
  // create DOM elements
  const newCard = document.createElement('div');
  const userPic = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLoc = document.createElement('p');
  const userProf = document.createElement('p');
  const profLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // populate text/img from response data
  userPic.src = responseData.avatar_url;
  name.textContent = responseData.name;
  userName.textContent = responseData.login;
  userLoc.textContent = 'Location: ' + responseData.location;
  userProf.textContent = 'Profile: ';
  profLink.textContent = responseData.html_url;
  profLink.href = responseData.html_url;
  followers.textContent = 'Followers: ' + responseData.followers;
  following.textContent = 'Following: ' + responseData.following;
  bio.textContent = responseData.bio;
  
  // assign classes
  newCard.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // parent child relationship
  newCard.appendChild(userPic);
  newCard.appendChild(info);

  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(userLoc);
  info.appendChild(userProf);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  userProf.appendChild(profLink);
  

  return newCard;

}

// select div to insert new cards
const entry = document.querySelector('.cards');

// pull data from github api
axios
  .get("https://api.github.com/users/b1zz3")
  .then(response => {
    console.log(response);
    const gitData = response.data;
    const makeCard = gitCard(gitData);
    // append card in selected div
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



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
