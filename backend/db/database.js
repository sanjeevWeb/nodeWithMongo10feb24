const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'

const mongoConnect = (callback) => {
    MongoClient.connect(url)
    .then(client => {
        console.log('connected to mongodb')
        callback(client)
    })
    .catch(err => console.log(err))
}

module.exports = mongoConnect