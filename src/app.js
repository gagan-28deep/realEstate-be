import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

export const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}
))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// User Routes
import userRoutes from "./routes/user.routes.js"

app.use("/api/v1/user" , userRoutes)