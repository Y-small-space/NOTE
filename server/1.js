const express = require("express");
const app = express();
const useRoter_ajax = require("./router/ajaxdate.js");

const port = 3000;

app.use(useRoter_ajax);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
