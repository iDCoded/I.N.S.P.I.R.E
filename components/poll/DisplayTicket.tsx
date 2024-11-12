"use client";

import { useBusSchedule } from "@/context/poll-provider";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function DisplayTicket() {
	const { ticket } = useBusSchedule();

	if (!ticket) return null;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Your Ticket</CardTitle>
				<CardDescription>Keep this ticket for your journey</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="rounded-lg border p-4">
					<div className="font-semibold">Departure Time</div>
					<div className="text-2xl">{ticket.time}</div>
					<div className="mt-4 font-semibold">Ticket ID</div>
					<div className="font-mono text-sm">{ticket.ticketId}</div>
				</div>
			</CardContent>
		</Card>
	);
}
