const express = require('express')
const mongoConnect = require('./db/database.js')

const app = express()

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('5baa2528563f16379fc8a610')
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

mongoConnect(client => {
    console.log(client)
    app.listen(3000, () => {
        console.log('app listening at 3000')
    })

})