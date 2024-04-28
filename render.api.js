// Function to fetch servers from Discord API
async function fetchServers(token) {
    try {
      const response = await fetch('https://discord.com/api/users/@me/guilds', {
        method: 'GET',
        headers: {
          'Authorization': `Bot ${token}`
        }
      });
      const data = await response.json();
      const serversList = document.getElementById('serversList');
      serversList.innerHTML = ''; // Clear existing servers
      data.forEach(server => {
        const li = document.createElement('li');
        li.textContent = server.name;
        serversList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching servers:', error);
    }
  }
  
  // Function to fetch DMs from Discord API
  async function fetchDMs(token) {
    try {
      const response = await fetch('https://discord.com/api/users/@me/channels', {
        method: 'GET',
        headers: {
          'Authorization': `Bot ${token}`
        }
      });
      const data = await response.json();
      const dmList = document.getElementById('dmList');
      dmList.innerHTML = ''; // Clear existing DMs
      data.forEach(dm => {
        const li = document.createElement('li');
        li.textContent = dm.recipient.username;
        dmList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching DMs:', error);
    }
  }
  
  // Function to prompt for Discord token
  function promptForToken() {
    const token = prompt('Please enter your Discord bot token:');
    if (token) {
      // Token provided, fetch servers and DMs
      fetchServers(token);
      fetchDMs(token);
      return token;
    } else {
      console.error('No token provided.');
      return null;
    }
  }
  
  // Fetch servers and DMs when the page loads
  const token = promptForToken();
  