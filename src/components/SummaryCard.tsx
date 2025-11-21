import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  variant?: "cash" | "upi" | "credit" | "total";
}

export function SummaryCard({ title, amount, icon: Icon, variant = "cash" }: SummaryCardProps) {
  const variantStyles = {
    cash: "bg-success/10 border-success/20",
    upi: "bg-secondary/10 border-secondary/20",
    credit: "bg-warning/10 border-warning/20",
    total: "bg-primary/10 border-primary/20",
  };

  const iconStyles = {
    cash: "text-success",
    upi: "text-secondary",
    credit: "text-warning",
    total: "text-primary",
  };

  return (
    <Card className={cn("border-2 shadow-lg transition-all hover:scale-105", variantStyles[variant])}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <Icon className={cn("h-6 w-6", iconStyles[variant])} />
        </div>
        <p className="text-3xl font-bold tracking-tight">
          ₹{amount.toLocaleString('en-IN')}
        </p>
      </CardContent>
    </Card>
  );
}
