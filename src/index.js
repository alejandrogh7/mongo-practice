const app = require("./app.js");
const connectDB = require("./database.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`%listen on port ${PORT}`);
});
