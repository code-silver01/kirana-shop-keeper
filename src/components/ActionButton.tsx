import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "cash" | "upi" | "credit";
}

export function ActionButton({ label, icon: Icon, onClick, variant = "cash" }: ActionButtonProps) {
  const variantStyles = {
    cash: "bg-success hover:bg-success/90 text-success-foreground shadow-lg shadow-success/20",
    upi: "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20",
    credit: "bg-warning hover:bg-warning/90 text-warning-foreground shadow-lg shadow-warning/20",
  };

  return (
    <Button
      size="lg"
      className={cn(
        "h-16 text-lg font-semibold rounded-2xl transition-all hover:scale-105 flex items-center gap-3",
        variantStyles[variant]
      )}
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
      {label}
    </Button>
  );
}
