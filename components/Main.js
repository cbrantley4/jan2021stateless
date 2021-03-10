import html from "html-literal";
import * as views from "./views";

<<<<<<< HEAD
export default st =>
  `
    ${views[st.page](st)}
  `;
=======
export default (st) => html`
${views["Home"]()}
${views["Bio"]()}
${views["Gallery"]()}
${views["Form"]()}
`;
>>>>>>> 552ec1d99d63f6f0fa82fc00e57e994cccfe6287
