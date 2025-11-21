import { useState } from "react";
import { Wallet, Smartphone, UserPlus, TrendingUp } from "lucide-react";
import { SummaryCard } from "@/components/SummaryCard";
import { ActionButton } from "@/components/ActionButton";
import { AddSaleDialog } from "@/components/AddSaleDialog";
import { AddCreditDialog } from "@/components/AddCreditDialog";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  const [cashDialogOpen, setCashDialogOpen] = useState(false);
  const [upiDialogOpen, setUpiDialogOpen] = useState(false);
  const [creditDialogOpen, setCreditDialogOpen] = useState(false);

  // Mock data - in real app, this would come from backend
  const todaySummary = {
    cashSales: 12450,
    upiSales: 8320,
    creditGiven: 3600,
    totalIncome: 24370, // cash + upi + credit recovered
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-primary">KiranaPulse</h1>
          <p className="text-sm text-muted-foreground">Today's Summary</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <SummaryCard
            title="Cash Sales"
            amount={todaySummary.cashSales}
            icon={Wallet}
            variant="cash"
          />
          <SummaryCard
            title="UPI Sales"
            amount={todaySummary.upiSales}
            icon={Smartphone}
            variant="upi"
          />
          <SummaryCard
            title="Credit Given"
            amount={todaySummary.creditGiven}
            icon={UserPlus}
            variant="credit"
          />
          <SummaryCard
            title="Total Income"
            amount={todaySummary.totalIncome}
            icon={TrendingUp}
            variant="total"
          />
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          <ActionButton
            label="Cash Sale"
            icon={Wallet}
            variant="cash"
            onClick={() => setCashDialogOpen(true)}
          />
          <ActionButton
            label="UPI Sale"
            icon={Smartphone}
            variant="upi"
            onClick={() => setUpiDialogOpen(true)}
          />
          <ActionButton
            label="Credit Entry"
            icon={UserPlus}
            variant="credit"
            onClick={() => setCreditDialogOpen(true)}
          />
        </div>
      </main>

      {/* Dialogs */}
      <AddSaleDialog
        open={cashDialogOpen}
        onOpenChange={setCashDialogOpen}
        type="cash"
      />
      <AddSaleDialog
        open={upiDialogOpen}
        onOpenChange={setUpiDialogOpen}
        type="upi"
      />
      <AddCreditDialog
        open={creditDialogOpen}
        onOpenChange={setCreditDialogOpen}
      />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
