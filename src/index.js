// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//     return res.send("Hello World")
// })

// app.listen(3000)

//S>----------------------------------------------------------------------------------------<//

// const express = require('express')
// const morgan = require("morgan");

// const routes = require('./routes')

// const app = express()

// // app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// // app.use(require("./routes"))
// app.use(routes)

// app.listen(3000)

//parei em 24 min - https://www.youtube.com/watch?v=MkkbUfcZUZM&t=2827s

//S>----------------------------------------------------------------------------------------<//
require("dotenv").config()
const express = require('express')
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")

const routes = require('./routes')

const app = express()

/**
 * Database setup
 */
mongoose.connect(
    // "mongodb://localhost:27017/upload",
    process.env.MONGO_URL,
    {
    useNewUrlParser: true
    }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
// app.use(require("./routes"))
app.use(routes)

app.listen(3000)


//mongodb+srv://deploy:<password>@cluster0-y4qus.mongodb.net/test?retryWrites=true

//iniciar o Mongo
// mongod --config /usr/local/etc/mongod.conf