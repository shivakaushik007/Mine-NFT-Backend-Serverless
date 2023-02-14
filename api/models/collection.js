import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    slug: { type: String },
    banner: { type: String },
    category: { type: String },
    contract_address: { type: String },
    logo_image: { type: String },
    name: { type: String },
    description: { type: String },
    links: {
      website: { type: String },
      discord: { type: String },
      instagram: { type: String },
      telegram: { type: String },
    },
    creator_earnings: { type: String },
    owner_address: { type: String },
    payment_address: { type: String },
    symbol: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Collection", collectionSchema);
