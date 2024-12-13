const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Get dataset metadata
app.get('/api/datasets/:ref', async (req, res) => {
  try {
    const { ref } = req.params;
    
    // Log the request
    console.log('Fetching dataset metadata for:', ref);

    const response = await axios.get(
      `https://www.kaggle.com/api/v1/datasets/list/${ref}`,
      {
        headers: {
          'Authorization': `Basic ${Buffer.from(
            `${process.env.KAGGLE_USERNAME}:${process.env.KAGGLE_KEY}`
          ).toString('base64')}`,
          'Content-Type': 'application/json',
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching dataset metadata:', error);
    res.status(404).json({ 
      error: 'Dataset not found',
      details: error.message 
    });
  }
});

// Download dataset
app.get('/api/download/:ref', async (req, res) => {
  try {
    const { ref } = req.params;
    
    // Log the download request
    console.log('Downloading dataset:', ref);

    const response = await axios({
      method: 'get',
      url: `https://www.kaggle.com/api/v1/datasets/download/${ref}`,
      headers: {
        'Authorization': `Basic ${Buffer.from(
          `${process.env.KAGGLE_USERNAME}:${process.env.KAGGLE_KEY}`
        ).toString('base64')}`,
      },
      responseType: 'stream'
    });

    // Set headers for file download
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${ref}.zip`);

    // Pipe the download stream to response
    response.data.pipe(res);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ 
      error: 'Failed to download dataset',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('CORS enabled for:', 'http://localhost:5173');
});