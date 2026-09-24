import { Link } from 'react-router-dom';

export default function TrackerWriteup() {
  return (
    <div className="article-page">
      <Link to="/" className="article-back">← Back to portfolio</Link>

      <h1>Livestock Tracking and Monitoring System</h1>
      <p className="article-meta">IoT · Python · Hardware + Software · In progress</p>

      <h2>The Problem</h2>
      <p>
        Small and family-run farms in Ghana often rely on manual methods to monitor livestock
        location and movement. Commercial livestock tracking solutions exist, but many are
        designed for larger operations and involve costs and infrastructure that are less
        accessible to smaller farms.
      </p>
      <p>
        For farmers managing cattle across open grazing areas, losing track of an animal
        creates several risks. Cattle can leave designated grazing areas, enter neighboring
        farms, become difficult to locate, or go missing before the farmer realizes there is
        a problem. Theft and uncontrolled grazing add to these challenges.
      </p>
      <p>
        I wanted to explore whether a low-cost tracking system built with accessible hardware
        and software could give smaller farms real-time visibility into livestock movement.
      </p>

      <h2>What I Built</h2>
      <p>I am building a GPS-based livestock tracking and monitoring system for my family's farm.</p>
      <p>The core idea is simple: track the animal, know where it is, detect when it leaves a defined area.</p>
      <p>
        I built the software dashboard from the ground up. The dashboard visualizes livestock
        locations on a map and provides the foundation for monitoring movement in real time.
      </p>
      <p>
        The hardware tracker is currently under development. I have ordered the components
        for the first prototype and will assemble the device around an ESP32 and NEO-6M GPS
        module.
      </p>

      <h2>How It Works</h2>
      <p>The system has three main parts.</p>
      <p>
        <strong>Tracking device</strong> — the GPS tracker attached to the animal collects its
        coordinates at defined intervals.
      </p>
      <p>
        <strong>Data and monitoring system</strong> — the location data from the tracker is
        transmitted to the software system for processing and monitoring.
      </p>
      <p>
        <strong>Monitoring dashboard</strong> — the dashboard displays the animal's location on
        a map. The farmer defines a geographic boundary, or geofence, around a grazing area or
        other designated zone. When the animal's reported location crosses the geofence, the
        system flags the movement and generates an alert.
      </p>
      <p>
        The goal is to give the farmer an opportunity to respond before an animal remains
        outside the designated area for an extended period.
      </p>

      <h2>Hardware Prototype</h2>
      <p>The first prototype is being built with an ESP32 development board, a NEO-6M GPS module, a breadboard, jumper wires, and a USB cable.</p>
      <p>
        The components will first be assembled and tested as a working prototype. After the
        initial tests, the electronics will be integrated into a wearable enclosure attached
        to a livestock collar or halter around the animal's neck.
      </p>
      <p>
        The first field tests will focus on GPS accuracy, location reporting, connectivity,
        power requirements, and geofence detection.
      </p>

      <h2>Current Status</h2>
      <p>
        Software: functional. Hardware: prototype in development. GPS components: ordered.
        Dashboard: built. Physical tracker: awaiting assembly. Farm field testing: next stage.
      </p>
      <p>
        The immediate next steps are to assemble the GPS tracker, connect it to the existing
        software, build the first wearable prototype, and test it on the farm.
      </p>

      <h2>Where I Want to Take It</h2>
      <p>
        The current system focuses on location tracking and geofence-based monitoring. The
        longer-term goal is to move beyond knowing where an animal is toward understanding its
        movement and behavior, livestock movement analysis, behavioral pattern detection,
        computer vision, sensor data integration, historical movement analysis, health-related
        movement indicators, predictive alerts, and camera and drone-based monitoring.
      </p>
      <p>
        This creates a path from basic GPS tracking toward intelligent livestock monitoring
        using GPS, sensor, and computer vision data.
      </p>

      <h2>Why I Am Building It</h2>
      <p>
        The project started from a practical problem on my family's farm. I wanted to build a
        system I could test in a real agricultural environment rather than develop another
        theoretical project.
      </p>
      <p>
        The current prototype is the starting point. The next stage is to collect real
        livestock movement data, evaluate the limitations of low-cost tracking in a farm
        environment, and explore how AI, computer vision, and sensor data could improve
        livestock monitoring.
      </p>

      <h2>Project Progression</h2>
      <p>
        Hardware prototype → GPS tracking → Software integration → Livestock collar/halter →
        Farm field testing → Real livestock movement data → AI-assisted monitoring
      </p>

      <div className="article-links">
        <a href="https://livestock-dashboard-alpha.vercel.app/" target="_blank" rel="noopener" className="btn-primary">
          View Live Dashboard
        </a>
        <a href="https://github.com/yar1ma/livestock-tracker" target="_blank" rel="noopener" className="btn-secondary">
          View Code
        </a>
      </div>
    </div>
  );
}