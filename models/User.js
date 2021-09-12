const { Schema, Types, model } = require("mongoose");

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
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }
    ], 
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ] 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
)

// the length of the user's friends array field
UserSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
