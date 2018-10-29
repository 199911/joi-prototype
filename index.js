const Joi = require('joi');

// Performance;

const rawObjectSchema = {
  a: Joi.string()
};

const joiObjectSchema = Joi.object().keys({
  a: Joi.string()
});

console.time('Raw object schema');
// Run it 1 million times
for (var i = 0; i <= 1000000; i++) {
  Joi.validate({ a: 'a string' }, rawObjectSchema);
}
console.timeEnd('Raw object schema');

console.time('JOI object schema');
// Run it 1 million times
for (var i = 0; i <= 1000000; i++) {
  Joi.validate({ a: 'a string' }, joiObjectSchema);
}
console.timeEnd('JOI object schema');
