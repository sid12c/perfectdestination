const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => res.send('Hello world!'));
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

const items = require('./routes/api/Item');
app.use('/api/Item', items);
app.get('/api/item/:id', (req, res) => {
    res.send(`item ${req.params.id}`)
})
// app.put('/api/Item/:id', (req, res) => {
//     res.send(`user ${req.params.id}`)
// })
app.delete('/api/Item/:id', (req, res) => {
    res.send(`item ${req.params.id}`)
})

const users = require('./routes/api/User');
app.use('/api/User', users);


const App = () => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });
    useEffect (() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenResponse = await axios.post(
                "http://localhost:4000/tokenIsValid",
                null,
                {headers: {"x-auth-token": token}}
            );
            if (tokenResponse.data) {
                const userRes = await axios.get("http://localhost:4000/", {
                    headers: {"x-auth-token": token},
                });
                setUserData({
                    token,
                    user: userRes.data,
                });
            }
        };
        checkLoggedIn();
    }, []);

    return (
        <UserContext.Provider value ={{userData, setUserData}}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<ShowItemList />} />
                    <Route path='/create-item' element={<CreateItem />} />
                    <Route path='/add' element={<CreateItem />} />
                    <Route path='/edit-item/:id' element={<UpdateItemInfo />} />
                    <Route path='/show-item/:id' element={<ShowItemDetails />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}