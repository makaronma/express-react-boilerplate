const path = require("path");
const express = require("express");

const app = express();

// Have Node serve the files for our built React app
const PORT = process.env.PORT || 5000;

// *** 
// For Deployment
// ***
// app.use(express.static(path.resolve(__dirname, "client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// ***
// For Deployment
// ***
// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
// });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});