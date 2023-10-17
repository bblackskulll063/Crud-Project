const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get("/fetchalluser", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post(
  "/adduser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    // body("phone", "Enter a 10 number"),isLength({min})
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const {rank, name, email, phone, dob, gender, country } = req.body;

      // If there are errors, return Bad request and the errors
      const user = new UserModel({rank, name, email, phone, dob, gender, country, });
      const savedNote = await user.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put("/updateuser/:id", async (req, res) => {
  const {rank, name, email, phone, dob, gender, country } = req.body;
  try {
    // Create a newNote object
    const newUser = {};
    if (rank) { newUser.rank = rank; }
    if (name) { newUser.name = name; }
    if (email){ newUser.email = email;}
    if (phone){ newUser.phone = phone;}
    if (dob)  {  newUser.dob = dob;   }
    if (gender){newUser.gender = gender; }
    if (country){newUser.country = country;}

    // Find the note to be updated and update it
    let user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Not Found");
    }

    user = await UserModel.findByIdAndUpdate(
        req.params.id,
        { $set: newUser },
        { new: true }
        );
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// // ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Not Found");
    }

    user = await UserModel.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", user: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
