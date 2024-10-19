import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const SoraFont = Sora({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "INSPIRE",
	description: "Inspire Web App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${SoraFont.className} min-h-screen antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
