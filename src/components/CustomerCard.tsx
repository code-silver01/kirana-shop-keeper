import { User, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomerCardProps {
  name: string;
  amount: number;
  dueDate: string;
  status: "upcoming" | "due-soon" | "overdue";
  onMarkPaid: () => void;
}

export function CustomerCard({ name, amount, dueDate, status, onMarkPaid }: CustomerCardProps) {
  const statusStyles = {
    upcoming: "border-success/50 bg-success/5",
    "due-soon": "border-warning/50 bg-warning/5",
    overdue: "border-destructive/50 bg-destructive/5",
  };

  const statusBadgeStyles = {
    upcoming: "bg-success/20 text-success",
    "due-soon": "bg-warning/20 text-warning-foreground",
    overdue: "bg-destructive/20 text-destructive",
  };

  const statusLabels = {
    upcoming: "Upcoming",
    "due-soon": "Due Soon",
    overdue: "Overdue",
  };

  return (
    <Card className={cn("border-2 shadow-md", statusStyles[status])}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-lg">{name}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{dueDate}</span>
              </div>
            </div>
          </div>
          <span className={cn("px-2 py-1 rounded-full text-xs font-medium", statusBadgeStyles[status])}>
            {statusLabels[status]}
          </span>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Amount Due</p>
            <p className="text-2xl font-bold text-foreground">
              ₹{amount.toLocaleString('en-IN')}
            </p>
          </div>
          <Button
            onClick={onMarkPaid}
            variant="outline"
            size="sm"
            className="font-semibold"
          >
            Mark Paid
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
