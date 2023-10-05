const User = require("../model/user");

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      UserName: UserName.req.body,
      EmailId: EmailId.req.body,
      PhoneNumber: PhoneNumber.req.body,
    });
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
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
    const singleUser = await User.findById(req.params.id);
    res.json({
      status: "success",
      data: singleUser,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        UserName: UserName.req.body,
        EmailId: EmailId.req.body,
        PhoneNumber: PhoneNumber.req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({
      status: "success",
      data: updatedUser,
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      data: "Employee has been deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createUser,
  getUser,
  singleUser,
  updateUser,
  deleteUser,
};
