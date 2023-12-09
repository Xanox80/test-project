// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   mongoose.connect('mongodb://127.0.0.1:27017/baza');

//   // Створюємо схему і вписуємо які там дані мають бути
//   const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   password: String,
// });

// module.exports = mongoose.model('User', UserSchema);

//   // (Optional) Додаємо метод для нашої схеми, в даному випадку показати шо в нас є (!!! Має бути створено до того як модель зі схеми створили!!!)
//   UserSchema.methods.speak = function speak() {
//   const greeting = `${this.id
//     ? 'User id is ' + this.id
//     : 'User don\'t have id'} ${this.name ? 'Username is ' + this.name
//     : 'User has no name'} ${this.password ? 'Pass is ' + this.password
//     : 'User has no password'}`
//   console.log(greeting);
//   };

//   // Створюємо модель із схеми
//   const User = mongoose.model('User', UserSchema);

//   // Додаємо нове значення
//   const silence = new User({ id: 1, name: 'GG', password: '333' });

//   // Викликаємо функцію яку ми створили раніше (Покаже які значення у нього є)
//   silence.speak();

//   // Сейвимо в базу даних
//   await silence.save();

//   // Шукаємо в базі даних усі значення по цій Моделі
//   const users = await User.find();
//   console.log(users);

// }
