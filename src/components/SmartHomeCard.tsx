import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmartHomeCardProps {
  title: string;
  value: string | number;
  unit?: string;
  status: "online" | "offline" | "warning";
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  gradient?: "primary" | "accent" | "card";
}

export function SmartHomeCard({
  title,
  value,
  unit,
  status,
  icon,
  className,
  children,
  gradient = "card"
}: SmartHomeCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "online": return "bg-smart-green";
      case "warning": return "bg-warning";
      case "offline": return "bg-destructive";
    }
  };

  const getGradientClass = () => {
    switch (gradient) {
      case "primary": return "bg-gradient-primary";
      case "accent": return "bg-gradient-accent";
      case "card": return "bg-gradient-card";
    }
  };

  return (
    <Card className={cn(
      "relative overflow-hidden border-0 shadow-smart transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in",
      getGradientClass(),
      className
    )}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <Badge variant="secondary" className={cn("text-xs", getStatusColor())}>
                {status}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-foreground">{value}</span>
          {unit && <span className="text-muted-foreground text-sm">{unit}</span>}
        </div>
        
        {children}
      </div>
    </Card>
  );
}