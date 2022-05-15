const work = () => {
    document.querySelector(".info").innerHTML = `<figure>
    <div>
      <img src="img/NiigemHariutslaga/image 23.png" alt="ajil logo" class="human"/>
      <p>
        Бид хүмүүсийг илүү эрч хүчтэйгээр өргөн цар хүрээнд сэтгэж,
        гайхалтай үр дүн гаргахуйц ажлын байрыг бий болгохыг зорин
        ажилладаг.
      </p>
    </div>
  </figure>
  <figure>
          <img src="img/NiigemHariutslaga/image 24.png" alt="ajil info" />
    </figure>`
}

const ecology = () => {
    document.querySelector(".info").innerHTML = `<section class="buttons">
        <button onclick="water()">УС ХЭМНЭЛТ</button>
        <button onclick="energy()">ЭНЕРГИЙН ЗАРЦУУЛАЛТ</button>
        <button onclick="bottle()">САВ БООДЛЫН МЕНЕЖМЕНТ</button>
    </section>
    <section class="inside">
    </section>`
    water();
}

const water = () => {
    document.querySelector(".inside").innerHTML = "";
    fetch("https://api.jsonbin.io/b/62778a9738be296761fe1244")
    .then(response => response.json())
    .then(data => {
        data.map(value => {
            return(
                document.querySelector(".inside").innerHTML += `<figure class="images">
                <h2>${value.title}</h2>
                <span>${value.p}</span>
                ${value.image.map(elm => {
                    return(
                        `<img src="${elm}" alt="${value.alt}"/>`
                    )
                })}
                </figure>
                `
            )
        })
    })
}

const energy = () => {
    document.querySelector(".inside").innerHTML = "";
    fetch("https://api.jsonbin.io/b/62779206019db46796979376")
    .then(response => response.json())
    .then(data => {
        data.map(value => {
            document.querySelector(".inside").innerHTML += `<figure class="images">
            <h2>${value.title}</h2>
            <span>${value.p}</span>
            <img src="${value.image}" alt="${value.alt}"/>
            </figure>
            `
        })
    })
}

const bottle = () => {
    document.querySelector(".inside").innerHTML = "";
    fetch("https://api.jsonbin.io/b/6277942b019db467969793ef/1")
    .then(response => response.json())
    .then(data => {
        data.map(value => {
            return(
                document.querySelector(".inside").innerHTML += `<figure class="images nopixel">
                <h2>${value.title}</h2>
                <span>${value.p}</span>
                ${value.image.map(elm => {
                    return(
                        `<img src="${elm}" alt="${value.alt}"/>`
                    )
                })}
                </figure>
                `
            )
        })
    })
}


const niigem = () => {
    document.querySelector(".info").innerHTML = "";
    fetch("https://api.jsonbin.io/b/6277a010019db467969797d1")
    .then(response => response.json())
    .then(data => {
        data.map(value => {
            return(
                document.querySelector(".info").innerHTML += `<figure class="niigem">
                    <h2>${value.title}</h2>
                    ${value.p.map(elm => {
                        return(
                            `<span>${elm}</span>`
                        )
                    })}
                    <div>${value.image.map(elm => {
                        return(
                            `<img src="${elm}" alt="${value.alt}"/>`
                        )
                    })}<div>
                </figure>`
            )
        })
    })
}