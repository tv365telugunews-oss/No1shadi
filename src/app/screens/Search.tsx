import { useState } from "react";
import { useNavigate } from "react-router";
import { Search as SearchIcon, SlidersHorizontal, X } from "lucide-react";
import { mockProfiles } from "../data/mockData";
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
import { educationCourses, getEducationDisplayName, getEducationValue } from "../data/education";
import { rashis, getRashiDisplayName, getRashiValue, nakshatrams, getNakshatramDisplayName, getNakshatramValue, gothrams, getGothramDisplayName, getGothramValue } from "../data/astrology";

export default function Search() {
  const [showFilters, setShowFilters] = useState(false);
  const [ageRange, setAgeRange] = useState([21, 35]);
  const [heightRange, setHeightRange] = useState([150, 180]);
  
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

              {/* Height Range */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-[#004953]">
                  Height Range: {heightRange[0]}cm - {heightRange[1]}cm
                </label>
                <Slider
                  value={heightRange}
                  onValueChange={setHeightRange}
                  min={140}
                  max={200}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Religion */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Religion</label>
                <Select>
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
                <Select>
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
                <Select>
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

              {/* Education */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Education</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {educationCourses.map(course => (
                      <SelectItem key={getEducationValue(course)} value={getEducationValue(course)}>
                        {getEducationDisplayName(course)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Income */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Annual Income</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
                    <SelectItem value="5-8">₹5-8 Lakhs</SelectItem>
                    <SelectItem value="8-12">₹8-12 Lakhs</SelectItem>
                    <SelectItem value="12-15">₹12-15 Lakhs</SelectItem>
                    <SelectItem value="15+">₹15+ Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rashi */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Rashi</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select rashi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {rashis.map(rashi => (
                      <SelectItem key={getRashiValue(rashi)} value={getRashiValue(rashi)}>
                        {getRashiDisplayName(rashi)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Nakshatram */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Nakshatram</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select nakshatram" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {nakshatrams.map(nakshatram => (
                      <SelectItem key={getNakshatramValue(nakshatram)} value={getNakshatramValue(nakshatram)}>
                        {getNakshatramDisplayName(nakshatram)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Gothram */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Gothram</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select gothram" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {gothrams.map(gothram => (
                      <SelectItem key={getGothramValue(gothram)} value={getGothramValue(gothram)}>
                        {getGothramDisplayName(gothram)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Employment Type */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#004953]">Employment Type</label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl border-[#D4AF37]/30 bg-white">
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="private">Private Sector</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="self">Self Employed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#D4AF37]/20 p-4 flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(false)}
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
            Showing {mockProfiles.length} profiles
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

        <div className="space-y-4">
          {mockProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProfileCard profile={profile} variant="horizontal" />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}