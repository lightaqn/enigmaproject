const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailUserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },

    profileImg: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", emailUserSchema);
