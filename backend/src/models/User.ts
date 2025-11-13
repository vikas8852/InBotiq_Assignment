import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;              // ✅ explicitly typed _id
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
}, { timestamps: true });

const User = mongoose.model<IUser>('User', userSchema);
export default User;
