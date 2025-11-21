import { useState } from "react";
import { Banknote, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AddSaleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "cash" | "upi";
}

export function AddSaleDialog({ open, onOpenChange, type }: AddSaleDialogProps) {
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState("");

  const handleSave = () => {
    if (!amount || isNaN(Number(amount))) {
      toast.error("Please enter a valid amount");
      return;
    }

    toast.success(`${type === "cash" ? "Cash" : "UPI"} sale of ₹${amount} recorded!`);
    setAmount("");
    setItem("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            {type === "cash" ? (
              <Banknote className="h-6 w-6 text-success" />
            ) : (
              <Smartphone className="h-6 w-6 text-secondary" />
            )}
            Add {type === "cash" ? "Cash" : "UPI"} Sale
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-5 py-4">
          <div>
            <Label htmlFor="amount" className="text-base font-semibold">
              Amount *
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-2xl font-bold h-14 mt-2"
              autoFocus
            />
          </div>

          <div>
            <Label htmlFor="item" className="text-base font-semibold">
              Item Name (Optional)
            </Label>
            <Input
              id="item"
              placeholder="e.g., Rice, Sugar, Oil"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="mt-2"
            />
          </div>

          <Button
            onClick={handleSave}
            size="lg"
            className={`w-full h-14 text-lg font-semibold ${
              type === "cash"
                ? "bg-success hover:bg-success/90"
                : "bg-secondary hover:bg-secondary/90"
            }`}
          >
            Save Sale
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
