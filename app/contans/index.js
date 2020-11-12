import * as ERROR_MESSAGES from "./ErrorMessages.js";

const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || `http://localhost:8082`;

export { PORT, API_URL, ERROR_MESSAGES };
