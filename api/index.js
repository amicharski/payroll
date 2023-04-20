const express = require('express');
require('dotenv').config();
const app = express();
const auth = require('./routes/auth/auth.routes');
const users = require('./routes/users/users.routes');
const port = process.env.PORT || 8080;

app.use(express.json())
app.use('/auth', auth);
app.use('/users', users);

app.get('/', (_, res) => {
    res.send('Welcome to payroll');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});