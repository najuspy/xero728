import React, { useState } from 'react';

function FetchXeroData() {
  // State for storing the API response
  const [data, setData] = useState('');

  // State for storing the access token (you'll need to update this with a real token)
  const [accessToken, setAccessToken] = useState('YOUR_ACCESS_TOKEN');

  // Function to fetch data from Xero API
  const fetchDataFromXero = async () => {
    const url = "https://api.xero.com/connections";
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(JSON.stringify(jsonData, null, 2)); // Format JSON data for display
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setData(`Failed to fetch data: ${error.message}`);
    }
  };

  return (
    <div>
      {/* Textbox (textarea) for displaying fetched data */}
      <textarea value={data} readOnly rows="10" cols="50" />

      {/* Button to initiate data fetching */}
      <button onClick={fetchDataFromXero}>Fetch Data from Xero</button>
    </div>
  );
}

export default FetchXeroData;
