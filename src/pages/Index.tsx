import { TemperatureControl } from "@/components/TemperatureControl";
import { LightingControl } from "@/components/LightingControl";
import { SecuritySystem } from "@/components/SecuritySystem";
import { WasteManagement } from "@/components/WasteManagement";
import { WaterManagement } from "@/components/WaterManagement";
import { EnergyMonitoring } from "@/components/EnergyMonitoring";
import { AirQualityMonitor } from "@/components/AirQualityMonitor";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Settings, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Smart Home Nairobi</h1>
                <p className="text-sm text-muted-foreground">Apartment Complex A-12</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-smart-green text-white">
                All Systems Online
              </Badge>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/settings">
                  <Settings className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Sarah</h2>
          <p className="text-muted-foreground">
            Your smart apartment systems are running smoothly. Here's your daily overview.
          </p>
        </div>

        {/* Smart Home Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TemperatureControl />
          <LightingControl />
          <SecuritySystem />
          <WasteManagement />
          <WaterManagement />
          <EnergyMonitoring />
          <AirQualityMonitor />
          
          {/* Quick Stats Card */}
          <div className="bg-gradient-card rounded-2xl p-6 border-0 shadow-smart">
            <h3 className="font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Monthly Savings</span>
                <span className="font-medium text-smart-green">KSh 4,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Energy Efficiency</span>
                <span className="font-medium">89%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Carbon Footprint</span>
                <span className="font-medium text-smart-green">-45 kg CO₂</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Connected Devices</span>
                <span className="font-medium">24/25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            Smart Home IoT System for Nairobi Apartment Complexes
          </p>
          <p className="text-xs mt-2">
            Optimized for energy efficiency, security, and sustainable living
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
