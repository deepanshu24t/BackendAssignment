const express = require('express');
const app = express();
const usersRouter = require('./routes/userRoute');
require('dotenv').config();


const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/users', usersRouter);

app.get('/',(req,res)=>
{
    res.send(`<h1>HELLO WELCOME</h1>`)
})


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
