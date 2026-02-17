export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: Record<string, string>;
  image?: string;
}

export interface PackageProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image?: string;
}

export const mainPackages: PackageProduct[] = [
  {
    id: "base-aiot",
    name: "Base — AIoT Automation",
    tagline: "AI-Powered Farm Intelligence & Automation for smart farming operations.",
    description: "The Base AIoT Automation package provides essential smart farming capabilities including real-time environmental monitoring, automated climate control, and cloud-based data analytics. Perfect for greenhouses and indoor farms looking to digitize operations.",
    features: [
      "Real-time environmental monitoring (Temp, Humidity, CO₂)",
      "Cloud-based dashboard with alerts",
      "AI-powered anomaly detection",
      "Mobile & web app access",
      "Automated data logging & reporting",
      "Standard sensor suite included",
    ],
  },
  {
    id: "pro-iot",
    name: "PRO — IoT Automation",
    tagline: "Enterprise-grade full-stack automation for large-scale operations.",
    description: "The PRO IoT Automation package delivers comprehensive farm automation with advanced AI-driven climate control, precision irrigation, fertigation management, and multi-zone monitoring. Designed for commercial greenhouses, vertical farms, and large-scale CEA operations.",
    features: [
      "Everything in Base, plus:",
      "Multi-zone climate automation",
      "Precision irrigation scheduling (SOP-based)",
      "EC & pH fertigation control",
      "Energy monitoring & optimization",
      "Soil & water quality analytics",
      "On-premises display integration",
      "Priority support & custom SOP setup",
    ],
  },
];

export const additionalPackages: PackageProduct[] = [
  {
    id: "climate-control",
    name: "Climate Control",
    tagline: "Intelligent climate management for optimal growing conditions.",
    description: "Automate AC units, exhaust fans, humidifiers, foggers, and fan-pad systems with AI-driven control. Maintains ideal temperature and humidity levels to maximize crop health and yield.",
    features: [
      "AI-based automatic ON/OFF control",
      "Supports AC, fans, humidifiers, foggers, fan-pad",
      "Real-time environmental feedback loop",
      "Mobile & web app manual override",
      "Scheduled & threshold-based automation",
    ],
  },
  {
    id: "irrigation",
    name: "Irrigation Package",
    tagline: "Smart water management with automated scheduling and control.",
    description: "Precision irrigation control using SOP-based automation. Controls water motors and solenoid valves to deliver exact water quantities on schedule, preventing over-irrigation and conserving water.",
    features: [
      "SOP-based irrigation scheduling",
      "Water motor & solenoid valve control",
      "Remote ON/OFF via web/mobile app",
      "Water usage tracking & reporting",
      "Prevent overflow & dry-run conditions",
    ],
  },
  {
    id: "fertigation",
    name: "Fertigation Package",
    tagline: "Automated nutrient dosing for precise EC and pH management.",
    description: "Smart fertigation with automatic EC and pH dosing into nutrient tanks. Available in Lite (700ml/min) and Pro (10L/min) variants for small to large-scale operations.",
    features: [
      "Automatic EC & pH dosing",
      "Setpoint-based nutrient control",
      "NutriCore Lite & Pro variants",
      "Real-time nutrient monitoring",
      "App-based manual override",
    ],
  },
];

export const modularProducts: Product[] = [
  {
    id: "air-intel",
    name: "AIR-INTEL",
    tagline: "IoT environmental monitor for temperature, humidity & CO₂.",
    description: "AIR-Intel is an IoT-enabled environmental monitoring device designed to measure temperature, relative humidity, and CO₂ levels with high accuracy. Ideal for greenhouses, polyhouses, indoor farms, vertical farms, and cold storage.",
    specs: {
      "Measured Parameters": "Temperature, Humidity, CO₂",
      "Temperature Range": "-40°C to +85°C",
      "Humidity Range": "0 – 100% RH",
      "CO₂ Range": "0 – 5,000 ppm",
      "Data Transmission": "Wi-Fi",
      "Power Supply": "12V DC Adapter",
      "Mounting": "Wall Mount",
    },
  },
  {
    id: "luma-sense",
    name: "LUMA-SENSE",
    tagline: "High-precision ambient light sensor for smart lighting control.",
    description: "LumaSense is a high-precision ambient light measurement device that monitors illumination levels (Lux) in real time. Uses 16-bit digital detection that mimics human eye response.",
    specs: {
      "Measured Parameters": "Ambient Light (Lux)",
      "Lux Range": "0.01 – 120,000 Lux",
      "Resolution": "16-bit Digital",
      "Accuracy": "±10% (typical)",
      "Data Transmission": "Wi-Fi",
      "Power Supply": "12V DC Adapter",
      "Mounting": "Wall Mount",
    },
  },
  {
    id: "aqua-sense",
    name: "AQUA SENSE",
    tagline: "Smart water quality monitor for pH, EC & temperature.",
    description: "AquaSense measures pH, EC, and water temperature in real time. Provides accurate data for nutrient tanks, reservoirs, and hydroponic systems via IoT connectivity.",
    specs: {
      "Measured Parameters": "pH, EC, Water Temperature",
      "pH Range": "0 – 14 pH",
      "EC Range": "0 – 20 mS/cm",
      "Water Temp Range": "-10°C to +60°C",
      "Data Transmission": "Wi-Fi",
      "Protection": "IP65 / IP67",
      "Power Supply": "12V DC Adapter",
    },
  },
  {
    id: "hydro-level",
    name: "HYDRO LEVEL",
    tagline: "Ultrasonic non-contact water level monitoring device.",
    description: "HydroLevel uses non-contact ultrasonic measurement for reliable, maintenance-free water level monitoring. Ideal for overhead/underground tanks and smart water management.",
    specs: {
      "Measurement Range": "3 – 450 cm",
      "Method": "Non-contact Ultrasonic",
      "Accuracy": "±1 cm",
      "Data Transmission": "Wi-Fi",
      "Enclosure": "Waterproof / Industrial Grade",
      "Power Supply": "12V DC Adapter",
      "Mounting": "Wall Mount",
    },
  },
  {
    id: "power-trace",
    name: "POWER TRACE",
    tagline: "Smart energy monitor for voltage, current, power & consumption.",
    description: "PowerTrace measures AC electrical parameters including voltage, current, power, energy consumption, frequency, and power factor in real time for optimized energy usage.",
    specs: {
      "Voltage Range": "80 – 260V AC",
      "Current Range": "0 – 100A AC",
      "Parameters": "V, I, W, kWh, Hz, PF",
      "Measurement Type": "Single-Phase AC",
      "Data Transmission": "Wi-Fi",
      "Power Supply": "12V DC Adapter",
      "Protection": "Waterproof / Industrial",
    },
  },
  {
    id: "luma-control",
    name: "LUMA CONTROL",
    tagline: "Smart lighting controller with scheduled & remote operation.",
    description: "LUMA CONTROL automates lighting systems via scheduled timing and remote commands. Available in 8-channel (8A) and 4-channel (20A) relay variants.",
    specs: {
      "Function": "Smart Lighting Control",
      "Control Mode": "Scheduled & Remote",
      "Variants": "8-Ch (8A) / 4-Ch (20A)",
      "Dashboard": "Web & Mobile App",
      "Data Transmission": "Wi-Fi",
      "Power Supply": "12V DC Adapter",
      "Enclosure": "Waterproof / Industrial",
    },
  },
  {
    id: "climate-core",
    name: "CLIMATE CORE",
    tagline: "Smart climate automation for AC, fans, humidifiers & foggers.",
    description: "Climate Core controls AC units, fans, humidifiers, foggers, and fan-pad systems with AI-driven or manual control for maintaining optimal environmental conditions.",
    specs: {
      "Controlled Equipment": "AC, Fan, Humidifier, Fogger, Fan Pad",
      "Control Mode": "AI-Based / Manual App",
      "Operation": "ON / OFF Control",
      "Input Source": "Environmental Sensors / AI",
      "Dashboard": "Web & Mobile App",
      "Power Supply": "12V DC Adapter",
      "Environment": "Indoor / Semi-Outdoor",
    },
  },
  {
    id: "flow-logic",
    name: "FLOW LOGIC",
    tagline: "SOP-based smart irrigation control for motors & valves.",
    description: "Flow Logic ensures timely irrigation by automatically controlling water motors and solenoid valves based on SOPs or manual commands for precise water management.",
    specs: {
      "Controlled Devices": "Water Motor, Solenoid Valves",
      "Control Mode": "SOP-Based / Manual",
      "Operation": "ON / OFF Control",
      "Scheduling": "Yes",
      "Dashboard": "Web & Mobile App",
      "Power Supply": "12V DC Adapter",
      "Protection": "Waterproof / Industrial",
    },
  },
  {
    id: "nutri-core",
    name: "NUTRI CORE",
    tagline: "Automated EC & pH dosing for precision fertigation.",
    description: "NutriCore manages EC and pH dosing automatically. Lite variant (700ml/min EC, 500ml/min pH) for small systems, Pro variant (up to 10L/min) for large-scale operations.",
    specs: {
      "Function": "EC & pH Dosing",
      "Lite EC Flow": "700 ml/min",
      "Pro Flow Rate": "Up to 10 L/min",
      "Control Mode": "Setpoint / Manual",
      "Dashboard": "Web & Mobile App",
      "Power Supply": "12V DC Adapter",
      "Mounting": "Floor / Panel Mount",
    },
  },
  {
    id: "soil-intel",
    name: "SOIL INTEL",
    tagline: "Multi-parameter soil health monitoring sensor.",
    description: "Soil Intel measures soil temperature, moisture, pH, EC, and NPK levels in real time for data-driven irrigation and fertilization decisions.",
    specs: {
      "Parameters": "Temp, Moisture, pH, EC, NPK",
      "Soil Temp Range": "-20°C to +60°C",
      "Moisture Range": "0–100%",
      "pH Range": "3 – 10 pH",
      "EC Range": "0 – 20 mS/cm",
      "Protection": "IP65",
      "Method": "In-Soil Probe",
    },
  },
  {
    id: "on-premises-display",
    name: "ON-PREMISES DISPLAY",
    tagline: "Local OLED display for real-time sensor data at the site.",
    description: "On-Premises Display shows real-time values from all connected sensors locally. 1.3-inch OLED with 128×64 resolution for quick on-ground monitoring without internet.",
    specs: {
      "Display Type": "OLED",
      "Display Size": "1.3 Inch",
      "Resolution": "128 × 64 Pixels",
      "Data": "All Connected Sensor Values",
      "Refresh": "Real-Time",
      "Power Supply": "12V DC",
      "Mounting": "Panel / Wall Mount",
    },
  },
];
