import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Droplets, Gauge, AlertTriangle } from "lucide-react";

export function WaterManagement() {
  const [tankLevel, setTankLevel] = useState(65);
  const [dailyUsage, setDailyUsage] = useState(234);
  const [pressure, setPressure] = useState(42);
  const [leakDetected, setLeakDetected] = useState(false);

  const getTankStatus = () => {
    if (leakDetected) return "warning";
    if (tankLevel < 20) return "warning";
    return "online";
  };

  return (
    <SmartHomeCard
      title="Water Management"
      value={tankLevel}
      unit="% capacity"
      status={getTankStatus()}
      icon={<Droplets className="w-6 h-6 text-smart-blue" />}
      gradient="card"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-smart-blue" />
              <span className="text-sm font-medium">Daily Usage</span>
            </div>
            <div className="text-lg font-bold">{dailyUsage}L</div>
            <div className="text-xs text-muted-foreground">-12% vs yesterday</div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-smart-green" />
              <span className="text-sm font-medium">Pressure</span>
            </div>
            <div className="text-lg font-bold">{pressure} PSI</div>
            <div className="text-xs text-muted-foreground">Optimal range</div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Tank Level</span>
            <span className="text-sm text-muted-foreground">{tankLevel}%</span>
          </div>
          <Progress value={tankLevel} className="h-3" />
        </div>
        
        {leakDetected && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <div>
              <div className="text-sm font-medium text-warning">Leak Detected</div>
              <div className="text-xs text-muted-foreground">Kitchen sink area - 2.3L/hr</div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLeakDetected(!leakDetected)}
          >
            {leakDetected ? "Fix Leak" : "Test Leak"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTankLevel(100)}
          >
            Refill Tank
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Monthly bill: KSh 2,450 • Water saved: 1,230L this month
        </div>
      </div>
    </SmartHomeCard>
  );
}