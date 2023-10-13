const express = require("express")
const {sequelize}=require('./src/models')
const book=require("./src/routes/book")
const student=require("./src/routes/student")
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/books', book);
app.use('/students',student)

app.listen({ port: 5000 }, async () => {
    console.log("server up on http://localhost:5000");
    await sequelize.authenticate();
    console.log("Database connected!");
  });
