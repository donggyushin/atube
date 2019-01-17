import app from "./app";
import "./mongoDB";

const PORT = 3000;

const handleListeningPort = () => {
  console.log(`✅   Atube server listening on port ${PORT}`);
};

app.listen(PORT, handleListeningPort);
