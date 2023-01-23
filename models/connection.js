const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://melanieabadjian:titouan2008P@weather.as5md5p.mongodb.net/test';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));