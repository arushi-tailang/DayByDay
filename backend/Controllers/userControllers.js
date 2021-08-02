const asyncHandler = require("express-async-handler"); //npm i express-async-handler
const User = require("../models/userModel");
const generateToken = require("../utils/generateJWT");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, picture } = req.body;

  //checking if the user alredy exists in our database
  const userExists = await User.findOne({ email });
  //if user exists, then display the message
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    //.create is used to add data in our database for new user
    name,
    email,
    password,
    picture,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong!");
  }
});

// const authUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (user) {
//     if (await user.matchPassword(password)) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         picture: user.picture,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401);
//       throw new Error("Invalid password");
//     }
//   } else {
//     res.status(401);
//     throw new Error("Invalid Email");
//   }
// });

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { authUser, registerUser };
