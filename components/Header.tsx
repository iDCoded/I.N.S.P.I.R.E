import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<div className="absolute w-full bg-accent text-2xl p-4 flex flex-row justify-between">
			<Link href={"/"}>INSPIRE</Link>
			<div className="flex flex-row gap-2">
				<Link href={"/register"}>
					<Button variant={"secondary"}>Register</Button>
				</Link>
				<Link href={"/login"}>
					<Button>Login</Button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
