const express = require('express');
const app = express();
const path = require('path');

app.use('/js', express.static(path.join(__dirname, "dist", "js")));
app.use('/public', express.static(path.join(__dirname, "dist", "public")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(8080, () => console.log("site running on port 8080"));