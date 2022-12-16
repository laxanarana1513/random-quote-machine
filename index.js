window.onload = begin;

const API_URL = "https://type.fit/api/quotes";

const BG_IMAGES = [
    {
        img_url: './images/bg1.jpg'
    },
    {
        img_url: './images/bg2.jpg'
    },
    {
        img_url: './images/bg3.jpg'
    },
    {
        img_url: './images/bg4.jpg'
    },
    {
        img_url: './images/bg5.jpg'
    },
    {
        img_url: './images/bg6.jpg'
    },
    {
        img_url: './images/bg7.jpg'
    },
    {
        img_url: './images/bg8.jpg'
    },
    {
        img_url: './images/bg9.jpg'
    },
    {
        img_url: './images/bg10.jpg'
    },

]


function begin(){
    renderQuotes();

}

async function getApi(url){
    try{
        let response = await fetch(url)
        return await response.json();
    }

    catch(error){
        console.log(error)

    }
 
}

async function renderQuotes(){
    let quotes = await getApi(API_URL);
    let quoteLength = quotes.length;
    let randomIndex = Math.floor(Math.random() * quoteLength)
    let randomData = quotes[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;text=%22"
    twitterLink += "It%E2%80%99s%20not%20the%20years%20in%20your%20life%20that%20count.%20It%E2%80%99s%20the%20life%20in%20your%20years.%22%20"

    twitterLink += "Abraham%20Lincoln"

    document.getElementById("tweet-quote").href = twitterLink
    document.getElementById("text").innerText = randomData.text
    document.getElementById("author").innerText = randomData.author==null ? "Anonymous" : randomData.author
    renderBgImages();
}

function renderBgImages(){
    let imgSize = BG_IMAGES.length;
    let randomBg = Math.floor(Math.random() * imgSize)
    let randomImgs = BG_IMAGES[randomBg]

    document.getElementById("body").style.backgroundImage = "url(" + randomImgs.img_url + ")"
}

