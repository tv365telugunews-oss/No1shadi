import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, MessageCircle, Info, CheckCircle } from "lucide-react";

interface ProfileCardProps {
	profile: {
		id: string;
		name: string;
		age: number;
		height?: string;
		location?: string;
		profession?: string;
		income?: string;
		image?: string;
		verified?: boolean;
		compatibility?: number;
	};
	variant?: "default" | "horizontal";
}

export default function ProfileCard({ profile, variant = "default" }: ProfileCardProps) {
	const navigate = useNavigate();

	const handleSendInterest = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		alert(`Interest sent to ${profile.name}`);
	};

	if (variant === "horizontal") {
		return (
			<div onClick={() => navigate(`/profile/${profile.id}`)} className="group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all flex">
				<div className="relative overflow-hidden w-32 flex-shrink-0">
					<img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
					{profile.verified && <CheckCircle className="absolute top-2 right-2 w-4 h-4 text-[#D4AF37]" />}
				</div>
				<div className="p-4 flex-1">
					<div className="flex items-start justify-between mb-2">
						<div>
							<h3 className="font-bold text-[#004953] text-base truncate">{profile.name}</h3>
							<p className="text-sm text-[#004953]/60">{profile.age} yrs{profile.height ? `, ${profile.height}` : ''}</p>
						</div>
						{profile.compatibility && (
							<div className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-[#D4AF37]/10">
								<span className="text-sm font-bold text-[#7B1E3A]">{profile.compatibility}%</span>
							</div>
						)}
					</div>
					<div className="space-y-1 mb-3">
						<p className="text-xs text-[#004953]/80 truncate">{profile.profession}</p>
						<p className="text-xs text-[#004953]/80 truncate">{profile.location}</p>
					</div>
					<div className="flex gap-2">
						<button onClick={handleSendInterest} className="flex-1 h-8 rounded-lg bg-[#7B1E3A] text-white text-sm font-semibold">Interest</button>
						<button onClick={(e)=>{e.preventDefault(); navigate('/chat');}} className="h-8 w-8 rounded-lg border border-[#D4AF37] text-[#7B1E3A] flex items-center justify-center">
							<MessageCircle className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="group cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-xl transition-all">
			<div className="relative overflow-hidden">
				<img src={profile.image} alt={profile.name} className="w-full aspect-[3/4] object-cover" />
				{profile.verified && (
					<div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm flex items-center gap-1">
						<CheckCircle className="w-4 h-4 text-[#D4AF37]" />
						<span className="text-xs font-semibold text-[#004953]">Verified</span>
					</div>
				)}
			</div>
			<div className="p-4">
				<div className="flex items-start justify-between mb-2">
					<div>
						<h3 className="font-bold text-[#004953] text-lg truncate">{profile.name}</h3>
						<p className="text-sm text-[#004953]/60">{profile.age} yrs{profile.height ? `, ${profile.height}` : ''}</p>
					</div>
					{profile.compatibility && (
						<div className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-[#D4AF37]/10">
							<span className="text-sm font-bold text-[#7B1E3A]">{profile.compatibility}%</span>
						</div>
					)}
				</div>

				<div className="space-y-1 mb-3">
					<p className="text-sm text-[#004953]/80 truncate">{profile.profession}</p>
					<p className="text-sm text-[#004953]/80 truncate">{profile.location}</p>
				</div>

				<div className="flex gap-2">
					<button onClick={handleSendInterest} className="flex-1 h-10 rounded-xl bg-[#7B1E3A] text-white font-semibold">Send Interest</button>
					<button onClick={(e)=>{e.preventDefault(); navigate('/chat');}} className="h-10 w-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] flex items-center justify-center">
						<MessageCircle className="w-5 h-5" />
					</button>
					<button onClick={(e)=>e.preventDefault()} className="h-10 w-10 rounded-xl border-2 border-[#D4AF37] text-[#7B1E3A] flex items-center justify-center">
						<Info className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}

