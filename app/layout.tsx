import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
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
			<body
				className={`${geistSans.className} ${geistMono.className} min-h-screen antialiased`}>
			<body className={`${SoraFont.className} min-h-screen antialiased`}>
				{children}
			</body>
		</html>
	);
}
