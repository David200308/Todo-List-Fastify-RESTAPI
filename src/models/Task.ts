import { Schema, model } from "mongoose";

export interface ITask {
	title: string;
	content: string;
	deadline: Date;
	isCompleted: boolean;
	userId: string;
}

const todoSchema = new Schema<ITask>({
	title: String,
	content: String,
	deadline: String,
	isCompleted: Boolean,
	userId: String,
});

export default model<ITask>('Tasks', todoSchema);
