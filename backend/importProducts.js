import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Product from './models/Products.js';

async function importData() {
  try {
    dotenv.config();
    const data = JSON.parse(
      fs.readFileSync('./products.json', 'utf-8')
    );
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(data);

    console.log("✅ Products imported");
    process.exit();
  } catch (error) {
    console.error("❌ Import error", error);
    process.exit(1);
  }
}

importData();

