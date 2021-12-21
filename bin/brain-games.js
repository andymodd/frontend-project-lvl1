#!/usr/bin/env node
import askQuestion from '../src/cli.js';

const playerName = askQuestion('May I have your name? ');
console.log(`Hello, ${playerName}`);
