const mongoose =require('mongoose');
const config=require('./utils/config');
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');



console.log('connecting to MongoDb');
//improve dotenv
require("dotenv").config();
//connect to mongodb
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((error) => {
    console.log(process.env.MONGO_URI)
    console.log("error connecting to MongoDb", error);
  });

    const express = require("express");
    const path =require('path');
    const app = express();
    app.use(cors());

    app.use(express.json());
    
    app.use(express.urlencoded({ extended: false }));

    app.get("/", (req, res) => {
      res.status(200).json({ message: "ZEN QUERY" });
    });
    
    
    // Routes
    
    app.use("/api/users", userRoutes);
    app.use("/api/tickets", ticketRoutes);
    
  
    



    // Start the server
app.listen(config.PORT, () =>{
  console.log(`Server running on port ${config.PORT}`);

})


