import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoute from "./routes/user.route.js"
import gigRoute  from "./routes/gig.route.js"
import reviewRoute from "./routes/review.route.js"
import messageRoute from "./routes/message.route.js"
import conversationRoute from "./routes/conversation.route.js"
import orderRoute from "./routes/order.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connetced")
    }
    catch (error) {
        console.log(error)
    }
}

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(cookieParser())


app.use("/api/users", userRoute)
app.use("/api/gigs", gigRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);

app.use((err , req , res ,next ) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went Wrong"

    return res.status(errorStatus).send(errorMessage)

})

app.listen(8900,()=>{
    connect()
    console.log("Backend server start")
})