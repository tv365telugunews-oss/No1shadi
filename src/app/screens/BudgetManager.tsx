import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Plus, Trash2, Edit2, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function BudgetManager() {
  const navigate = useNavigate();
  const [totalBudget, setTotalBudget] = useState(1500000);

  const expenses = [
    { id: 1, category: "Venue", amount: 250000, paid: true, date: "2024-01-15" },
    { id: 2, category: "Photography", amount: 75000, paid: true, date: "2024-01-20" },
    { id: 3, category: "Decoration", amount: 100000, paid: true, date: "2024-02-01" },
    { id: 4, category: "Miscellaneous", amount: 25000, paid: false, date: "2024-02-10" }
  ];

  const totalSpent = expenses.filter(e => e.paid).reduce((sum, e) => sum + e.amount, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-6">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#A0002A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-white/10">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Budget Manager</h1>
            <p className="text-sm text-white/80">Track wedding expenses</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="p-6 bg-white rounded-2xl border-2 border-[#D4AF37] shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-[#004953]/60 mb-1">Total Budget</p>
              <p className="text-xl font-bold text-[#7B1E3A]">₹{totalBudget.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-[#004953]/60 mb-1">Spent</p>
              <p className="text-xl font-bold text-red-600">₹{totalSpent.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-[#004953]/60 mb-1">Remaining</p>
              <p className="text-xl font-bold text-green-600">₹{remaining.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <Button className="w-full h-12 rounded-xl border-2 border-dashed border-[#D4AF37] bg-white text-[#7B1E3A]">
          <Plus className="w-5 h-5 mr-2" />
          Add Expense
        </Button>

        <div className="space-y-3">
          {expenses.map((expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpenseCard({ expense }: any) {
  return (
    <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/20 shadow-md flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-[#004953]">{expense.category}</h4>
          {expense.paid && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">PAID</span>}
        </div>
        <p className="text-sm text-[#004953]/60">{new Date(expense.date).toLocaleDateString()}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-[#7B1E3A]">₹{expense.amount.toLocaleString()}</p>
        <div className="flex gap-2 mt-1">
          <button className="p-1 hover:bg-[#FFF8E7] rounded">
            <Edit2 className="w-4 h-4 text-[#7B1E3A]" />
          </button>
          <button className="p-1 hover:bg-red-50 rounded">
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
