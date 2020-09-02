const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//routes import
const user = require('./routes/user');
const article = require('./routes/article');
const project = require('./routes/project');
const homeSetting = require('./routes/homeSetting');
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//routes use
app.use(express.static('uploads'))
app.use(user)
app.use(project)
app.use(article)
app.use(homeSetting)

const PORT = 5000;
app.listen(PORT,()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`));