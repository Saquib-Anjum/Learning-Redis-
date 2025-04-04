import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
//config
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//port is running here or app is listening here
const PORT = process.env.PORT || 4040;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})