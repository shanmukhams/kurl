module.exports = {
    
    api: process.env.NODE_ENV === 'production'
      ? 'https://kurl-server.herokuapp.com/'
      : 'http://localhost:3000/'
  
  }
  