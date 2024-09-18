const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("ROL Studio Server");
  console.log(`Server is running at http://localhost:${PORT}`);
});
