
import { useNavigate, useParams } from "react-router";

export default function ProfileDetail() {
	const navigate = useNavigate();
	const params = useParams();

	return (
		<div className="min-h-screen p-6 bg-[#FFF8E7]">
			<div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl">
				<button onClick={() => navigate(-1)} className="mb-4 text-sm">Back</button>
				<h2 className="text-xl font-bold">Profile {params.id}</h2>
				<p className="text-sm text-[#004953]/60">Profile details placeholder</p>
			</div>
		</div>
	);
}

