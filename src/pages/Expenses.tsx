import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Package, Truck, Zap, Users } from "lucide-react";

const Expenses = () => {
  const upcomingExpenses = [
    { id: 1, category: "Stock Restock", amount: 25000, icon: Package, color: "text-primary" },
    { id: 2, category: "Vendor Payments", amount: 8500, icon: Truck, color: "text-secondary" },
    { id: 3, category: "Electricity Bill", amount: 1800, icon: Zap, color: "text-warning" },
    { id: 4, category: "Staff Salary", amount: 12000, icon: Users, color: "text-success" },
  ];

  const totalExpenses = upcomingExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-primary">Expense Prediction</h1>
          <p className="text-sm text-muted-foreground">Upcoming expenses (Next 7 days)</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Total Prediction Card */}
        <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Predicted</p>
                <p className="text-4xl font-bold text-destructive">
                  ₹{totalExpenses.toLocaleString('en-IN')}
                </p>
              </div>
              <TrendingDown className="h-12 w-12 text-destructive" />
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Breakdown</h2>
          {upcomingExpenses.map((expense) => (
            <Card key={expense.id} className="border-2 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <expense.icon className={`h-6 w-6 ${expense.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{expense.category}</p>
                      <p className="text-xs text-muted-foreground">Due in 2-7 days</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold">₹{expense.amount.toLocaleString('en-IN')}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Forecast Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Expected Income</span>
                <span className="font-semibold text-success">₹1,56,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Expected Expenses</span>
                <span className="font-semibold text-destructive">₹47,300</span>
              </div>
              <div className="h-px bg-border my-2"></div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Expected Profit</span>
                <span className="text-2xl font-bold text-primary">₹1,08,700</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};

export default Expenses;
