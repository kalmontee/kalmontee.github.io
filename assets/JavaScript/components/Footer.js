class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="hideSection">
        <div class="footerContainer">
            <div class="footerNameTitle">
                <p>Kelvin Almonte, <span id="year"></span></p>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/almontek/" target="_blank" id="linkedIn"><i
                    class="fab fa-linkedin "></i></a>
  
                <a href="https://github.com/kalmontee" target="_blank" id="git"><i class="fab fa-github"></i></a>
  
                <a href="mailto:kelvin.almonte95@gmail.com? subject=subject text " target="_blank" id="email-link"><i
                    class="fas fa-envelope-square "></i></a>
  
                <a href="KelvinAlmonte-Resume.pdf" target="_blank" id="resume"><i class="far fa-file"></i></a>
            </div>
        </div>
        </footer>
          `;
  }
}

customElements.define("footer-component", Footer);
