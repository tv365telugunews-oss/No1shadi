
import { useState } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function ProfileVerification() {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);

	return (
		<div className="min-h-screen bg-[#FFF8E7] p-6">
			<div className="flex items-center gap-4 mb-6">
				<button onClick={() => navigate(-1)} className="p-2 rounded-full">
					<ArrowLeft className="w-6 h-6" />
				</button>
				<h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Profile Verification</h1>
			</div>

			<div className="bg-white rounded-2xl p-6 shadow">
				<p className="mb-4">Follow the steps to verify your profile.</p>
				<div className="space-y-3">
					<div>
						<label className="block text-sm mb-1">Full name</label>
						<Input placeholder="Your name" />
					</div>
					<div>
						<label className="block text-sm mb-1">Upload ID</label>
						<Button variant="outline"><Camera className="w-4 h-4 mr-2" /> Upload</Button>
					</div>
					<div className="flex justify-end">
						<Button onClick={() => setStep((s) => s + 1)}>Next</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

