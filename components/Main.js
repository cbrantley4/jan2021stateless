import html from "html-literal";
import * as views from "./views";

export default (st) => html`
${views["Home"]()}
${views["Bio"]()}
${views["Gallery"]()}
${views["Form"]()}
`;
