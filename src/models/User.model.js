const { error } = require("console");
const prisma = require("./prismaClient");

module.exports.getAllUsers = async function getAllUsers() {
  return prisma.users
    .findMany({ orderBy: { user_id: "asc" }, include: {} })
    .then((users) => {
      console.log("All Users: ", users);
      return users;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getUserById = async function getUserById(userId) {
  return prisma.users
    .findUnique({ where: { user_id: userId } })
    .then((user) => {
      console.log("User Found: ", user);
      return user;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.createUser = async function createUser(
  fullName,
  roleId, //need to change this in a way that it automatically fills in role id
  email,
  password,
  dateOfBirth,
  symptoms,
) {
  return prisma.users
    .create({ data: {}, include: {} })
    .then((user) => {
      console.log("User Created: ", user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.updateUserById = async function updateUserById() {};

module.exports.deleteUserById = async function deleteUserById() {};
