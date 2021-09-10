const { Schema, model } = require("mongoose");

const UserSchema = new Schema (
  {
    username: {
      type: String,
      required: "Please enter a username",
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    // thoughts
    // friends
  }
)

module.exports = Pizza;
