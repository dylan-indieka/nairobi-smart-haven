import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Lightbulb, Sun, Moon } from "lucide-react";

export function LightingControl() {
  const [brightness, setBrightness] = useState([75]);
  const [isOn, setIsOn] = useState(true);
  const [mode, setMode] = useState<"bright" | "warm" | "night">("bright");

  const getModeIcon = () => {
    switch (mode) {
      case "bright": return <Sun className="w-4 h-4" />;
      case "warm": return <Lightbulb className="w-4 h-4" />;
      case "night": return <Moon className="w-4 h-4" />;
    }
  };

  return (
    <SmartHomeCard
      title="Smart Lighting"
      value={isOn ? brightness[0] : 0}
      unit="%"
      status={isOn ? "online" : "offline"}
      icon={<Lightbulb className="w-6 h-6 text-smart-blue" />}
      gradient="accent"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Brightness</span>
            <span className="text-sm font-medium">{brightness[0]}%</span>
          </div>
          <Slider
            value={brightness}
            onValueChange={setBrightness}
            max={100}
            min={0}
            step={5}
            className="w-full"
            disabled={!isOn}
          />
        </div>
        
        <div className="flex gap-2">
          {["bright", "warm", "night"].map((lightMode) => (
            <Button
              key={lightMode}
              variant={mode === lightMode ? "default" : "outline"}
              size="sm"
              onClick={() => setMode(lightMode as typeof mode)}
              className="flex-1 gap-2"
              disabled={!isOn}
            >
              {lightMode === mode && getModeIcon()}
              {lightMode.charAt(0).toUpperCase() + lightMode.slice(1)}
            </Button>
          ))}
        </div>
        
        <Button
          variant={isOn ? "destructive" : "default"}
          className="w-full"
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? "Turn Off All Lights" : "Turn On Lights"}
        </Button>
        
        <div className="text-xs text-muted-foreground">
          Energy saved today: 2.3 kWh • 6 rooms connected
        </div>
      </div>
    </SmartHomeCard>
  );
}