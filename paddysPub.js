const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquire');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'courses_db'
  },
  console.log('Connected to the employees_db database.')
);

