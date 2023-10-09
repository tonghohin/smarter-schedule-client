import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import configuration from "../configuration.json";

const app = initializeApp(configuration.firebase);
const auth = getAuth(app);

export { auth };
