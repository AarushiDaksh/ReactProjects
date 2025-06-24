const User = require("../models/User.model");

const changeUsername = async (req, res) => {
  try {
    const userId = req.user.id;
    const { username } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = username;
    await user.save();

    
    const { password, ...userData } = user._doc;

    return res.status(200).json({
      message: "User updated successfully",
      user: userData,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id; 
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user.", error: err.message });
  }
};

module.exports = { changeUsername , deleteUser };
