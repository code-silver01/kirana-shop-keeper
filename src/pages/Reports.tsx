import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

const Reports = () => {
  // Mock data
  const monthlyData = {
    totalIncome: 156780,
    creditGiven: 42300,
    creditRecovered: 38100,
    netProfit: 152580,
  };

  const dailyIncome = [
    { day: "Mon", amount: 18500 },
    { day: "Tue", amount: 22300 },
    { day: "Wed", amount: 19800 },
    { day: "Thu", amount: 24100 },
    { day: "Fri", amount: 26400 },
    { day: "Sat", amount: 21200 },
    { day: "Sun", amount: 24480 },
  ];

  const maxAmount = Math.max(...dailyIncome.map(d => d.amount));

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-primary">Reports</h1>
          <p className="text-sm text-muted-foreground">Income & Expense Analysis</p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Weekly Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              This Week's Daily Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-48">
              {dailyIncome.map((day) => {
                const height = (day.amount / maxAmount) * 100;
                return (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-primary rounded-t-lg transition-all hover:bg-primary/80" style={{ height: `${height}%` }}>
                      <div className="text-xs font-semibold text-primary-foreground p-1 text-center">
                        ₹{(day.amount / 1000).toFixed(0)}k
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{day.day}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Sales Split */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Sales Split (This Week)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-success"></div>
                <span className="font-medium">Cash</span>
              </div>
              <span className="font-bold">58%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-secondary"></div>
                <span className="font-medium">UPI</span>
              </div>
              <span className="font-bold">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-warning"></div>
                <span className="font-medium">Credit</span>
              </div>
              <span className="font-bold">7%</span>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Summary */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              This Month's Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Income</span>
              <span className="text-2xl font-bold">₹{monthlyData.totalIncome.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Credit Given</span>
              <span className="text-xl font-semibold text-warning">₹{monthlyData.creditGiven.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Credit Recovered</span>
              <span className="text-xl font-semibold text-success">₹{monthlyData.creditRecovered.toLocaleString('en-IN')}</span>
            </div>
            <div className="pt-3 border-t border-border flex justify-between items-center">
              <span className="font-semibold">Net Profit</span>
              <span className="text-3xl font-bold text-primary">₹{monthlyData.netProfit.toLocaleString('en-IN')}</span>
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
};

export default Reports;
