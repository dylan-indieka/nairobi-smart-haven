import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Thermometer, Minus, Plus } from "lucide-react";

export function TemperatureControl() {
  const [temperature, setTemperature] = useState([24]);
  const [isACOn, setIsACOn] = useState(true);

  const handleTempChange = (value: number[]) => {
    setTemperature(value);
  };

  return (
    <SmartHomeCard
      title="Temperature Control"
      value={temperature[0]}
      unit="°C"
      status={isACOn ? "online" : "offline"}
      icon={<Thermometer className="w-6 h-6 text-smart-orange" />}
      gradient="primary"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleTempChange([Math.max(16, temperature[0] - 1)])}
            className="w-10 h-10 rounded-full"
          >
            <Minus className="w-4 h-4" />
          </Button>
          
          <div className="flex-1">
            <Slider
              value={temperature}
              onValueChange={handleTempChange}
              max={30}
              min={16}
              step={1}
              className="w-full"
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleTempChange([Math.min(30, temperature[0] + 1)])}
            className="w-10 h-10 rounded-full"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">AC System</span>
          <Button
            variant={isACOn ? "default" : "secondary"}
            size="sm"
            onClick={() => setIsACOn(!isACOn)}
          >
            {isACOn ? "Turn Off" : "Turn On"}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Optimal range: 22-26°C • Current: {isACOn ? "Cooling" : "Off"}
        </div>
      </div>
    </SmartHomeCard>
  );
}