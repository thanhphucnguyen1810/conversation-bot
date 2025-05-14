import app from './app.js';
import { connectToDatabase } from './db/connection.js';

// connections and listeners
const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server is running on port ${PORT} & connected to MongoDB`)
    );
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err.message);
  });
