import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    wallet_address: { type: String },
    network: { type: String },
    contract_address: { type: String },
    brand_logo: { type: String },
    banner_image: { type: String },
    brand_name: { type: String },
    brand_description: { type: String },
    product_type: { type: String },
    contact_details: {
      mail: { type: String },
      phone: { type: String },
      address: { type: String },
      countryName: { type: String },
    },
    socials: {
      insta: { type: String },
    },
    store_theme: { type: String },
    store_template: { type: String },
    url_store_name: { type: String },
    authEmail: { type: String },
    expiration_date: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
