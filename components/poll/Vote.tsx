"use client";

import { useBusSchedule } from "@/context/poll-provider";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { format } from "date-fns";

// Sample data - replace with actual data source if needed
const busTimings = [
	{ id: "1", time: "09:00", votes: 12 },
	{ id: "2", time: "10:30", votes: 8 },
	{ id: "3", time: "12:00", votes: 15 },
	{ id: "4", time: "14:30", votes: 6 },
];

export default function Vote() {
	const { selectedTime, setSelectedTime, generateTicket } = useBusSchedule();

	return (
		<Card>
			<CardHeader>
				<CardTitle>Current Schedule</CardTitle>
				<CardDescription>
					Today's Date: {format(new Date(), "MMM d, yyyy")}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<Label>Select your preferred departure time</Label>
					<RadioGroup
						value={selectedTime}
						onValueChange={setSelectedTime}
						className="mt-2 grid gap-2">
						{busTimings.map((timing) => (
							<Label
								key={timing.id}
								htmlFor={timing.id}
								className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted cursor-pointer">
								<div className="flex items-center gap-2">
									<RadioGroupItem value={timing.time} id={timing.id} />
									<span className="font-medium">{timing.time}</span>
								</div>
								<span className="text-sm text-muted-foreground">
									{timing.votes} votes
								</span>
							</Label>
						))}
					</RadioGroup>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					className="w-full"
					onClick={generateTicket}
					disabled={!selectedTime}>
					Generate Ticket
				</Button>
			</CardFooter>
		</Card>
	);
}
