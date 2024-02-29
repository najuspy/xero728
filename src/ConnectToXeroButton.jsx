import React from 'react';

function ConnectToXeroButton() {
  const handleConnectToXero = () => {
    const clientId = 'EB99B7C7A5B6431A801C4D0FE4D56ED1';
    const redirectUri = encodeURIComponent('https://xero728.netlify.app/');
    const scope = encodeURIComponent('offline_access openid profile email accounting.transactions');
    const state = '123'; // Generate a unique state value for each authorization request
    const authorizationUrl = `https://login.xero.com/identity/connect/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

    window.location.href = authorizationUrl;
  };

  return (
    <button onClick={handleConnectToXero}>Connect to Xero</button>
  );
}

export default ConnectToXeroButton;