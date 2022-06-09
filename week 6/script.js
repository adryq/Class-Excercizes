function initialize() {
    //call url to get teh music list: fetch
    //build the cards with the data
    fetch(https://band-backend-obmzk.ondigitalocean.app/music)
    .then( (response) => response.json())
    .then( (data) => console.log(data))
    .catch( (err) => console.log(err));
}
