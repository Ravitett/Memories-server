const express = require('express');
<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const {userModel} = require("./models/userModel");
const {checkToken} = require("./checkToken");

=======
const cors = require("cors");

>>>>>>> init-project
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {authRouter} = require('./routers/authRouter');
app.use('/auth' ,authRouter);

const {userRouter} = require('./routers/userRouter');
app.use('/api/user' ,userRouter);

const {memoryRouter} = require('./routers/memoryRouter');
app.use('/api/memories', memoryRouter);
<<<<<<< HEAD

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

=======
>>>>>>> init-project

app.all('*',(req,res) => {
    res.status(404).json({status:"error", message:`Route not found!`});
});

<<<<<<< HEAD
app.listen(process.env.PORT || 3006);
=======
const port = process.env.PORT || 3006;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
>>>>>>> init-project
