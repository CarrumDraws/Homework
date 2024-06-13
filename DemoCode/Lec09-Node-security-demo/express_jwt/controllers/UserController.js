import User from '../models/User.js';
import * as argon2 from 'argon2';
import generateToken from '../utils/generateToken.js';

const register = async (req, res) => {
  // get credentials from body
  const { username, password } = req.body;

  try {
    // check if username already exists
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // hash password
    const hashedPassword = await argon2.hash(password);
    console.log(hashedPassword);

    // create user
    const user = await User.create({
      username,
      password: hashedPassword,
    });
    console.log(user);

    // generate JWT token
    const token = generateToken(user._id, username);
    console.log(token);

    // send token in cookie
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

    // send token in response
    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  // get credentials from body
  const { username, password } = req.body;

  try {
    // check if username exists
    const user = await User.findOne({ username })
      .select('password')
      .lean()
      .exec();
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log(user);

    // check if password is correct
    const isPasswordCorrect = await argon2.verify(user.password, password);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // generate JWT token
    const token = generateToken(user._id, username);
    console.log(token);

    // send token in cookie
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

    // send token in response
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const logout = (_req, res) => {
  try {
    // clear cookie in browser;
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export { register, login, logout };
