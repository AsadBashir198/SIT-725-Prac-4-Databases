const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongodb connection successful"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

app.post('/post', async (req, res) => {
    const { firstName, lastName, password, email } = req.body;
    try {
        const user = new User({
            firstName,
            lastName,
            password,
            email
        });
        await user.save();
        console.log(user);
        res.send("Form Submission Successful");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("An error occurred while processing your request");
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log("Server started");
});
