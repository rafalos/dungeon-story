import { HydratedDocument } from 'mongoose';
import { Item } from '../types';
import { UserDocument } from '../models/User';

declare module 'express-serve-static-core' {
  interface Request {
    user: UserDocument;
    item?: HydratedDocument<Item>;
  }
}
