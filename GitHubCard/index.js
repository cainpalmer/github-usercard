
import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


  const getCards = document.querySelector(".cards");

  axios.get(`https://api.github.com/users/cainpalmer`).then((res) => {
    getCards.appendChild(gitHubCards(res.data));
  });


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach(obj => {
  axios.get(`https://api.github.com/users/${obj}`).then(res => {
    getCards.appendChild(gitHubCards(res.data));
  });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

function gitHubCards({avatar_url, name, login, location, html_url, followers, following, bio}){
  const userCard = document.createElement('div')
  const img = document.createElement('img')
  const userInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')
  const links = document.createElement('href')

  userCard.appendChild(img);
  userCard.appendChild(userInfo);
  userInfo.appendChild(h3);
  userInfo.appendChild(username);
  userInfo.appendChild(userLocation);
  profile.appendChild(links);
  userInfo.appendChild(profile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);

  userCard.classList.add("card");
  userInfo.classList.add("card-info");
  h3.classList.add("name");
  username.classList.add("username");

  img.src = avatar_url;
  h3.textContent = name;
  username.textContent = login;
  userLocation.textContent = location;
  links.href = html_url;
  links.textContent = html_url;
  userFollowers.textContent = followers;
  userFollowing.textContent = following;
  userBio.textContent = bio;

  return userCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
