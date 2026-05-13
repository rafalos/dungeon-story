import { HydratedDocument } from 'mongoose';
import { Equipment } from '../types';
import { UserDocument } from '../models/User';

declare module 'express-serve-static-core' {
  interface Request {
    user: UserDocument;
    item: HydratedDocument<Equipment>;
  }
}
