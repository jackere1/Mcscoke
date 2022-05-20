class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="nav">
         <section class="nav-logo">
         <a href = "index.html">
            <img src="img/Navbar/mcs_logo_nav.png"/>
          <a/>
           </section>
        <ul class="nav-menu">
          <li class="nav-item activeNav "><a href="index.html" class="nav-link ">Нүүр хуудас</a></li>
          <li class="nav-item"><a href="Products.html" class="nav-link">Бүтээгдэхүүнүүд</a></li>
          <li class="nav-item"><a href="aboutus.html" class="nav-link">Бидний тухай</a></li>
          <li class="nav-item"><a href="niigem.html" class="nav-link">Нийгмийн хариуцлага</a></li>
          <li class="nav-item"><a href="medee.html" class="nav-link">Мэдээ мэдээлэл</a></li>
        </ul>
      <section class="mcs-logo">
         <img src="img/Navbar/cola_logo_nav.png" alt="logo">
      </section>
      <section class="hamburger">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
   </section>
   </nav>
    `;
  }
}
customElements.define("mcs-header", Header);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <section class="footer ">
      <section class="footer-product">
         <ul>
            <h5><a href="Products.html">Бренд</a></h5>
            <hr>
            <li><a href="productDetails.html">Coca-Cola</a></li>
            <li><a href="productDetails.html">Fanta</a></li>
            <li><a href="productDetails.html">Sprite</a></li>
            <li><a href="productDetails.html">Fuzetea</a></li>
            <li><a href="productDetails.html">Minute Maid</a></li>
            <li><a href="productDetails.html">Powerade</a></li>
            <li><a href="productDetails.html">Peace Tea</a></li>
         </ul>
      
      </section>
      <article class="social-responsibility">
      <ul>
        <h5><a href="niigem.html">НИЙГМИЙН ХАРИУЦЛАГА</a></h5>
        <hr>
        <li><a href="niigem.html">Эрүүл, идэвхтэй амьдрал</a></li>
        <li><a href="job.html">Ажлын байр</a></li>
        <li><a href="niigem.html">Энергийн менежмэнт</a></li>
        <li><a href="niigem.html">Ус хэмнэлт</a></li>
        <li><a href="niigem.html">Сав баглаа боодлын менежмэнт</a></li>
        <li><a href="niigem.html">Хамтарч ажиллах санал хүсэлт</a></li>
      </ul>
      </article>
      <article class="footer-aboutus">
         <ul>
        <h5 ><a href="aboutus.html">БИДНИЙ ТУХАЙ </a></h5>
        <hr>
        <li><a href="aboutus.html">М-СИ-ЭС Кока-Кола ХХК-ийн тухай</a></li>
        <li><a href="aboutus.html">М-СИ-ЭС Группын тухай</a></li>
        <li><a href="aboutus.html">Кока-Кола компанийн тухай</a></li>
        <h5><a href="medee.html">МЭДЭЭ МЭДЭЭЛЭЛ</a></h5>
        <hr>
        <li><a href="medee.html">Мэдээ</a></li>
        <li><a href="medee.html">Фото</a></li>
        <li><a href="medee.html">Видео</a></li>
      </ul>
      </article>
      <section class="footer-contact">
        <p>ХОЛБОГДОХ</p>
        <hr>
        <form class= "footer-contact">
        <div >
         <label for="type">Төрлөө сонгоно уу?</label>
          <select id="type" name="type">
      <option value="message">Гомдол , санал</option>
      <option value="message">Хамтран ажиллаж санал</option>
    </select> </div> <br />
    <div>
          <label for="email">Имэйл</label> <br />
          <input class = "phoneNumber" type="text" id="email" name="mail" /><br />
          <label for="phone">Утас</label> <br />
          <input class = "phoneNumber" type="text" id="phone" name="number" /><br />
          <label for="message">Мессеж</label> <br />
          <input class="message" type="text" id="message" name="sms" /><br />
          <br />
          <input class="footer-contact-button" type="submit" value="Илгээнэ үү" />
        </form>
      </section>
      </section>
      <section class="footer-bottom ">
      <section class="footer-Logo">
         <picture>
            <source
            srcset="img/footer/footer-logo 1.png"
            media="(min-width:1020px)"
            />
            <source
            srcset="/img/footer/footer-logo 1.png"
            media="(min-width:800px)"
            />
            <img src="img/footer/footer.png" alt="footer-logo" />
          </picture>
        </section>
        <section class="icons">
           <a href="https://www.facebook.com/CocaColaMongolia">
               <img class="icon" alt="icons" src="img/Footer/facebook.png" />
           </a>
           <a href="https://www.instagram.com/cocacolamongolia/" >
            <img class="icon" alt="icons" src="img/Footer/instagram.png" />
           </a>
           <a href="https://www.youtube.com/channel/UCtqoKNEFjf6qiTk7J846XpQ">
            <img class="icon" alt="icons" src="img/Footer/youtube.png" />
           </a>
         
         
        </section>
        <article class="bottom-footer-title">
          <p>COPYRIGHT © MCS Coca-Cola Company</p>
        </article>
      </section>
  
    `;
  }
}
customElements.define("mcs-footer", Footer);
