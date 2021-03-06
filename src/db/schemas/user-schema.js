import { Schema } from 'mongoose';
import { shortId } from './types/short-id';
import MongooseDelete from 'mongoose-delete';

const UserSchema = new Schema(
  {
    userId: shortId,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: new Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
          address3: String,
        },
        {
          _id: false,
        }
      ),
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'basic-user',
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

//soft delete plugin적용
UserSchema.plugin(MongooseDelete);

export { UserSchema };
