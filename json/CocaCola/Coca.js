const Cola = () =>{
 fetch("../json/CocaCola/cocaCola.json")
 .then (response => response.json())
 .then (data => {
     console.log(data)
     data.map((value) => {
         return (
            document.querySelector(".tailbar ").innerHTML += 
             value.description,
            document.querySelector(".colas").innerHTML += `<img src = " ${value.img} "></img>` ,
            document.getElementById("colaTable").innerHTML += value.tejeelleg_chanar,
            document.getElementById("colaTable").innerHTML += `<p>`+value.orts+ `</p>`

         )  
      }
     )
    }
 )
}
Cola() ;
const zeroCola = () => {
    fetch ( "../../json/CocaCola/zeroCola.json")
    .then (response => response.json())
    .then(data => {
        console.log(data)
        data.map((value)=>{
            return (
                document.getElementById("zeroDes").innerHTML += value.description,
                document.getElementById("zeroCola").innerHTML += `<img src = "${value.img}" > </img>` ,
                document.getElementById("zeroColaTable").innerHTML += value.tejeelleg_chanar,
                document.getElementById("zeroColaTable").innerHTML += `<p>`+value.orts+ `</p>`
              
            )
        }
       
        )
    })
}
zeroCola();

const plusCola = () =>{
    fetch("../../json/CocaCola/plusCola.json") 
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.map((value)=>{
            return(
                document.getElementById("plusDes").innerHTML +=value.description,
                document.getElementById("plusCola").innerHTML += `<img src = "${value.img}" > </img>` ,
                document.getElementById("plusColaTable").innerHTML += value.tejeelleg_chanar,
                document.getElementById("plusColaTable").innerHTML += `<p>`+value.orts+ `</p>`
            )
        })
    })
}
plusCola();