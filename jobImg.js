
const JobImg =  () =>{
    fetch("./json/jobImage.json")
    .then( response => response.json())
        .then(data =>{
            console.log(data);
            data.map((value) => {
                return (
                    document.getElementById("jobImg").innerHTML += `<img class="nature" src="${value.img}"></img>`,
                    w3.slideshow(".nature", 5000)
                )
            })
               
        }
       
        )
}
JobImg();