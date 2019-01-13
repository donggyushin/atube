const express = require("express");
const app = express();
const PORT = 3000;

const handleListening = port => {
  console.log(`A-tube app listening on port ${port}`);
};

app.listen(PORT, handleListening(PORT));
