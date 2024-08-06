import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.verifyPassword(password))) {
      return res.status(400).json("Invalid email or password");
    }
    const token = user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
