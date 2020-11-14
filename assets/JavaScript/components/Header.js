class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="hideSection">
        <div class="header-container">
            <div id="branding">
                <h1 id="home-click"><a id="home-click" href="index.html">Kelvin <span>Almonte</span></a></h1>
            </div>
            <nav>
                <a href="about-me.html">About Me</a>
                <a href="portfolio.html">Projects</a>
                <a href="contact.html">Contact</a>
                <!-- <a href="#">Blog</a> -->
            </nav>
        </div>
        </header>
        `;
  }
}

customElements.define("header-component", Header);