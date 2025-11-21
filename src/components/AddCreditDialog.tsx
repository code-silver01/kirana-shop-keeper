import { useState } from "react";
import { UserPlus, Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddCreditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddCreditDialog({ open, onOpenChange }: AddCreditDialogProps) {
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSave = () => {
    if (!customerName || !amount || isNaN(Number(amount))) {
      toast.error("Please enter customer name and valid amount");
      return;
    }

    toast.success(`Credit of ₹${amount} recorded for ${customerName}!`);
    setCustomerName("");
    setAmount("");
    setNote("");
    setDate(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <UserPlus className="h-6 w-6 text-warning" />
            Add Credit Entry
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-5 py-4">
          <div>
            <Label htmlFor="customer" className="text-base font-semibold">
              Customer Name *
            </Label>
            <Input
              id="customer"
              placeholder="Enter name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="mt-2 text-lg h-12"
              autoFocus
            />
          </div>

          <div>
            <Label htmlFor="credit-amount" className="text-base font-semibold">
              Amount *
            </Label>
            <Input
              id="credit-amount"
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-2xl font-bold h-14 mt-2"
            />
          </div>

          <div>
            <Label htmlFor="note" className="text-base font-semibold">
              Item / Note (Optional)
            </Label>
            <Input
              id="note"
              placeholder="e.g., Monthly grocery"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label className="text-base font-semibold">Expected Pay Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-12 mt-2",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button
            onClick={handleSave}
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-warning hover:bg-warning/90"
          >
            Save Credit Entry
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
