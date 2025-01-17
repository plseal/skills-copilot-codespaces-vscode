// Create web server   
// 1. Load the express module
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route for GET request to /comments
app.get('/comments', (req, res) => {
    res.send('This is a page of comments');
});
// 4. Send a response with some comments
// 5. Start the server on port 3000
// 6. Test the server using a web browser
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
