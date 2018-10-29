const Joi = require('joi');

// Run the test 1 million times
const iterations = 1000000;

const rawObjectSchema = {
  a: Joi.string()
};

const joiObjectSchema = Joi.object().keys({
  a: Joi.string()
});

console.time('Raw object schema');
for (var i = 0; i < iterations; i++) {
  Joi.validate({ a: 'a string' }, rawObjectSchema);
}
console.timeEnd('Raw object schema');

console.time('JOI object schema');
for (var i = 0; i < iterations; i++) {
  Joi.validate({ a: 'a string' }, joiObjectSchema);
}
console.timeEnd('JOI object schema');


const rawArraySchema = [
  Joi.string()
];

const joiArraySchema = Joi.array().items(
  Joi.string()
);

console.time('Raw array schema');
for (var i = 0; i < iterations; i++) {
  Joi.validate([ 'a string' ], rawArraySchema);
}
console.timeEnd('Raw array schema');

console.time('JOI array schema');
for (var i = 0; i < iterations; i++) {
  Joi.validate([ 'a string' ], joiArraySchema);
}
console.timeEnd('JOI array schema');
