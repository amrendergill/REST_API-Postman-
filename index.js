import express from "express";
import bodyParser from "body-parser";
import users from './routes/users.js'; 

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', users)

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`listening on port : http://localhost:${PORT} `)
);

// https://www.youtube.com/watch?v=l8WPWK9mS5M&t=334s
