const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the db connection
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');


dotenv.config(); // Load env variables
connectDB(); // Connect to MongoDB
app.use(cors({
    origin: 'http://localhost:3001' // Allow only your frontend origin
  }));
const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); // Include auth routes

const PORT = process.env.PORT || 3000; // Change the port to 3000 or any available port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
