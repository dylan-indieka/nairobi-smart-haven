import { useState } from "react";
import { SmartHomeCard } from "./SmartHomeCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Camera, Lock, AlertTriangle } from "lucide-react";

export function SecuritySystem() {
  const [isArmed, setIsArmed] = useState(true);
  const [cameras, setCameras] = useState(3);
  const [locks, setLocks] = useState({ front: true, back: true });

  const toggleLock = (door: keyof typeof locks) => {
    setLocks(prev => ({ ...prev, [door]: !prev[door] }));
  };

  return (
    <SmartHomeCard
      title="Security System"
      value={isArmed ? "ARMED" : "DISARMED"}
      status={isArmed ? "online" : "warning"}
      icon={<Shield className="w-6 h-6 text-smart-purple" />}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-smart-blue" />
              <span className="text-sm font-medium">Cameras</span>
            </div>
            <div className="text-lg font-bold">{cameras}/4</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-smart-green" />
              <span className="text-sm font-medium">Smart Locks</span>
            </div>
            <div className="text-lg font-bold">
              {Object.values(locks).filter(Boolean).length}/2
            </div>
            <div className="text-xs text-muted-foreground">Locked</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Front Door</span>
            <Button
              variant={locks.front ? "default" : "destructive"}
              size="sm"
              onClick={() => toggleLock("front")}
            >
              {locks.front ? "Locked" : "Unlocked"}
            </Button>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Back Door</span>
            <Button
              variant={locks.back ? "default" : "destructive"}
              size="sm"
              onClick={() => toggleLock("back")}
            >
              {locks.back ? "Locked" : "Unlocked"}
            </Button>
          </div>
        </div>
        
        <Button
          variant={isArmed ? "destructive" : "default"}
          className="w-full"
          onClick={() => setIsArmed(!isArmed)}
        >
          {isArmed ? "Disarm System" : "Arm System"}
        </Button>
        
        {!isArmed && (
          <div className="flex items-center gap-2 text-warning text-sm">
            <AlertTriangle className="w-4 h-4" />
            Security system is disarmed
          </div>
        )}
      </div>
    </SmartHomeCard>
  );
}