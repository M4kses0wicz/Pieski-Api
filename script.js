const img = document.getElementById("img")
const name = document.querySelector(".name");

function getRandom(){
    fetch("https://dog.ceo/api/breeds/image/random").then(res =>{
        return res.json()
    }).then(data =>{

        console.log(data)
        img.src = data.message
    })
}