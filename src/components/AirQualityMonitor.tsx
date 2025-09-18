import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wind, Leaf, AlertTriangle } from "lucide-react";

export function AirQualityMonitor() {
  const [aqi, setAqi] = useState(45); // Air Quality Index
  const [humidity, setHumidity] = useState(62);
  const [co2Level, setCo2Level] = useState(420);
  const [purifierOn, setPurifierOn] = useState(false);

  const getAQIStatus = () => {
    if (aqi > 100) return "warning";
    if (aqi > 50) return "online";
    return "online";
  };

  const getAQIDescription = () => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    return "Unhealthy";
  };

  const getAQIColor = () => {
    if (aqi <= 50) return "text-smart-green";
    if (aqi <= 100) return "text-warning";
    return "text-destructive";
  };

  return (
    <SmartHomeCard
      title="Air Quality Monitor"
      value={aqi}
      unit="AQI"
      status={getAQIStatus()}
      icon={<Wind className="w-6 h-6 text-smart-blue" />}
      gradient="accent"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className={`text-lg font-bold ${getAQIColor()}`}>
            {getAQIDescription()}
          </span>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">PM2.5</div>
            <div className="text-sm font-medium">{(aqi * 0.5).toFixed(1)} μg/m³</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-smart-green" />
              <span className="text-sm font-medium">Humidity</span>
            </div>
            <div className="text-lg font-bold">{humidity}%</div>
            <div className="text-xs text-muted-foreground">Optimal</div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-smart-blue" />
              <span className="text-sm font-medium">CO₂</span>
            </div>
            <div className="text-lg font-bold">{co2Level}</div>
            <div className="text-xs text-muted-foreground">ppm</div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Air Quality Index</span>
            <span className="text-sm text-muted-foreground">{aqi}/500</span>
          </div>
          <Progress value={(aqi / 500) * 100} className="h-2" />
        </div>
        
        {aqi > 75 && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <div>
              <div className="text-sm font-medium text-warning">Poor Air Quality</div>
              <div className="text-xs text-muted-foreground">Consider using air purifier</div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-sm">Air Purifier</span>
          <Button
            variant={purifierOn ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setPurifierOn(!purifierOn);
              if (!purifierOn) {
                // Simulate air quality improvement
                setTimeout(() => setAqi(Math.max(25, aqi - 15)), 1000);
              }
            }}
          >
            {purifierOn ? "Running" : "Turn On"}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Nairobi average: 65 AQI • Best time to ventilate: 6-8 AM
        </div>
      </div>
    </SmartHomeCard>
  );
}