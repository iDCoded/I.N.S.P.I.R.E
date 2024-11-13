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
import { useEffect, useState } from "react";
import { IPoll } from "@/types/global";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function Vote() {
	const { selectedTime, setSelectedTime, generateTicket } = useBusSchedule();
	const [busTimings, setBusTimings] = useState<string[]>([]);

	const fetchBusTimings = async () => {
		try {
			const res = await fetch("/api/polls");

			if (!res.ok) throw new Error("Failed to fetch bus timings");

			const data = await res.json();

			const firstActivePoll: IPoll = data.activePolls[0];

			setBusTimings(firstActivePoll.timings);
		} catch (error) {
			console.error("Error fetching bus timings", error);
		}
	};

	useEffect(() => {
		fetchBusTimings();
	}, []);
	if (busTimings.length) {
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
									key={timing}
									htmlFor={timing}
									className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted cursor-pointer">
									<div className="flex items-center gap-2">
										<RadioGroupItem value={timing} id={timing} />
										<span className="font-medium">{timing}</span>
									</div>
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
						Generate Ticket {selectedTime ? `for ${selectedTime}` : null}
					</Button>
				</CardFooter>
			</Card>
		);
	} else {
		return (
			<Alert>
				<AlertTitle>No active poll</AlertTitle>
				<AlertDescription>
					There are no active polls at the moment.
				</AlertDescription>
			</Alert>
		);
	}
}
