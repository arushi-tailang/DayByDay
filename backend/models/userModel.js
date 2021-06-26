//user data is being stored here

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //npm i bcrypt

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, //required field
    },
    email: {
      type: String,
      required: true,
      unique: true, //unique email id is required
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      //
      type: Boolean,
      required: true,
      default: false,
    },
    picture: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true, //to track when this field was chreated in the data and when it was updated
  }
);

//encrypting the user's password before saving
userSchema.pre("save", async function (next) {
  //.pre('save) means before saving
  if (this.isModified("password")) {
    //isModified is a mongoose function
    next();
  }

  const salt = await bcrypt.genSalt(10); //Salt is a bctypt functionality
  //genSalt(10), the more higher the value, the more secure the password
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
