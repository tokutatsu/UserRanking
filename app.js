const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1/rankings', require('./routes/rankings.js'));

app.listen(PORT, () => {
    console.log("Start Server " + new Date);
    console.log('port number : ' + PORT);
});