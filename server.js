const express = require('express');
const app = express();
const services = {}; // Object to store registered services

app.use(express.json());

// Route for services to register themselves
app.post('/register', (req, res) => {
    const {name, url} = req.body;
    if(!name || !url) {
        return res.status(400).json({error: "Invalid service info"});
    }
    services[name] = url;
    res.json({message: "Service registered successfully"});
});

// Route to locate a service
app.get('/find/:name', (req, res) => {
    const {name} = req.params;
    const url = services[name];
    if(!url) {
        return res.status(404).json({error: "Service not found"});
    }
    res.json({url});
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Services registery running on port ${PORT}`);
})