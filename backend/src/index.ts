import app from './app.js';
import { connectToDatabase } from './db/connection.js';

const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || 'localhost';

connectToDatabase()
  .then(() => {
    app.listen(PORT, HOST, () =>
      console.log(`Server is running at http://${HOST}:${PORT} & connected to MongoDB`)
    );
  })
  .catch((err) => {
    console.error("Failed to start server:", err.message);
  });
