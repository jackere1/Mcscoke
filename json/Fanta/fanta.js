const fanta = () =>{
    fetch("../../json/Fanta/fanta.json")
    .then (response => response.json())
    .then (data => {
        console.log(data)
        data.map((value) => {
            return (
               document.getElementById("fantaMore").innerHTML += 
                value.description,
               document.getElementById("fanta").innerHTML += `<img src = " ${value.img} "></img>`, 
               document.getElementById("fantaTable").innerHTML += value.tejeelleg_chanar,
               document.getElementById("fantaTable").innerHTML += `<p>`+value.orts+ `</p>`
   
            )  
         }
        )
       }
    )
}
fanta();