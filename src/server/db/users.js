const db = require("./client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const createUser = async ({ username, email, password, first_name, last_name, phone_number, shipping_address, billing_address }) => {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await db.query(
      `
        INSERT INTO users(username, email, password, first_name, last_name, phone_number, shipping_address, billing_address)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (email) DO NOTHING
        RETURNING *`,
      [username, email, hashedPassword, first_name, last_name, phone_number, shipping_address, billing_address]
    );

    return user;
  } catch (err) {
    throw err;
  }
};

const getUser = async ({ email, password }) => {
  if (!email || !password) {
    return;
  }
  try {
    const user = await getUserByEmail(email);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (err) {
    throw err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const {
      rows: [user],
    } = await db.query(
      `
        SELECT * 
        FROM users
        WHERE email=$1;`,
      [email]
    );

    if (!user) {
      return;
    }
    return user;
  } catch (err) {
    throw err;
  }
};

const getAllUsers = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getUserByEmail,
  getAllUsers,
};
