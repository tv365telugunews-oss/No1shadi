import { useState } from "react";
import { ArrowLeft, Music, BookOpen, Film, Dumbbell, UtensilsCrossed, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

export default function Hobbies() {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(["music"]);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const toggleHobby = (hobby: string) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter(h => h !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const hobbiesData = {
    general: [
      "Acting", "Adventure Sports", "Alternative Healing / Medicine", "Art / Handicraft",
      "Astrology", "Baking", "Bike / Car Enthusiast", "Bird Watching",
      "Blogging / Video Blogging", "Board Games", "Book Clubs", "Calligraphy",
      "Clubbing", "Collectibles", "Cooking", "Dancing", "DIY Projects",
      "Fashion", "Gardening / Landscaping", "Painting", "Photography",
      "Travelling", "Volunteering", "Writing", "Yoga / Meditation"
    ],
    music: [
      "Bhangra", "Bluegrass", "Blues", "Christian / Gospel", "Classical",
      "Classical - Carnatic", "Country", "Death Metal", "Devotional",
      "Disco", "EDM (Electronic Dance Music)", "Film Songs", "Folk Music",
      "Fusion", "Ghazals", "Heavy Metal", "Hip-Hop"
    ],
    reading: [
      "Autobiographies / Biographies", "Business / Professional", "Classics",
      "Comics / Graphic Novels", "Fantasy", "Fiction", "History", "Humor",
      "Literature", "Love Reading Almost Anything", "Magazines / Newspapers",
      "Philosophy / Spiritual", "Poetry", "Romance", "Science Fiction"
    ],
    movies: [
      "Action", "Anime", "Classics", "Comedy", "Documentaries", "Drama",
      "Epics", "Fantasy", "Horror", "Movie Fanatic", "Neo-Noir",
      "Non-Commercial / Art", "Romantic", "Romantic Comedies",
      "Sci-Fi", "Short Films", "Thriller / Suspense"
    ],
    sports: [
      "Aerobics", "American Football", "Archery", "Badminton", "Baseball",
      "Basketball", "Billiards / Snooker / Pool", "Bowling", "Boxing",
      "Cricket", "Cycling", "Football", "Golf", "Gym / Bodybuilding",
      "Handball", "Hockey", "Horseback Riding", "Jogging / Walking / Running",
      "Swimming", "Table Tennis", "Tennis", "Volleyball", "Yoga"
    ],
    cuisine: [
      "American", "Arabic", "Bengali", "Brazilian", "Chinese", "Continental",
      "Ethiopian", "Fast Food", "French", "Greek", "Gujarati", "Italian",
      "Japanese", "Konkan", "Korean", "Lebanese", "Malaysian", "Marathi",
      "Mediterranean", "Mexican", "Mughlai", "Punjabi", "South Indian", "Thai"
    ]
  };

  const handleSubmit = () => {
    localStorage.setItem('userHobbies', JSON.stringify(selectedHobbies));
    navigate('/home');
  };

  const sections = [
    { id: 'general', title: 'Hobbies & Interests', icon: Music },
    { id: 'music', title: 'Music', icon: Music },
    { id: 'reading', title: 'Reading', icon: BookOpen },
    { id: 'movies', title: 'Movies And TV Shows', icon: Film },
    { id: 'sports', title: 'Sports And Fitness', icon: Dumbbell },
    { id: 'cuisine', title: 'Food', icon: UtensilsCrossed },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Hobbies & Interests
            </h1>
            <p className="text-sm text-white/80">Share what you love to do</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] shadow-lg overflow-hidden">
          <div className="border-b border-[#D4AF37]/30">
            {sections.map((section, index) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-[#FFF8E7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5 text-[#7B1E3A]" />
                    <span className="font-semibold text-[#004953]">{section.title}</span>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-5 h-5 text-[#7B1E3A]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#7B1E3A]" />
                  )}
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="p-4 pt-0 bg-[#FFF8E7]/30">
                    <div className="flex flex-wrap gap-2">
                      {hobbiesData[section.id as keyof typeof hobbiesData].map((hobby) => (
                        <button
                          key={hobby}
                          onClick={() => toggleHobby(hobby)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                            selectedHobbies.includes(hobby)
                              ? "bg-[#7B1E3A] text-white border-[#7B1E3A]"
                              : "bg-white text-[#004953] border-[#D4AF37]/30 hover:border-[#D4AF37]"
                          }`}
                        >
                          {hobby}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {index < sections.length - 1 && (
                  <div className="border-b border-[#D4AF37]/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Count */}
        {selectedHobbies.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-[#004953]/70">
              {selectedHobbies.length} {selectedHobbies.length === 1 ? 'interest' : 'interests'} selected
            </p>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#D4AF37]/30 shadow-lg">
        <div className="max-w-4xl mx-auto flex gap-3">
          <Button
            onClick={() => navigate('/home')}
            variant="outline"
            className="flex-1 h-14 rounded-xl border-2 border-[#7B1E3A] text-[#7B1E3A] hover:bg-[#7B1E3A] hover:text-white font-semibold"
          >
            Skip for now
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1 h-14 rounded-xl text-lg font-bold shadow-xl"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)",
              color: "#FFFFFF"
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
