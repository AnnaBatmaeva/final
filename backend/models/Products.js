import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: String,
    description: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    isNewProducts: {
        type: Boolean,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});

export default mongoose.model('Product', productSchema);
