"use client";

import { useBusSchedule } from "@/context/poll-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import {
	TicketIcon,
	TicketCheck,
	Calendar,
	MapPin,
	ArrowRight,
} from "lucide-react";

export default function DisplayTicket() {
	const { ticket } = useBusSchedule();

	if (!ticket) return null;

	return (
		<div className="inset-0 bg-background/80 flex items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-2xl font-bold flex items-center gap-2">
						<TicketIcon className="h-6 w-6" />
						Your Bus Ticket
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="rounded-lg border p-4 bg-muted">
						<div className="text-3xl font-bold text-center mb-2">
							{ticket.timing}
						</div>
						<div className="text-sm text-center text-muted-foreground">
							Departure Time
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<TicketCheck className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm font-medium">Ticket ID</span>
							</div>
							<div className="text-lg">{ticket.ticketId}</div>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm font-medium">Date</span>
							</div>
							<div className="text-lg">{format(new Date(), "MMM d, yyyy")}</div>
						</div>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm font-medium">Route</span>
						</div>
						<div className="flex items-center justify-between">
							<div className="text-lg">Hostel</div>
							<ArrowRight className="h-6 w-6" />
							<div className="text-lg">College</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
