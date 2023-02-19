module.exports = {
  mongoURI: process.env.MONGO_URI,
  isProduction: process.env.NODE_ENV === 'production'
}

console.log('MongoDB URI:', process.env.MONGO_URI);