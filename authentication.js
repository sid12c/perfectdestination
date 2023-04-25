// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Create user schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

// Create user model
const User = mongoose.model('User', userSchema);

// Set up express app
const app = express();
app.use(bodyParser.json());

// User registration route
app.post('/register', async (req, res) => {
    try {
        // Check if user already exists in the database
        const existingUser = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (existingUser) {
            return res.status(400).send({ message: 'Username or email already exists' });
        }

        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user object and save it to the database
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();

        // Send a success message
        res.send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});

// User login route
app.post('/login', async (req, res) => {
    try {
        // Check if user exists in the database
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        // Check if the password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        // Create a JWT token and send it as a response
        const token = jwt.sign({ userId: user._id }, 'mysecretkey');
        res.send({ token });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});

// Middleware to verify JWT token and establish a session
const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized access' });
    }

    try {
        const decoded = jwt.verify(token, 'mysecretkey');
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(400).send({ message: 'Invalid token' });
    }
};

// Protected route that requires authentication
app.post('/items', requireAuth, (req, res) => {
    // Add,
    // update, or delete items here
});

// Start the server
const port = 3000;
app.listen(port, () => console.log('Server started on port ${port}'));
