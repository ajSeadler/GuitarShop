const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsers,
  createUser,
  getUser,
  getUserByEmail,
  getUserById,
  updateUserEmail,
  updateUserName,
  updateUserPassword
} = require("../db");
const { requireUser } = require("./utils");
const { JWT_SECRET = "somesecretvalue" } = process.env;
const jwt = require("jsonwebtoken");

//

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();

    res.send({
      users,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both an email and password",
    });
  }
  try {
    const user = await getUser({ email, password });
    console.log("User:", user);
    if (user) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        JWT_SECRET,
        {
          expiresIn: "1w",
        }
      );

      res.send({
        message: "Login successful!",
        token,
      });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch (err) {
    next(err);
  }
});

// ROute for the logged in users profile
usersRouter.get("/me", requireUser, async (req, res, next) => {
  try {
    
    console.log("User profile:",req.user, req.user.id);
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});





usersRouter.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const _user = await getUserByEmail(email);

    if (_user) {
      next({
        name: "UserExistsError",
        message: "A user with that email already exists",
      });
    }

    const user = await createUser({
      name,
      email,
      password,
    });

    const token = jwt.sign(
      {
        id: user.id,
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      message: "Sign up successful!",
      token,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.patch("/:userId/email", requireUser, async (req, res, next) => {
  const { userId } = req.params;
  const { newEmail } = req.body;

  try {
    const updatedUser = await updateUserEmail(userId, newEmail);
    res.send({
      message: "User email updated successfully",
      user: updatedUser
    });
  } catch (error) {
    next(error);
  }
});

// Route to update user name
usersRouter.patch("/:userId/name", requireUser, async (req, res, next) => {
  const { userId } = req.params;
  const { newName } = req.body;

  try {
    const updatedUser = await updateUserName(userId, newName);
    res.send({
      message: "User name updated successfully",
      user: updatedUser
    });
  } catch (error) {
    next(error);
  }
});

// Route to update user password
usersRouter.patch("/:userId/password", requireUser, async (req, res, next) => {
  const { userId } = req.params;
  const { newPassword } = req.body;

  try {
    const updatedUser = await updateUserPassword(userId, newPassword);
    res.send({
      message: "User password updated successfully",
      user: updatedUser
    });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;

