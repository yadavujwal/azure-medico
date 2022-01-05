import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema(
  {
    
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    }
    
  },
  {
    timestamps: true,
  }
);
const shippingAdd = mongoose.model('shippingAdd', shippingSchema);
export default shippingAdd;