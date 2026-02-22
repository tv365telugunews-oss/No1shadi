import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { 
  Phone, 
  PhoneOff, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Volume2, 
  VolumeX,
  Maximize,
  MessageSquare
} from "lucide-react";
import { Button } from "../components/ui/button";

export default function VideoCall() {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = location.state?.profile;
  const callType = location.state?.type || "video"; // "video" or "voice"

  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(callType === "voice");
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [isConnecting, setIsConnecting] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simulate connection delay
    const connectTimer = setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 3000);

    return () => clearTimeout(connectTimer);
  }, []);

  useEffect(() => {
    if (!isConnected) return;

    // Call duration timer
    const durationTimer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(durationTimer);
  }, [isConnected]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] relative overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0">
        {/* Remote Video (Full Screen) */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          {isConnecting ? (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#7B1E3A] flex items-center justify-center animate-pulse">
                <img
                  src={profile?.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"}
                  alt={profile?.name}
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <p className="text-white text-lg font-semibold mb-2">Connecting...</p>
              <p className="text-white/60 text-sm">{profile?.name || "User"}</p>
            </div>
          ) : (
            <>
              {callType === "video" && !isVideoOff ? (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <img
                    src={profile?.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"}
                    alt={profile?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#7B1E3A] flex items-center justify-center">
                    <img
                      src={profile?.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"}
                      alt={profile?.name}
                      className="w-28 h-28 rounded-full"
                    />
                  </div>
                  <p className="text-white text-xl font-semibold mb-2">{profile?.name || "User"}</p>
                  <p className="text-white/60">{formatDuration(callDuration)}</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Local Video (Small Window) - Only in video mode */}
        {callType === "video" && !isVideoOff && isConnected && (
          <div className="absolute top-4 right-4 w-32 h-40 bg-gray-900 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1619895092538-128341789043?w=200&h=250&fit=crop"
              alt="You"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 rounded-full">
              <span className="text-white text-xs font-semibold">You</span>
            </div>
          </div>
        )}
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <img
                src={profile?.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"}
                alt={profile?.name}
                className="w-9 h-9 rounded-full"
              />
            </div>
            <div>
              <p className="text-white font-semibold">{profile?.name || "User"}</p>
              {isConnected && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/80 text-sm">{formatDuration(callDuration)}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleEndCall}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Maximize className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <div className="max-w-md mx-auto">
          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Mute/Unmute */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                isMuted ? "bg-red-500" : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {isMuted ? (
                <MicOff className="w-6 h-6 text-white" />
              ) : (
                <Mic className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Video On/Off - Only in video calls */}
            {callType === "video" && (
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  isVideoOff ? "bg-red-500" : "bg-white/20 hover:bg-white/30"
                }`}
              >
                {isVideoOff ? (
                  <VideoOff className="w-6 h-6 text-white" />
                ) : (
                  <Video className="w-6 h-6 text-white" />
                )}
              </button>
            )}

            {/* End Call */}
            <button
              onClick={handleEndCall}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all shadow-lg"
            >
              <PhoneOff className="w-7 h-7 text-white" />
            </button>

            {/* Speaker */}
            <button
              onClick={() => setIsSpeakerOn(!isSpeakerOn)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                isSpeakerOn ? "bg-white/20 hover:bg-white/30" : "bg-white/10"
              }`}
            >
              {isSpeakerOn ? (
                <Volume2 className="w-6 h-6 text-white" />
              ) : (
                <VolumeX className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Chat */}
            <button
              onClick={() => {}}
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Control Labels */}
          <div className="flex items-center justify-center gap-4 text-white/80 text-xs">
            <span className="w-14 text-center">{isMuted ? "Unmute" : "Mute"}</span>
            {callType === "video" && (
              <span className="w-14 text-center">{isVideoOff ? "Video On" : "Video Off"}</span>
            )}
            <span className="w-16 text-center">End</span>
            <span className="w-14 text-center">Speaker</span>
            <span className="w-14 text-center">Chat</span>
          </div>
        </div>
      </div>

      {/* Premium Feature Badge */}
      {!isConnected && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <Video className="w-4 h-4" />
            <span className="text-sm font-bold">Premium Feature</span>
          </div>
        </div>
      )}

      {/* Connection Quality Indicator */}
      {isConnected && (
        <div className="absolute top-20 left-4">
          <div className="bg-black/60 px-3 py-1 rounded-full flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-green-500 rounded-full"></div>
              <div className="w-1 h-4 bg-green-500 rounded-full"></div>
              <div className="w-1 h-5 bg-green-500 rounded-full"></div>
              <div className="w-1 h-6 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-white text-xs font-semibold">Excellent</span>
          </div>
        </div>
      )}
    </div>
  );
}
