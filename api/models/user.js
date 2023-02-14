import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    bio: { type: String },
    links: {
      mail: { type: String },
      insta: { type: String },
      website: { type: String },
      twitter: { type: String },
    },
    display_image: { type: String },
    banner_image: { type: String },
    wallet_address: { type: String },
    profileImgColor: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
