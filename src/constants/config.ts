import * as dotenv from 'dotenv'
dotenv.config()

export default {
  omdb: {
    apiKey: process.env.OMDB_API_KEY,
    url: process.env.OMDB_URL,
  }
}