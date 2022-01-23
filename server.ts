const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
app.use(cors());