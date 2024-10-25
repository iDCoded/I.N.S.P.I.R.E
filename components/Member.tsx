"use client";

import { useEffect, useState } from "react";

const Member = ({ name, role }: MemberProps) => {
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");

	const getInitials = (name: string) => {
		const nameArray = name.split(" ");
		setFirst(nameArray[0][0]);
		setLast(nameArray[1][0]);
	};

	useEffect(() => {
		getInitials(name);
	});

	return (
		<div className="flex flex-col text-center p-2 rounded-full">
			<p className="text-xl">
				<span className="text-3xl">{first}</span>
				<span className="text-2xl">{last}</span>
			</p>
			<p className="text-sm">{role}</p>
		</div>
	);
};

export default Member;
