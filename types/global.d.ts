import { Document } from "mongoose";

interface IPoll extends Document {
	_id: number;
	name: string;
	timings: string[];
	status: "pending" | "active" | "ended";
	tickets: Ticket[];
	votes: { [key: string]: number };
	date: Date | undefined;
	createdAt: Date;
}

interface Ticket {
	timing: string;
	ticketId: string;
	createdAt: Date;
}

interface BusScheduleContextType {
	selectedTime: string;
	setSelectedTime: (time: string) => void;
	ticket: Ticket | null;
	generateTicket: () => void;
}
