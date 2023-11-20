import { Schema, model } from "mongoose";

export interface IUser {
	firstname: string;
    lastname: string;
    email: string;
}

const userSchema = new Schema<IUser>({
	firstname: String,
    lastname: String,
    email: String,
});

export default model<IUser>('Users', userSchema);
