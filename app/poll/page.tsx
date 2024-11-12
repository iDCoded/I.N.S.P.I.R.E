import {
	Bus,
	Calendar,
	Home,
	LayoutDashboard,
	Shield,
	Ticket,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Vote from "@/components/poll/Vote";
import { BusScheduleProvider } from "@/context/poll-provider";
import DisplayTicket from "@/components/poll/DisplayTicket";

export default function Component() {
	return (
		<BusScheduleProvider>
			<SidebarProvider>
				<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
					<Sidebar>
						<SidebarHeader className="border-b border-border px-2 py-4">
							<h2 className="px-4 text-lg font-semibold tracking-tight">
								INSPIRE
							</h2>
						</SidebarHeader>
						<SidebarContent className="px-2">
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton className="w-full">
										<Home className="h-4 w-4" />
										<span>Home</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton className="w-full">
										<LayoutDashboard className="h-4 w-4" />
										<span>Dashboard</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton className="w-full">
										<Bus className="h-4 w-4" />
										<span>Bus Routes</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton className="w-full">
										<Calendar className="h-4 w-4" />
										<span>Schedule</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton className="w-full">
										<Ticket className="h-4 w-4" />
										<span>My Tickets</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarContent>
						<SidebarFooter className="border-t border-border p-2">
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton className="w-full">
										<Shield className="h-4 w-4" />
										<Link href={"/admin"}>
											<span>Admin Panel</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarFooter>
					</Sidebar>
					<div className="flex flex-col">
						<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-6">
							<SidebarTrigger />
							<h1 className="text-xl font-semibold">Vote for Bus Timing</h1>
						</header>
						<main className="flex-1 grid items-start gap-4 p-4 md:gap-8 md:p-6">
							<Vote />
							<DisplayTicket />
						</main>
					</div>
				</div>
			</SidebarProvider>
		</BusScheduleProvider>
	);
}
