const app = require("./app");

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running. Go to http://localhost:${port}/login.html`);
});
//database reset, renember to insert the specific values again.
