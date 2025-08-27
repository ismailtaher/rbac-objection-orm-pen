const User = require('../db/models/User');

// registerController logic
const findUserByUsername = async (username) => {
  const user = await User.query().findOne({ username });
  return user;
};

const createUser = async (username, hashedPassword, trx) => {
  const user = await User.query(trx).insert({
    username,
    password: hashedPassword,
  });
  return user.id;
};

const assignRoleToUser = async (userId, roleId, trx) => {
  await User.relatedQuery('roles', trx).for(userId).relate(roleId);
};

// authController logic
const getUserRoles = async (userId) => {
  const roles = await User.relatedQuery('roles').for(userId).select('roles.id');
  return roles.map((row) => row.id);
};

const assignRefreshTokenToUser = async (userId, refreshToken) => {
  await User.query().findById(userId).patch({ refresh_token: refreshToken });
};

// refreshController & logoutController logic
const findUserByRefreshToken = async (refreshToken) => {
  const user = User.query().findOne({ refresh_token: refreshToken });
  return user;
};

// logoutController logic
const deleteRefreshToken = async (userId) => {
  await User.query().findById(userId).patch({ refresh_token: null });
};

module.exports = {
  findUserByUsername,
  createUser,
  assignRoleToUser,
  getUserRoles,
  assignRefreshTokenToUser,
  findUserByRefreshToken,
  deleteRefreshToken,
};
