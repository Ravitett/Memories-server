const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {userModel} = require("./models/userModel");
const {checkToken} = require("./checkToken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {userRouter} = require('./routers/userRouter');
app.use('/api/user', checkToken ,userRouter);

const {memoryRouter} = require('./routers/memoryRouter');
app.use('/api/memories', checkToken ,memoryRouter);

app.post('/token' ,async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})
    if(!user) {
        return res.status(401).json({messege: "user not found"});
    }
    let comperPassord = await bcrypt.compare(req.body.password, user.password);
    if(!comperPassord){
        return res.status(401).json({messege: "worng password"});
    }
    let newToken = jwt.sign({_id: user._id}, "ROTEMSECRET", {expiresIn: "60mins"});
    res.json({token: newToken});
})

app.all('*',(req,res) => {
    res.send("Page not found");
});

app.listen(3006);