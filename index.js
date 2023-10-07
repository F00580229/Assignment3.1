import express from 'express';
import mongoose from 'mongoose';
const app = express();

const mongoDBURL = 'mongodb+srv://814347022n:nagaraju15@cluster0.um7h3il.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(5000, () => {
        console.log(`App is listening to port`);
      });
  })
  .catch((error) => {
    console.log(error);
  });