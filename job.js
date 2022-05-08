 const  Job = () => {
fetch("./json/job.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    data.map((value) => {
        return(
    document.querySelector(".job-information").innerHTML += "<p>" + value.post + "</p>",
    document.querySelector(".job-information").innerHTML += "<ul>"
    // document.querySelector(".job-information").innerHTML += "<li class = 'job-information-p'>" + value.list + "</li>",
    // document.querySelector(".job-information").innerHTML += "</ul></article>"
        )
    })
    data.map((value) => {
        return(
    document.querySelector(".job-information").innerHTML += "<ul class = 'job-information-p'>" + value.list + "</ul>"
        )
    })

}
)
}
Job();
