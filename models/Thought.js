const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    }, 
    createdAt: {
      type: Date,
      default: Date.now,
      // spot for getter method to format date
    }, 
    username: {
      
    }
  }
)