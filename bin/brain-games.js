#!/usr/bin/env node
import { getUsername } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const username = getUsername();

console.log(`Hello, ${username}!`);
