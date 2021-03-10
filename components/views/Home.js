import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Savvy Coders Jan. 2021 Cohort</h2>
    <a href="register.html">"Call to Action" "Button"</a>
    <h3>Weather in ${st.weather.city}: ${st.weather.description}.</h3>
  </section>
`;
