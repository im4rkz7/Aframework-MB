import { User } from "../model/index.js";

class UsersMongoDb {
  addUser = async (userToAdd) => {
    const user = new User(userToAdd);

    await user.save();
    return user;
  };

  getUsers = async () => await User.find({});
}

export const usersMongoDb = new UsersMongoDb();
