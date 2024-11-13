"use client";

import { BusScheduleContextType, Ticket } from "@/types/global";
import { createContext, ReactNode, useContext, useState } from "react";

const BusScheduleContext = createContext<BusScheduleContextType | undefined>(
	undefined
);

export const BusScheduleProvider = ({ children }: { children: ReactNode }) => {
	const [selectedTime, setSelectedTime] = useState("");
	const [ticket, setTicket] = useState<Ticket | null>(null);

	const generateTicket = async () => {
		if (!selectedTime) return;

		const existingTicket = localStorage.getItem("userTicket");
		if (existingTicket) return;

		const ticketId = Math.random().toString(36).substring(5, 10).toUpperCase();

		try {
			const res = await fetch("/api/polls/ticket", {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ timing: selectedTime, ticketId }),
			});

			if (!res.ok) {
				const { error } = await res.json();
				console.error("Failed to generate ticket", error);
				return;
			}
			localStorage.setItem(
				"userTicket",
				JSON.stringify({ ticketId, time: selectedTime })
			);
			setTicket({ timing: selectedTime, ticketId });
		} catch (error) {
			console.log("Error generating ticket.", error);
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
