const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log('omni is listening on', process.env.PORT)
})