 const  Job = () => {
fetch("./json/job.json")
.then(response => response.json())
.then(data =>{
for(i= 0 ; i < 3 ; i++){
    console.log(data[i].post)
    document.querySelector(".job-information").innerHTML += "<p>" + data[i].post + "</p>"
}

document.querySelector(".job-information").innerHTML += "<ul>";

for(i = 0; i < 3; i++) {
    if(data[i].list.length == 0)
         continue;
for(j = 0; j < data[i].list.length; j++) {
    document.querySelector(".job-information").innerHTML += "<li class = 'job-information-p'>" + data[i].list[j] + "</li>";
}
}

document.querySelector(".job-information").innerHTML += "</ul></article>";
})
}
Job();
