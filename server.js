const express = require('express');
const app = express();
const port = process.env.PORT || 8080

app.get('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});