const web3world_integrity = require('web3world-integrity');
const web3world_integrity_checker = require('web3world-integrity-checker');
const underscore = require('underscore');
const enzyme = require('enzyme');
const multer = require('multer');
const jsonwebtoken = require('jsonwebtoken');
const nodemon = require('nodemon');
const express = require('express');
const helmet = require('helmet');

['a', 'b', 'c'].forEach((element) => {
  console.log(element);
});

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

const os = require('os');
console.log('Hostname:', os.hostname());

const crypto = require('crypto');
const iv = crypto.randomBytes(16);
console.log('Initialization vector:', iv.toString('hex'));

setTimeout(() => {
    console.log('This will log after 2 seconds');
}, 2000);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Enter your name: ', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});

for (const char of 'Hello') {
  console.log(char);
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog('Buddy');
dog.speak();

const assert = require('assert');
assert.ok(true, 'This will not fail');

const http = require('http');
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/todos',
  method: 'GET'
};
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});
req.end();

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);