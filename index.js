const express = require('express');
const cors = require('cors');
const { connection } = require('./db');
const { userRouter } = require('./routes/user.routes');
const { crudRouter } = require('./routes/crud.routes');
require('dotenv').config();
const port = process.env.PORT 
const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRouter)
app.use('/crud', crudRouter)

// importing swagger
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerui = require('swagger-ui-express');
const { version } = require('mongoose');


// swagger 
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API for Task-2",
            version: "0.0.1",
            description: "This api doc contains documentation for api's like register, login and CRUD opperations",
            contact: {
                name: "Kunguma Sakthivel K",
                email: "kungumasakthivel.k@gmail.com",
            }
        },
        servers: [
            {
            url: "http://localhost:4000/",
            },
        ]
    },
    apis: ["./routes/*.js"]
}

const spacs = swaggerjsdoc(options)
app.use(
    "/api-docs",
    swaggerui.serve,
    swaggerui.setup(spacs) 
)

app.get('/', (req, res) => {
    res.send({
        message: 'api is working'
    })
})

app.listen(port, async()=> {
    try{
        await connection
        console.log('db is connected')
    } catch (err) {
        console.log(err.message)
    }
    console.log('server is running on port ' + process.env.PORT);
});