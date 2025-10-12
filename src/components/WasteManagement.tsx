import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trash2, Recycle, AlertCircle } from "lucide-react";

export function WasteManagement() {
  const [binLevel, setBinLevel] = useState(73);
  const [recycleLevel, setRecycleLevel] = useState(45);
  const [nextCollection, setNextCollection] = useState("Tomorrow 8:00 AM");

  const getBinStatus = (level: number) => {
    if (level >= 80) return "warning";
    if (level >= 60) return "online";
    return "online";
  };

  const scheduleCollection = () => {
    // Simulate scheduling collection
    setNextCollection("Scheduled for Today 2:00 PM");
  };

  return (
    <SmartHomeCard
      title="Smart Waste Management"
      value={binLevel}
      unit="% full"
      status={getBinStatus(binLevel)}
      icon={<Trash2 className="w-6 h-6 text-smart-green" />}
    >
      <div className="space-y-4">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">General Waste</span>
              <span className="text-sm text-muted-foreground">{binLevel}%</span>
            </div>
            <Progress value={binLevel} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Recyclables</span>
              <span className="text-sm text-muted-foreground">{recycleLevel}%</span>
            </div>
            <Progress value={recycleLevel} className="h-2" />
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Recycle className="w-4 h-4 text-smart-green" />
            <span className="text-sm font-medium">Next Collection</span>
          </div>
          <div className="text-sm">{nextCollection}</div>
        </div>
        
        {binLevel >= 80 && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
            <AlertCircle className="w-4 h-4 text-warning" />
            <span className="text-sm text-warning">Bin almost full - Schedule pickup?</span>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={scheduleCollection}
          >
            Schedule Pickup
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setBinLevel(Math.max(0, binLevel - 10))}
          >
            Empty Bin
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Weekly savings: 12kg recycled • Carbon footprint: -2.3kg CO₂
        </div>
      </div>
    </SmartHomeCard>
  );
}
