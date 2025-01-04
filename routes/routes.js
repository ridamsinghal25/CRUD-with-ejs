const express = require("express");
const router = express.Router();
const User = require("../models/users");

// Get all users in home page
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.render("index", {
      title: "Home",
      users: users,
    });
  } catch (error) {
    res.json({ message: error.message, type: "danger" });
  }
});

// Get create user page
router.get("/create-user", (req, res) => {
  res.render("create_user", {
    title: "Create User",
    user: null,
  });
});

// Get edit user page
router.get("/edit/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("edit_user", {
      title: "Edit User",
      user,
    });
  } catch (error) {
    res.json({ message: error.message, type: "danger" });
  }
});

// Create new user route
router.post("/create-user", async (req, res) => {
  try {
    const { username, email, phoneNumber, password } = req.body;

    const user = await User.create({
      username,
      email,
      phoneNumber,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not created",
      });
    }

    return res.status(200).render("create_user", {
      title: "Create User",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Edit user route
router.post("/edit-user/:id", async (req, res) => {
  try {
    const { username, email, phoneNumber, password } = req.body;

    const user = await User.findByIdAndUpdate(req.params.id, {
      username,
      email,
      phoneNumber,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not updated",
      });
    }

    return res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete user route
router.get("/delete-user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(400).json({
        message: "User not deleted",
      });
    }

    return res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
