import html from "html-literal";

export default () => html`
<nav>
<i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${st
        .map((el) => `<li><a href="${el.title}">${el.text}</a></li>`)
        .join("")}
    </ul>
</nav>
`;
