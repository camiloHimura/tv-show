import * as ERROR_MESSAGES from "./ErrorMessages.js";
import * as ERROR_TYPES from "./ErrorTypes.js";

const API_TIMEOUT = 1000;
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || `http://api.tvmaze.com`;

export { PORT, API_URL, API_TIMEOUT, ERROR_MESSAGES, ERROR_TYPES };
