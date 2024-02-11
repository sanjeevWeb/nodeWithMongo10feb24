const express = require('express');
const mongoose = require('mongoose');

// const User = require('./models/user');

const app = express();


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

app.use(errorController.get404);

mongoose
    .connect(
        'mongodb://localhost:27017'
    )
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Max',
                    email: 'max@test.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

// mongoConnect(client => {
//     console.log(client)
//     app.listen(3000, () => {
//         console.log('app listening at 3000')
//     })

// })