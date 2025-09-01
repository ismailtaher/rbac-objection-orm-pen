const userDal = require('../dal/userDal');

const getUserProfile = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'userId is required!' });
  }
  const profile = await userDal.getUserWithRolesAndPermissions(id);
  res.json(profile);
};

module.exports = { getUserProfile };
