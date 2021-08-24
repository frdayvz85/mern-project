import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({ limit:'30mb', extended:true}));
app.use(cors());


//Routes
app.use('/posts', postRoutes);
app.get('/', (req, res) => {
    res.send('Post share API.')
})


// Connect to Database
// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
//     .then(()=>app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`)))
//     .catch(err=>console.log(err.message))


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true},() => {
    try {
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
});

//start on server
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})
