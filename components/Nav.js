import html from "html-literal";

<<<<<<< HEAD
export default st => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
=======
export default () => html`
<nav>
<i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${st
        .map((el) => `<li><a href="${el.title}">${el.text}</a></li>`)
        .join("")}
    </ul>
</nav>
>>>>>>> 552ec1d99d63f6f0fa82fc00e57e994cccfe6287
`;
