const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Successfull response.");
});

app.listen(3000, () => console.log("listening on port 3000"));
