import { useEffect, useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import ProfileCard from "../components/ProfileCard";
import { BottomNav } from "../components/BottomNav";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Slider } from "../components/ui/slider";
import { motion } from "motion/react";
import { teluguCastes, getCasteDisplayName, getCasteValue } from "../data/castes";
import { indianStates, getStateDisplayName, getStateValue } from "../data/states";
import { indianReligions, getReligionDisplayName, getReligionValue } from "../data/religions";
import { getProfiles, type ApiProfile } from "../config/api";

export default function Search() {
  const [showFilters, setShowFilters] = useState(false);
  const [ageRange, setAgeRange] = useState([21, 35]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("all");
  const [selectedCaste, setSelectedCaste] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [profiles, setProfiles] = useState<ApiProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadProfiles() {
      try {
        setLoading(true);
        setError("");
        const data = await getProfiles({
          q: searchQuery || undefined,
          religion: selectedReligion !== "all" ? selectedReligion : undefined,
          caste: selectedCaste !== "all" ? selectedCaste : undefined,
          state: selectedState !== "all" ? selectedState : undefined,
          minAge: ageRange[0],
          maxAge: ageRange[1],
        });

        if (!ignore) {
          setProfiles(data);
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError instanceof Error ? requestError.message : "Failed to load profiles");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadProfiles();

    return () => {
      ignore = true;
    };
  }, [searchQuery, selectedReligion, selectedCaste, selectedState, ageRange]);
  
  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#D4AF37]/20 p-4">
        <h2 className="text-2xl font-bold text-[#7B1E3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Find Your Match
        </h2>

        {/* Search Bar */}
        <div className="relative mb-4">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/40" />
          <Input
            type="text"
            placeholder="Search by name, profession, location..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="h-12 pl-12 pr-12 rounded-xl border-[#D4AF37]/30 bg-[#FFF8E7]"
          />
        </div>

        {/* Filter Button */}
        <Sheet open={showFilters} onOpenChange={setShowFilters}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl border-[#D4AF37] text-[#7B1E3A]"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Advanced Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh] bg-[#FFF8E7]">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                Filter Matches
              </SheetTitle>
              <SheetDescription className="text-sm text-[#004953]/60">
                Refine your search with these filters
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-6 overflow-y-auto h-[calc(90vh-120px)] pb-20">
              {/* Age Range */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-[#004953]">
                  Age Range: {ageRange[0]} - {ageRange[1]} years
                </label>
                <Slider
                  value={ageRange}
                  onValueChange={setAgeRange}
                  min={18}
                  max={60}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Religion */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Religion</label>
                <Select value={selectedReligion} onValueChange={setSelectedReligion}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {indianReligions.map(religion => (
                      <SelectItem key={getReligionValue(religion)} value={getReligionValue(religion)}>
                        {getReligionDisplayName(religion)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Caste */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Caste</label>
                <Select value={selectedCaste} onValueChange={setSelectedCaste}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select caste" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {teluguCastes.map(caste => (
                      <SelectItem key={getCasteValue(caste)} value={getCasteValue(caste)}>
                        {getCasteDisplayName(caste)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* State */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {indianStates.map(state => (
                      <SelectItem key={getStateValue(state)} value={getStateValue(state)}>
                        {getStateDisplayName(state)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

            </div>

            {/* Filter Actions */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#D4AF37]/20 p-4 flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedReligion("all");
                  setSelectedCaste("all");
                  setSelectedState("all");
                  setAgeRange([21, 35]);
                  setShowFilters(false);
                }}
                className="flex-1 h-12 rounded-xl border-[#D4AF37]"
              >
                Clear All
              </Button>
              <Button
                onClick={() => setShowFilters(false)}
                className="flex-1 h-12 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #7B1E3A 0%, #A0002A 100%)",
                  color: "#FFFFFF"
                }}
              >
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Results */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#004953]/60">
            Showing {profiles.length} profiles
          </p>
          <Select defaultValue="compatibility">
            <SelectTrigger className="w-40 h-10 rounded-xl border-[#D4AF37]/30 bg-white text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compatibility">Best Match</SelectItem>
              <SelectItem value="recent">Recently Joined</SelectItem>
              <SelectItem value="active">Most Active</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading && <p className="text-sm text-[#004953]/60">Loading matches...</p>}
        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

        <div className="space-y-4">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProfileCard
                profile={{
                  id: profile.id,
                  name: profile.name,
                  age: profile.age,
                  height: profile.height,
                  location: profile.location,
                  profession: profile.profession,
                  verified: profile.verified,
                  compatibility: profile.compatibility,
                  image: profile.image || profile.photo,
                }}
                variant="horizontal"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
