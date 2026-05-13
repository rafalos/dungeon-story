import { UserDocument } from "../models/User";

export const deductGold = (user: UserDocument, amount: number) => {
  user.gold = user.gold < amount ? 0 : user.gold - amount;
};

export const addGold = (user: UserDocument, amount: number) => {
  user.gold = user.gold + amount;
};
