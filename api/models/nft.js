import mongoose from "mongoose";

const nftSchema = new mongoose.Schema(
  {
    token_id: { type: String },
    metadata_image_link: { type: String },
    image_link: { type: String },
    name: { type: String },
    owner_address: { type: String },
    last_sale: { type: String },
    traits: [
      {
        trait_type: { type: String },
        value: { type: String },
      },
    ],
    collection_address: { type: String },
    description: { type: String },
    collection_slug: { type: String },
    type: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    price: {
      currency: { type: String },
      amount: { type: String },
    },
    category: { type: String },
    discount: { type: String },
    is_sold: { type: Boolean },
    is_visible: { type: Boolean },
    is_wallet_nft: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model("Nft", nftSchema);
