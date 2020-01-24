/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

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



const createCard = (cardObject) =>{
  
  //creating user elements
  const card = document.createElement('div');
  const usrImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usrTitle = document.createElement('h3');
  const usrName = document.createElement('p');
  const usrLocation = document.createElement('p');
  const usrProfile = document.createElement('p');
  const usrAnchor = document.createElement('a');
  const usrFollowers = document.createElement('p');
  const usrFollowing = document.createElement('p');
  const usrBio = document.createElement('p');

  //appending elements as per the design specified above.
  card.appendChild(usrImg);
  card.appendChild(cardInfo);
  
  cardInfo.appendChild(usrTitle);
  cardInfo.appendChild(usrName);
  cardInfo.appendChild(usrLocation);
  cardInfo.appendChild(usrProfile);
  
  //usrProfile.appendChild(usrAnchor);
  usrProfile.insertAdjacentElement("beforeend",usrAnchor);
  cardInfo.appendChild(usrFollowers);
  cardInfo.appendChild(usrFollowing);
  cardInfo.appendChild(usrBio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usrTitle.classList.add('h3');
  usrName.classList.add('p');
  usrLocation.classList.add('p');
  usrProfile.classList.add('p');
  usrAnchor.classList.add('p');
  usrFollowers.classList.add('p');
  usrFollowing.classList.add('p');
  usrBio.classList.add('p');
  usrTitle.classList.add('name');
  usrName.classList.add('username');

  usrImg.src = cardObject.avatar_url;
  usrTitle.textContent = cardObject.name;
  usrName.textContent =  cardObject.login;
  usrLocation.textContent = 'Location: ' + cardObject.location;
  
  usrAnchor.href = cardObject.html_url;
  usrProfile.textContent = "Profile: ";
  usrAnchor.textContent = cardObject.html_url;
  usrFollowers.textContent = 'Followers: ' +cardObject.followers;
  usrFollowing.textContent = 'Following: '+ cardObject.following;
  usrBio.textContent = cardObject.bio; 

  return card;


}//end create object
const cardAttatch = document.querySelector('.cards');

const axiosPromise = axios.get("https://api.github.com/users/TBmo7");

console.log(axiosPromise);

axiosPromise.then((res)=>{

  console.log('res ', res);
  console.log('res.data.message ',res.data);

  const newCard = (createCard(res.data));

  console.log('newcard', newCard);

  cardAttatch.appendChild(newCard);

});
