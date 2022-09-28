const mongoose = require("mongoose");

// user schema
const Question = new mongoose.Schema({
  id: { type: String,required: [true, "Please provide an Email!"], unique: [true, "Id Exist"]},
  firstname: { type: String, required: [true, "Please provide an Email!"] },
  lastname: {
    type: String,
    required: [true, "Please provide an Email!"],
  },
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
  },

  //   password field
  question : {
    type: String,
    required: [true, "Please provide a question!"],
  },
});

// export UserSchema
module.exports = mongoose.model.Question || mongoose.model("Question", Question);
