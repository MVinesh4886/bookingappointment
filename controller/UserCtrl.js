const User = require("../model/user");

const createUser = async (req, res) => {
  try {
    const { UserName, EmailId, PhoneNumber } = req.body;
    const user = await User.create({ UserName, EmailId, PhoneNumber });
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};
const singleUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateUser = async (req, res) => {
  try {
    const { UserName, EmailId, PhoneNumber } = req.body;
    const updatedUser = await User.update(
      { UserName, EmailId, PhoneNumber },
      { where: { id: req.params.id } }
    );

    if (updatedUser[0] === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = await User.findByPk(req.params.id);

    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.destroy({ where: { id: userId } });

    if (deletedUser === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      status: "success",
      data: "User has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
  getUser,
  singleUser,
  updateUser,
  deleteUser,
};
