
import { useState } from "react";
import { useNavigate } from "react-router";
import { Search as SearchIcon } from "lucide-react";

export default function Home() {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen p-6 bg-[#FFF8E7]">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl font-bold text-[#7B1E3A]">Home</h1>
				<p className="text-sm text-[#004953]/60">Welcome to No1 shadi</p>
			</div>
		</div>
	);
}

