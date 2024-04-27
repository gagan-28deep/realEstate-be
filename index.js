import dotenv from "dotenv"
dotenv.config()

import { connectDb } from "./src/db/db.js"
import { app } from "./src/app.js"

connectDb()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }).catch((err) => {
        console.log("Error connecting to DB");
    })