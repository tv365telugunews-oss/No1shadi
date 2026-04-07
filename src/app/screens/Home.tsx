
import { useEffect, useState } from "react";
import { getBackendHealth } from "../config/api";

export default function Home() {
	const [backendStatus, setBackendStatus] = useState<"checking" | "online" | "offline">("checking");

	useEffect(() => {
		let mounted = true;

		async function checkBackend() {
			try {
				await getBackendHealth();
				if (mounted) {
					setBackendStatus("online");
				}
			} catch {
				if (mounted) {
					setBackendStatus("offline");
				}
			}
		}

		checkBackend();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div className="min-h-screen p-6 bg-[#FFF8E7]">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl font-bold text-[#7B1E3A]">Home</h1>
				<p className="text-sm text-[#004953]/60">Welcome to No1 shadi</p>
				<p className="mt-3 text-sm">
					Backend status:{" "}
					<span className={backendStatus === "online" ? "text-green-700 font-medium" : backendStatus === "offline" ? "text-red-700 font-medium" : "text-amber-700 font-medium"}>
						{backendStatus}
					</span>
				</p>
			</div>
		</div>
	);
}

