import { Schema, model, models } from "mongoose";

const ticketSchema = new Schema<Ticket>({
	ticketId: { type: String, required: true },
	timing: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const pollSchema = new Schema<Poll>({
	name: { type: String, required: true },
	timings: { type: [String], required: true },
	date: { type: Date, required: true },
	status: {
		type: String,
		enum: ["pending", "active", "ended"],
		default: "pending",
	},
	tickets: { type: [ticketSchema], default: [] },
	createdAt: { type: Date, default: Date.now },
});

const Poll = models.Poll || model<Poll>("Poll", pollSchema);

export default Poll;
