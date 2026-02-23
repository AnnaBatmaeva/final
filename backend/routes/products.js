import express from 'express';
import Product from '../models/Products.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { brand, gender, priceFrom, priceTo, tag } = req.query;

    const query = {};

    if (tag) {
      query.tags = { $in: [tag] };
    }

    if (brand) {
      query.brand = { $in: brand.split(',') };
    }

    if (gender) {
      query.gender = { $in: gender.split(',') };
    }

    if (priceFrom || priceTo) {
      query.price = {};
      if (priceFrom) query.price.$gte = Number(priceFrom);
      if (priceTo) query.price.$lte = Number(priceTo);
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/new', async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const newProducts = await Product.find({ isNewProducts: true }).limit(Number(limit));
    res.json(newProducts);
  } catch (err) {
    console.error('Error fetching new products:', err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/recommended', async (req, res) => {
  try {
    const { brand, gender, excludeId, limit = 5 } = req.query;

    if (!brand || !gender) {
      return res.json([]);
    }

    const query = {
      brand,
      gender,
      _id: { $ne: excludeId },
    };

    const products = await Product.find(query).limit(Number(limit));

    res.json(products);
  } catch (err) {
    console.error('Error fetching recommended products:', err);
    res.status(500).json({ message: err.message });
  }
});
router.get('/:_id', async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
