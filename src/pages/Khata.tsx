import { useState } from "react";
import { Plus } from "lucide-react";
import { CustomerCard } from "@/components/CustomerCard";
import { AddCreditDialog } from "@/components/AddCreditDialog";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Khata = () => {
  const [creditDialogOpen, setCreditDialogOpen] = useState(false);

  // Mock data
  const customers = [
    { id: 1, name: "Rajesh Kumar", amount: 2500, dueDate: "25 Nov", status: "upcoming" as const },
    { id: 2, name: "Priya Sharma", amount: 1200, dueDate: "23 Nov", status: "due-soon" as const },
    { id: 3, name: "Amit Patel", amount: 4500, dueDate: "18 Nov", status: "overdue" as const },
    { id: 4, name: "Sunita Devi", amount: 800, dueDate: "28 Nov", status: "upcoming" as const },
    { id: 5, name: "Vikram Singh", amount: 3200, dueDate: "20 Nov", status: "overdue" as const },
  ];

  const handleMarkPaid = (name: string) => {
    toast.success(`Payment received from ${name}!`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-primary">Customer Credit Khata</h1>
          <p className="text-sm text-muted-foreground">Track pending payments</p>
        </div>
      </header>

      {/* Customer List */}
      <main className="max-w-md mx-auto px-4 py-6 space-y-4">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            name={customer.name}
            amount={customer.amount}
            dueDate={customer.dueDate}
            status={customer.status}
            onMarkPaid={() => handleMarkPaid(customer.name)}
          />
        ))}
      </main>

      {/* FAB Button */}
      <Button
        size="lg"
        className="fixed bottom-24 right-4 h-16 w-16 rounded-full bg-warning hover:bg-warning/90 shadow-2xl shadow-warning/50"
        onClick={() => setCreditDialogOpen(true)}
      >
        <Plus className="h-7 w-7" />
      </Button>

      <AddCreditDialog
        open={creditDialogOpen}
        onOpenChange={setCreditDialogOpen}
      />

      <BottomNav />
    </div>
  );
};

export default Khata;
