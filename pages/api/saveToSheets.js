import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userEmail, courseId, examId, score, timestamp } = req.body;

    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        // Your Google Service Account credentials
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[userEmail, courseId, examId, score, timestamp]],
      },
    });

    res.status(200).json({ message: 'Successfully saved to Google Sheets' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Error saving to Google Sheets' });
  }
} 