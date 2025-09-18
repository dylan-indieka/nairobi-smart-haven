import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Sun, Battery } from "lucide-react";

export function EnergyMonitoring() {
  const [currentUsage, setCurrentUsage] = useState(2.4);
  const [solarGeneration, setSolarGeneration] = useState(1.8);
  const [batteryLevel, setBatteryLevel] = useState(76);
  const [monthlyBudget] = useState(8500); // KSh
  const [monthlySpent] = useState(3200);

  const budgetUsed = (monthlySpent / monthlyBudget) * 100;

  return (
    <SmartHomeCard
      title="Energy Monitoring"
      value={currentUsage}
      unit="kW"
      status="online"
      icon={<Zap className="w-6 h-6 text-warning" />}
      gradient="primary"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">Solar</span>
            </div>
            <div className="text-lg font-bold">{solarGeneration} kW</div>
            <div className="text-xs text-muted-foreground">Generating</div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4 text-smart-green" />
              <span className="text-sm font-medium">Battery</span>
            </div>
            <div className="text-lg font-bold">{batteryLevel}%</div>
            <div className="text-xs text-muted-foreground">Charged</div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Monthly Budget</span>
            <span className="text-sm text-muted-foreground">
              KSh {monthlySpent.toLocaleString()} / {monthlyBudget.toLocaleString()}
            </span>
          </div>
          <Progress value={budgetUsed} className="h-2" />
        </div>
        
        <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
          <div className="text-sm font-medium mb-1">Peak Hours (6-10 PM)</div>
          <div className="text-xs text-muted-foreground">
            Using {(currentUsage * 0.8).toFixed(1)} kW • Rate: KSh 25/kWh
          </div>
          <div className="text-xs text-smart-green">
            Solar offsetting 75% of usage
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentUsage(Math.max(0.5, currentUsage - 0.2))}
          >
            Energy Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setBatteryLevel(Math.min(100, batteryLevel + 10))}
          >
            Charge Battery
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Carbon saved: 45kg CO₂ this month • Grid independence: 68%
        </div>
      </div>
    </SmartHomeCard>
  );
}