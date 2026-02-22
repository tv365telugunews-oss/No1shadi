import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, CheckSquare, DollarSign, Users, Download, Share2, Sparkles, Plus } from "lucide-react";
import { Button } from "../components/ui/button";

export default function WeddingPlanner() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"timeline" | "checklist" | "budget">("timeline");

  const weddingDate = "2024-12-15";
  const daysUntilWedding = 180;

  const [timeline, setTimeline] = useState([
    {
      phase: "6 Months Before",
      status: "current",
      tasks: [
        { name: "Finalize Wedding Venue", completed: true },
        { name: "Choose Wedding Date", completed: true },
        { name: "Create Guest List", completed: false },
        { name: "Set Wedding Budget", completed: true },
        { name: "Book Photographer", completed: false }
      ]
    },
    {
      phase: "3-5 Months Before",
      status: "upcoming",
      tasks: [
        { name: "Book Caterer", completed: false },
        { name: "Select Wedding Attire", completed: false },
        { name: "Book Makeup Artist", completed: false },
        { name: "Finalize Decoration Theme", completed: false },
        { name: "Send Save the Date", completed: false }
      ]
    },
    {
      phase: "1-2 Months Before",
      status: "upcoming",
      tasks: [
        { name: "Send Wedding Invitations", completed: false },
        { name: "Finalize Menu", completed: false },
        { name: "Book Wedding Transport", completed: false },
        { name: "Arrange Accommodation for Guests", completed: false },
        { name: "Plan Honeymoon", completed: false }
      ]
    }
  ]);

  const toggleTask = (phaseIndex: number, taskIndex: number) => {
    setTimeline(prevTimeline => {
      const newTimeline = [...prevTimeline];
      newTimeline[phaseIndex].tasks[taskIndex].completed = !newTimeline[phaseIndex].tasks[taskIndex].completed;
      return newTimeline;
    });
  };

  const budgetOverview = {
    total: 1500000,
    spent: 450000,
    remaining: 1050000,
    categories: [
      { name: "Venue", allocated: 500000, spent: 250000 },
      { name: "Catering", allocated: 400000, spent: 0 },
      { name: "Photography", allocated: 150000, spent: 75000 },
      { name: "Decoration", allocated: 200000, spent: 100000 },
      { name: "Others", allocated: 250000, spent: 25000 }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                AI Wedding Planner
              </h1>
              <p className="text-sm text-white/80">Your personal wedding assistant</p>
            </div>
          </div>
          <Sparkles className="w-8 h-8 text-[#F4C430]" />
        </div>

        {/* Countdown */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 mb-1">Wedding Date</p>
              <p className="text-xl font-bold">{new Date(weddingDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/80 mb-1">Days to Go</p>
              <p className="text-3xl font-bold text-[#F4C430]">{daysUntilWedding}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 grid grid-cols-3 gap-3">
        <QuickStat
          icon={<CheckSquare className="w-5 h-5" />}
          value="8/15"
          label="Tasks Done"
          color="text-green-500"
        />
        <QuickStat
          icon={<DollarSign className="w-5 h-5" />}
          value="30%"
          label="Budget Used"
          color="text-blue-500"
        />
        <QuickStat
          icon={<Users className="w-5 h-5" />}
          value="450"
          label="Guests"
          color="text-purple-500"
        />
      </div>

      {/* Tabs */}
      <div className="sticky top-[180px] z-10 bg-white border-y border-[#D4AF37]/20 px-4 py-2">
        <div className="flex gap-2">
          <TabButton
            active={activeTab === "timeline"}
            onClick={() => setActiveTab("timeline")}
            label="Timeline"
            icon={<Calendar className="w-4 h-4" />}
          />
          <TabButton
            active={activeTab === "checklist"}
            onClick={() => setActiveTab("checklist")}
            label="Checklist"
            icon={<CheckSquare className="w-4 h-4" />}
          />
          <TabButton
            active={activeTab === "budget"}
            onClick={() => setActiveTab("budget")}
            label="Budget"
            icon={<DollarSign className="w-4 h-4" />}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "timeline" && (
          <div className="space-y-4">
            {timeline.map((phase, phaseIndex) => (
              <PhaseCard 
                key={phaseIndex} 
                phase={phase} 
                phaseIndex={phaseIndex}
                onToggleTask={toggleTask}
              />
            ))}
          </div>
        )}

        {activeTab === "checklist" && (
          <div className="space-y-3">
            <Button
              onClick={() => {}}
              className="w-full h-12 rounded-xl border-2 border-dashed border-[#D4AF37] bg-white text-[#7B1E3A] hover:bg-[#FFF8E7]"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Custom Task
            </Button>
            {timeline.flatMap((phase, phaseIndex) =>
              phase.tasks.map((task, taskIndex) => (
                <TaskItem 
                  key={`${phase.phase}-${taskIndex}`} 
                  task={task} 
                  onToggle={() => toggleTask(phaseIndex, taskIndex)}
                />
              ))
            )}
          </div>
        )}

        {activeTab === "budget" && (
          <div className="space-y-4">
            {/* Budget Overview */}
            <div className="p-6 bg-white rounded-2xl border-2 border-[#D4AF37] shadow-lg">
              <h3 className="text-lg font-bold text-[#7B1E3A] mb-4">Budget Overview</h3>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#004953]/60">Total Spent</span>
                  <span className="text-sm font-bold text-[#7B1E3A]">
                    ₹{budgetOverview.spent.toLocaleString()} / ₹{budgetOverview.total.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] h-3 rounded-full"
                    style={{ width: `${(budgetOverview.spent / budgetOverview.total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D4AF37]/20">
                <div>
                  <p className="text-sm text-[#004953]/60 mb-1">Total Budget</p>
                  <p className="text-xl font-bold text-[#004953]">
                    ₹{budgetOverview.total.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#004953]/60 mb-1">Remaining</p>
                  <p className="text-xl font-bold text-green-600">
                    ₹{budgetOverview.remaining.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-3">
              {budgetOverview.categories.map((category, index) => (
                <BudgetCategory key={index} category={category} />
              ))}
            </div>

            <Button
              onClick={() => navigate("/budget-manager")}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white"
            >
              Manage Budget Details
            </Button>
          </div>
        )}
      </div>

      {/* AI Suggestions */}
      <div className="mx-4 mt-6 p-4 bg-gradient-to-br from-[#E6F7F8] to-[#FFF8E7] rounded-2xl border-2 border-[#D4AF37]/30">
        <div className="flex items-start gap-3">
          <Sparkles className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-[#7B1E3A] mb-2">AI Recommendation</h4>
            <p className="text-sm text-[#004953]/80 mb-3">
              Based on your timeline, we suggest booking your caterer this week. Premium caterers get booked
              6 months in advance!
            </p>
            <Button
              onClick={() => navigate("/wedding-marketplace")}
              variant="outline"
              className="border-[#D4AF37] text-[#7B1E3A]"
            >
              Browse Caterers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickStat({ icon, value, label, color }: any) {
  return (
    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/20 shadow-md text-center">
      <div className={`flex justify-center mb-2 ${color}`}>{icon}</div>
      <p className="text-lg font-bold text-[#004953] mb-1">{value}</p>
      <p className="text-xs text-[#004953]/60">{label}</p>
    </div>
  );
}

function TabButton({ active, onClick, label, icon }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
        active ? "bg-[#7B1E3A] text-white" : "text-[#004953]/60 hover:bg-[#FFF8E7]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function PhaseCard({ phase, phaseIndex, onToggleTask }: any) {
  const completedTasks = phase.tasks.filter((t: any) => t.completed).length;
  const totalTasks = phase.tasks.length;

  return (
    <div className="p-5 bg-white rounded-2xl border-2 border-[#D4AF37]/20 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#7B1E3A]">{phase.phase}</h3>
        <div className="flex items-center gap-2">
          {phase.status === "current" && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
              IN PROGRESS
            </span>
          )}
          <span className="text-sm font-semibold text-[#004953]">
            {completedTasks}/{totalTasks}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {phase.tasks.map((task: any, i: number) => (
          <TaskItem key={i} task={task} onToggle={() => onToggleTask(phaseIndex, i)} />
        ))}
      </div>
    </div>
  );
}

function TaskItem({ task, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className="flex items-center gap-3 p-3 bg-[#FFF8E7] rounded-lg w-full text-left hover:bg-[#FFE6C7] transition-colors cursor-pointer"
    >
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
        task.completed ? "border-green-500 bg-green-500" : "border-[#D4AF37]"
      }`}>
        {task.completed && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <span className={`text-sm flex-1 ${task.completed ? "text-[#004953]/60 line-through" : "text-[#004953]"}`}>
        {task.name}
      </span>
    </div>
  );
}

function BudgetCategory({ category }: any) {
  const percentage = (category.spent / category.allocated) * 100;

  return (
    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/20 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-[#004953]">{category.name}</span>
        <span className="text-sm font-bold text-[#7B1E3A]">
          ₹{category.spent.toLocaleString()} / ₹{category.allocated.toLocaleString()}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${
            percentage > 90 ? "bg-red-500" : percentage > 70 ? "bg-yellow-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-[#004953]/60">{percentage.toFixed(0)}% used</span>
        <span className="text-xs text-green-600 font-semibold">
          ₹{(category.allocated - category.spent).toLocaleString()} left
        </span>
      </div>
    </div>
  );
}