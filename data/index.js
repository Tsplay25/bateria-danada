const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(cors());

app.listen(5173, () => {
    console.log('5173 listening');
});

app.post('/create', async (req, res) => {
    const { name, phone, email, message } = req.body;
    const db = './database.json';
    const data = JSON.parse(
        fs.readFileSync(db, { encoding: 'utf8', flag: 'r' })
    );
    const id = data.length + 1;

    const newContact = {
        id: id,
        name: name,
        phone: phone,
        email: email,
        message: message,
    };

    data.push(newContact);
    fs.writeFileSync(db, JSON.stringify(data, null, 2));

    res.status(200).json({ success: true });
});
