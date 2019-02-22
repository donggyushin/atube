import app from "./app";
import "./mongoDB";
import dotenv from "dotenv";
dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT;

const handleListeningPort = () => {
  console.log(`✅   Atube server listening on port ${PORT}`);
};

app.listen(PORT, handleListeningPort);
