import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

import leader from "./routes/moves.routes.js";

app.use("/api/v1/user",leader)



export default app;
