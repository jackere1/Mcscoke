var currentPage;
const newsPage = pageNumber => {
    fetch("https://mcs-back.azurewebsites.net/api/HttpTriggerApi?code=pR4E9rdem8GJxaxg2hhnw1ipUTMcCcR1bZqQZmlBn7y1AzFuFT2wvQ==")
    .then(response => response.json())
    .then(newsData => {
        console.log(newsData);
        document.querySelector(".pagination_section").innerHTML = `<a href="#" onclick="pageChange(-1)"><< Previous</a>`;
        for(let i = 0; i <= newsData.length / 10; i++) {
            if(i == pageNumber) {
                document.querySelector(".pagination_section").innerHTML += `<a href="#" onclick="newsPage(${i})" class="active" >${i + 1}</a>`
                continue;
            }
            document.querySelector(".pagination_section").innerHTML += `<a href="#" onclick="newsPage(${i})">${i + 1}</a>`
        }
        document.querySelector(".pagination_section").innerHTML += `<a href="#" onclick="pageChange(1)">Next >></a>`;

        if(pageNumber < newsData.length / 10 && pageNumber >= 0) {
            currentPage = pageNumber;
            //10 medee render hiih
            let renderData = [];
            for(let i = 0; i < 10; i++) {
                renderData[i] = newsData[pageNumber * 10 + i];
            }
            console.log(renderData);
            document.getElementById("newsItems").innerHTML = "";
            renderData.map(value => {
                document.getElementById("newsItems").innerHTML += `
                <section class="news">
                    <div class="newsImg" id="img">
                    <img class="news-img" src="img/News/medee${value.id}.jpg" alt="medee${value.id}.jpg bh estoi"></img>
                    </div>
                    <div>
                    <div class="news-title" id="title">${value.title}</div>
                    <div class="news-description" id="description">${value.description}</div>
                    <div class="news-date" id="date">${value.date}</div>
                    </div>
                </section>`
            });
        }
    })
    
}

newsPage(0);
const pageChange = param => {
    newsPage(currentPage + param);
}
