import fetch from 'node-fetch';
let darksky = 'http://api.darksky.net/forecast/';
let key = 'a9c2384166485c52f088cb36223e2559';
let lat = '37.8267'
let lng = '-122.4233'
GET https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/45.501690,-73.567253
let uri = darksky + key + '/' + lat +'/' +lng;
city.lat =  
console.log(uri);
uri =uri.concat('?units=ca');

let options = {
    method: 'GET',
    mode: 'cors'
}
let req = new fetch.Request(uri,options);

fetch(req)
    .then((response)=>){
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error('Bad HTTP')
        }
    }}
    .then( (j) =>{
        console.log(j.currently.temperature,j.currently.summery);
    })
    .catch( (err)=>){

    }