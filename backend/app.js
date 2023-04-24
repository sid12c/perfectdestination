const express = require('express');
const app = express();
const items = require('./routes/api/Item');
// app.use('./routes/api/Item', items);
app.use('/api/Item', items);
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`Server running on port${port}`));

const mongoose = require('mongoose')
const cors = require('cors')

// Connect database
app.use(cors({origin: true, credentatials: true}));

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://takli:takli@takli.xn1nkay.mongodb.net/test'
// const conn_str = 'mongodb+srv://takli:xn1nkay'

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    app.listen(port)
    console.log(`MongoDB Connection Succeeded...`)
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`)
});

