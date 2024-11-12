import CreateNewPoll from "@/components/admin/CreatePollForm";
import ExistingPolls from "@/components/admin/ExistingPolls";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4 flex flex-row items-center gap-4">
				<Link href={"/poll"}>
					<MoveLeft />
				</Link>
				Bus Ticket Poll Admin Dashboard
			</h1>
			<CreateNewPoll />
			<ExistingPolls />
		</div>
	);
}
