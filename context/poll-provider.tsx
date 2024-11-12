"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const BusScheduleContext = createContext<BusScheduleContextType | undefined>(
	undefined
);

export const BusScheduleProvider = ({ children }: { children: ReactNode }) => {
	const [selectedTime, setSelectedTime] = useState("");
	const [ticket, setTicket] = useState<Ticket | null>(null);

	const generateTicket = () => {
		if (selectedTime) {
			const ticketId = Math.random()
				.toString(36)
				.substring(5, 10)
				.toUpperCase();
			setTicket({ timing: selectedTime, ticketId, createdAt: new Date() });
		}
	};

	return (
		<BusScheduleContext.Provider
			value={{
				selectedTime,
				setSelectedTime,
				ticket,
				generateTicket,
			}}>
			{children}
		</BusScheduleContext.Provider>
	);
};

export const useBusSchedule = () => {
	const context = useContext(BusScheduleContext);
	if (!context) {
		throw new Error("useBusSchedule must be used within a BusScheduleProvider");
	}
	return context;
};
