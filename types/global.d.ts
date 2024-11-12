interface Poll {
	_id: number;
	name: string;
	timings: string[];
	status: "pending" | "active" | "ended";
	votes: { [key: string]: number };
	date: Date | undefined;
}

interface Ticket {
	time: string;
	ticketId: string;
}

interface BusScheduleContextType {
	selectedTime: string;
	setSelectedTime: (time: string) => void;
	ticket: Ticket | null;
	generateTicket: () => void;
}
