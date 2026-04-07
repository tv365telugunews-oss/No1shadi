import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileById, type ApiProfile } from "../config/api";

export default function ProfileDetail() {
	const navigate = useNavigate();
	const params = useParams();
	const [profile, setProfile] = useState<ApiProfile | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		let ignore = false;

		async function loadProfile() {
			if (!params.id) {
				return;
			}

			try {
				setLoading(true);
				const data = await getProfileById(params.id);
				if (!ignore) {
					setProfile(data);
				}
			} catch (requestError) {
				if (!ignore) {
					setError(requestError instanceof Error ? requestError.message : "Failed to load profile");
				}
			} finally {
				if (!ignore) {
					setLoading(false);
				}
			}
		}

		loadProfile();

		return () => {
			ignore = true;
		};
	}, [params.id]);

	return (
		<div className="min-h-screen p-6 bg-[#FFF8E7]">
			<div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl">
				<button onClick={() => navigate(-1)} className="mb-4 text-sm">Back</button>
				{loading && <p className="text-sm text-[#004953]/60">Loading profile...</p>}
				{error && <p className="text-sm text-red-600">{error}</p>}
				{profile && (
					<>
						<div className="flex items-start gap-4">
							<img src={profile.photo || profile.image} alt={profile.name} className="w-28 h-28 rounded-2xl object-cover" />
							<div>
								<h2 className="text-2xl font-bold text-[#7B1E3A]">{profile.name}</h2>
								<p className="text-sm text-[#004953]/60">{profile.age} years • {profile.location}</p>
								<p className="text-sm text-[#004953]/80 mt-2">{profile.profession}</p>
								<p className="text-sm text-[#004953]/80">Compatibility: {profile.compatibility}%</p>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-4 text-sm text-[#004953]">
							<div>
								<p className="font-semibold text-[#7B1E3A]">Education</p>
								<p>{profile.education}</p>
							</div>
							<div>
								<p className="font-semibold text-[#7B1E3A]">Religion</p>
								<p>{profile.religion}</p>
							</div>
							<div>
								<p className="font-semibold text-[#7B1E3A]">Caste</p>
								<p>{profile.caste}</p>
							</div>
							<div>
								<p className="font-semibold text-[#7B1E3A]">Income</p>
								<p>{profile.income}</p>
							</div>
						</div>

						{profile.about && (
							<div className="mt-6">
								<p className="font-semibold text-[#7B1E3A] mb-2">About</p>
								<p className="text-sm text-[#004953]/80 leading-6">{profile.about}</p>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}

