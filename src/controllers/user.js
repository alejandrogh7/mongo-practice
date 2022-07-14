const User = require("../models/User.js");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};


const getUserID = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate("books", "-_id -__v -owners");
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const postUser = async (req, res) => {
  const user = req.body;
  try {
    const userCreated = await User.create(user);
    return res.status(201).json({ userCreated: userCreated });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const putUser = async (req, res) => {
  const { idUser } = req.params;
  const { idBook } = req.params;
  const user = req.body;
  if (!idBook) {
    try {
      const userUpdated = await User.updateOne({ _id: idUser }, { $set: user });
      return res.status(200).json({ userUpdated: userUpdated });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  } else {
    try {
      const userUpdated = await User.findByIdAndUpdate(
        idUser,
        { $push: { books: idBook } },
        { new: true, useFindAndModify: false }
      );
      return res.status(200).json({ userUpdated: userUpdated });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDeleted = await User.deleteOne({ _id: id });
    return res.status(201).json({ userDeleted: userDeleted });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = {
  getUsers,
  getUserID,
  postUser,
  putUser,
  deleteUser,
};
