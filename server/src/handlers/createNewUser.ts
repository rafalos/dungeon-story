import Inventory from "../models/Inventory";
import User from "../models/User";

export const createNewUser = async (userEmail: string) => {
  const newUser = new User({
    email: userEmail,
  });

  const newInventory = new Inventory();

  newUser.inventory = newInventory._id;
  newInventory.user = newUser._id;

  await Promise.all([newInventory.save(), newUser.save()]);

  return newUser;
};
