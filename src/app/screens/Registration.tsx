
import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function Registration() {
	const navigate = useNavigate();
	const [name, setName] = useState("");

	return (
		<div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center p-6">
			<div className="bg-white p-6 rounded-2xl shadow max-w-md w-full">
				<button onClick={() => navigate(-1)} className="mb-4 text-sm text-[#7B1E3A]">Back</button>
				<h2 className="text-xl font-bold mb-2">Registration</h2>
				<input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full p-2 border rounded" />
				<div className="mt-4 flex justify-end">
					<button onClick={() => navigate('/otp-verification')} className="px-4 py-2 bg-[#7B1E3A] text-white rounded">Continue</button>
				</div>
			</div>
		</div>
	);
}

