const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const {userModel} = require("./models/userModel");
const {checkToken} = require("./checkToken");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {userRouter} = require('./routers/userRouter');
app.use('/api/user' ,userRouter);

const {memoryRouter} = require('./routers/memoryRouter');
app.use('/api/memories', memoryRouter);

app.post('/login' ,async (req, res) => {
    console.log(req.body);
    let user = await userModel.findOne({email: req.body.email})
    if(!user) {
        return res.status(401).json({messege: "user not found"});
    }
    let comperPassord = await bcrypt.compare(req.body.password, user.password);
    if(!comperPassord){
        return res.status(401).json({messege: "worng password"});
    }
    let newToken = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "30d"});
    res.json({token: newToken, id:user._id, fullName: user.full_name, type: user.userType});
})


app.all('*',(req,res) => {
    res.send("Page not found");
});

app.listen(process.env.PORT || 3006);
