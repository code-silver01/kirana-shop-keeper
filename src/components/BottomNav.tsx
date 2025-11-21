import { Home, BookOpen, BarChart3, TrendingDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BookOpen, label: "Khata", path: "/khata" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
    { icon: TrendingDown, label: "Expenses", path: "/expenses" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="max-w-md mx-auto flex items-center justify-around h-20 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all"
            activeClassName="bg-primary/10 text-primary"
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("h-6 w-6", isActive ? "text-primary" : "text-muted-foreground")} />
                <span className={cn("text-xs font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
