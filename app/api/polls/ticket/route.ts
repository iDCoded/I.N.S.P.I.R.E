import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Poll from "@/models/Poll";
import { IPoll, Ticket } from "@/types/global";

export async function PATCH(req: Request) {
	await connectToDB();

	const { timing, ticketId } = await req.json();

	const newTicket: Ticket = {
		ticketId: ticketId,
		timing: timing,
		createdAt: new Date(),
	};

	const activePoll = (await Poll.findOne({
		status: "active",
	}).exec()) as IPoll | null;

	if (!activePoll) {
		return NextResponse.json(
			{ error: "No active poll found" },
			{ status: 404 }
		);
	}

	if (!activePoll.timings.includes(timing)) {
		return NextResponse.json(
			{ error: "Invalid timing selected" },
			{ status: 400 }
		);
	}

	activePoll.tickets.push(newTicket);
	await activePoll.save();

	return NextResponse.json({ success: true, ticket: newTicket });
}
