const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const app = express();
const port = 5000;
const cors = require('cors');
const complaintRoute = require('./routes/complaintRoute');

mongoose.connect("mongodb+srv://huzailisani:offVeDr5XDzkEgoQ@huzailapi.mawoenp.mongodb.net/HuzailApi?retryWrites=true&w=majority")
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err))


app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/c", complaintRoute)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});