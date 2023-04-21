import express from "express";
import bodyParser from "body-parser";
import { client } from "./client";
import { messageRoute } from "./message";

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(messageRoute);

app.listen(port, () => {
  client.initialize();
  console.log("cliente is running in " + port);
});
