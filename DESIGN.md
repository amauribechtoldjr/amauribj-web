# Terminal Sovereign: Design System Document

### 1. Overview & Creative North Star

**Creative North Star: The Sovereign Terminal**
Terminal Sovereign is a high-end editorial system that blends the raw, functional aesthetic of early command-line interfaces with modern, luxury typographic discipline. It rejects the "softness" of contemporary web design in favor of **Rigid Geometry** and **Tactile Tech**. The system is built on a foundation of "Brutalism refined"—where 90-degree angles and high-contrast orange-on-black accents convey authority, speed, and archival permanence.

Layouts should feel like a high-density heads-up display (HUD), utilizing intentional asymmetry, vertical timeline axes, and scanline overlays to create a "live" system atmosphere.

### 2. Colors

The palette is dominated by a deep obsidian core (#131313) punctuated by a high-energy "Ignition Orange" (#FF4500).

- **Primary Role:** Ignition Orange is used exclusively for interactive elements, status indicators, and critical hierarchy markers.
- **Surface Hierarchy:** Depth is achieved through tonal nesting. `surface` provides the base, while `surface-container-low` (#1B1B1B) and `surface-container-highest` (#353535) create tactical compartmentalization without the need for traditional shadows.
- **The "No-Line" Rule:** Sectioning is achieved through color shifts or hairline 1px borders of 10-30% opacity orange. Do not use standard grey dividers.
- **The "Glass & Gradient" Rule:** While the system is rigid, a global "Scanline Overlay" (linear gradients) and subtle 5% opacity "Ignition" glows provide a sense of illuminated hardware.

### 3. Typography

Typography is the system's primary expressive tool. It uses a high-contrast scale where display text is aggressively uppercase and body text is surgically legible.

**Scale and Rhythm (Extracted):**

- **Display/Headline (Space Grotesk):** 1.875rem (30px) and 1.25rem (20px). Always uppercase, tight tracking, leading-none for maximum impact.
- **Body (Inter):** 0.875rem (14px). Used for descriptions with 70% opacity to maintain focus on the hierarchy.
- **Label/Mono (JetBrains Mono):** 10px, 9px, and 8px. These are the "System Metadata" fonts. Used for timestamps, tags, and technical specs.

The contrast between the wide, architectural _Space Grotesk_ and the utilitarian _JetBrains Mono_ creates a "Log-Book" editorial feel.

### 4. Elevation & Depth

In Terminal Sovereign, elevation is a matter of **Layering**, not floating.

- **The Layering Principle:** Components do not float; they are docked. Use `surface-container-low` for card backgrounds and `surface-container-highest` for headers within those cards.
- **Ambient Shadows:** The system uses "Offset Block Shadows." Instead of diffused blurs, use `4px 4px 0px 0px rgba(255, 69, 0, 0.05)` to create a hard-edged, technical depth.
- **The "Ghost Border" Fallback:** Use Ignition Orange at 20% opacity for container outlines.
- **Atmospherics:** A fixed background scanline effect and a 4px vertical grid background represent the digital "canvas."

### 5. Components

- **Buttons:** Sharp 0px corners. Primary buttons use a solid Ignition Orange background with a 1px inner inset. Ghost buttons use mono labels with `>` prefix.
- **Timeline Logs:** A vertical 1px axis (#FF4500/30) with 8x8px square nodes. Active nodes are solid; archived nodes are outlined.
- **Metadata Chips:** Small, uppercase JetBrains Mono text inside a 1px border with a 10% orange fill.
- **Navigation:** Fixed top and bottom bars. The bottom navigation uses a grid-style layout with 1px dividers and high-contrast active states (Ignition Orange).
- **Terminal Metrics:** Horizontal bar charts using fragmented blocks (e.g., three blocks of different widths) to represent data loading or system status.

### 6. Do's and Don'ts

**Do:**

- Use 0px border radius for everything unless it's a specific system-defined pill (like a status dot).
- Use `>` characters to denote list items or interactivity.
- Embrace uppercase for all headings and labels.
- Utilize "metadata" (fake or real system stats) to fill whitespace in an editorial fashion.

**Don't:**

- Use rounded corners (standard `rounded-md` is prohibited).
- Use soft, multi-colored gradients.
- Use standard blue for links; all interactive highlights must be Ignition Orange.
- Over-blur shadows; keep depth indicators sharp and geometric.
