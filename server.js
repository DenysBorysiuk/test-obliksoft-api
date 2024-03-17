import { connect } from 'mongoose';
import 'dotenv/config';

const { DB_HOST, PORT = 3000 } = process.env;

export const dbConnect = async app => {
  try {
    await connect(DB_HOST);
    app.listen(PORT);
    console.log('Database connection successful');
    console.log(`Server is running. Use our API on port: ${PORT}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
