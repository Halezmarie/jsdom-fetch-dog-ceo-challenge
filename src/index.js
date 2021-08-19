console.log('%c HI', 'color: firebrick')

// Add JavaScript that:
// - on page load, fetches the images using the url above ⬆️
// - parses the response as `JSON`
// - adds image elements to the DOM **for each** 🤔 image in the array

// global scopeeee
const container = document.querySelector("#dog-image-container")
// on page load we are going to fetch the images from this url
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray;

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)


function getImages() {
    fetch(imgUrl)
//  take that response and turn it into json
    .then(resp => resp.json())
// receive back that data and do something with it which involves appending it to the dom
// like the heart of JS ❤
    .then(images => {
    // debugger; 
    // check to see what we will receive for images - it was successful yayyyy
    const imgs = images.message
    // ^ returns an array 
    // take this array of images
    // turn it into img elements using .map, it will modify each of the elements
    // and return a new array with modified elements - CREATE them
    let imgsArray = createImgElement(imgs)
    renderElement(imgsArray)
    })
}
    // console.log(imgs)
    // append each img element to the DOM
    // map over that array b/c wse arent changing anything, we are 

function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i 
    })
}

function renderImg(imgsArray){
    imgsArray.forEach(element => {
        container.innerHTML += element
    })
}

function renderElement(element){
    container.innerHTML += element
}
    // taking what already exists and doing something with it 
    // each time it iterates over the image arrays it adds the next element instead of overwriting the innerhtml

    // Challenge 2
    // - on page load, fetches all the dog breeds using the url above ⬆️
    // - adds the breeds to the page in the `<ul>` provided in `index.html`

    function getBreeds() {
        fetch(breedUrl)
    //  take that response and turn it into json
        .then(resp => resp.json())
    // receive back that data and do something with it which involves appending it to the dom
    // like the heart of JS ❤
        .then(breeds => {
         breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
        // let imgsArray = createImgElement(imgs)
        // renderElement(imgsArray)
        })
    }

    function createLiElement(breedsArray){
        return breedsArray.map((breed) => {
            let li = `<li>${breed}</li>`
            return li
        })
    }

    function renderLis(breedsLis){
        breedsLis.forEach(element => {
            ulContainer.innerHTML += element
        })
    }

    function handleClick(event){
        event.target.style.color = 'purple'
    }

    function handleChange(event) {
       const letter = event.target.value
        // filter out breeds that start with the letter
       const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
       const filteredBreedsLis = createLiElement(filteredBreeds)
       ulContainer.innerHTML = ''
       renderLis(filteredBreedsLis)
    }

// getImages()
getBreeds()