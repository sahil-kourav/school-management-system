// const express = require("express")
// const cors = require("cors")
// const connectDB = require("./database/db.js");
// const dotenv = require("dotenv")
// // const bodyParser = require("body-parser")
// const app = express()
// const Routes = require("./routes/route.js")

// const PORT = process.env.PORT || 5000

// dotenv.config();
// // call database connection here 
// connectDB();

// // app.use(bodyParser.json({ limit: '10mb', extended: true }))
// // app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// app.use(express.json({ limit: '10mb' }));
// app.use(cors());

// // mongoose
// //     .connect(process.env.MONGO_URL, {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true
// //     })
// //     .then(console.log("Connected to MongoDB"))
// //     .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// app.use('/', Routes);

// app.listen(PORT, () => {
//     console.log(`Server started at port no. ${PORT}`)
// })



const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const Routes = require("./routes/route.js");


connectDB();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/', Routes);

app.get('/', (req,res)=>{
    res.send("hello");
})

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server started at port no. ${PORT}`);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
