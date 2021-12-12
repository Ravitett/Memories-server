const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {userRouter} = require('./routers/userRouter');
app.use('/api/user',userRouter);

const {memoryRouter} = require('./routers/memoryRouter');
app.use('/api/memories',memoryRouter);

app.all('*',(req,res) => {
    res.send("Page not found");
});

app.listen(3006);