import Member from "@/components/Member";

export default function Home() {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen">
				<h1 className="font-extrabold text-4xl pt-12 text-[#444444]">
					About Us
				</h1>
				<p className="px-24 py-8 max-w-6xl">
					At I.N.S.P.I.R.E. (Integrated Network for Scholarly Progress,
					Instruction, and Resource Education), we're transforming the way
					students and institutions connect with the world of learning and
					growth. Our journey began with a focus on simplifying bus travel for
					students, but today, we're expanding into new territories, constantly
					evolving to offer more.
				</p>
				<p className="font-extrabold text-[#444444] text-4xl">Meet the team</p>
				<div className="flex flex-row flex-wrap gap-8 justify-center items-center pt-4">
					<div className="flex flex-row justify-center items-center gap-8 w-full">
						<Member name={"Dhruv Anand"} role={"Developer"} />
						<Member name={"Sandesh Lavshetty"} role={"Creator"} />
						<Member name={"Praneeth Palugula"} role={"Developer"} />
					</div>
					<div className="flex flex-row justify-center items-center gap-8 w-full">
						<Member name={"Apremaya Goud"} role={"Designer"} />
						<Member name={"Manikanta Bojja"} role={"Management"} />
					</div>
				</div>
			</div>
		</>
	);
}
