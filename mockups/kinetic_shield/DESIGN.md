---
name: Kinetic Shield
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#ebbbb4'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#b18780'
  outline-variant: '#603e39'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690100'
  primary-container: '#ff5540'
  on-primary-container: '#5c0000'
  inverse-primary: '#c00100'
  secondary: '#c6c6cc'
  on-secondary: '#2f3035'
  secondary-container: '#47494e'
  on-secondary-container: '#b7b8be'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#00a0aa'
  on-tertiary-container: '#002f33'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930100'
  secondary-fixed: '#e2e2e8'
  secondary-fixed-dim: '#c6c6cc'
  on-secondary-fixed: '#1a1c20'
  on-secondary-fixed-variant: '#45474b'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: '0'
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is engineered for the high-stakes environment of cybersecurity and threat intelligence. The brand personality is aggressive, precise, and authoritative. It targets security analysts and system architects who require immediate visual hierarchy and clarity under pressure.

The design style is a fusion of **Tactile Modernism** and **High-Contrast Tech**. It utilizes a "dark-mode first" philosophy to reduce eye strain during long monitoring sessions while using high-intensity color accents to signal critical data points. The aesthetic evokes a sense of a digital command center—utilitarian, responsive, and uncompromisingly sharp.

## Colors

The palette is anchored by an uncompromising, high-intensity **Pure Red (#FF0000)**. This primary color is reserved for critical actions, active threats, and primary navigation states to ensure maximum psychological impact. 

The background architecture uses a deep, layered obsidian neutral to provide a high-contrast foundation for the vibrant primary and tertiary (Cyan) accents. Cyan is used for "safe" data or systemic information, creating a clear chromatic distinction between the infrastructure and the threats. Interactive elements should maintain a high contrast ratio (minimum 7:1) against the dark surfaces to ensure legibility in high-stress scenarios.

## Typography

The typography system prioritizes technical precision and rapid scanning. **Geist** is the primary typeface, chosen for its ultra-clean, Swiss-inspired geometry and excellent legibility in dark interfaces. 

For data-heavy displays, logs, and metadata, **JetBrains Mono** provides the necessary monospaced structure to align technical information perfectly. All labels use uppercase styling with slight tracking increases to emphasize the "instrument panel" aesthetic. Headlines are tight and heavy, creating a bold visual anchor for page sections.

## Layout & Spacing

The design system utilizes a **Fluid Grid** based on a 4px baseline shift. Layouts are strictly aligned to a 12-column grid on desktop and a 4-column grid on mobile. 

The rhythm is tight and dense, maximizing information density without sacrificing clarity. Space is used as a functional separator rather than a decorative one. Margins are consistent across the horizontal axis, while vertical spacing scales based on the relationship between components (e.g., 8px between related inputs, 24px between distinct card modules).

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **High-Contrast Outlines**. In this dark-themed environment, traditional shadows are replaced by subtle interior glows and border highlights to simulate an illuminated hardware interface.

1.  **Level 0 (Base):** The primary background color.
2.  **Level 1 (Cards/Panels):** A slightly lighter neutral with a 1px solid outline (#25272A).
3.  **Level 2 (Modals/Popovers):** Higher surface contrast with a subtle primary-colored outer glow (0px 0px 12px rgba(255, 0, 0, 0.2)) to signal high-priority focus.

Avoid heavy blurs; maintain sharp edges to preserve the "technical tool" feeling.

## Shapes

The shape language is **Sharp (0px)**. Every element—from buttons and input fields to cards and notification toasts—features hard 90-degree corners. This evokes a sense of structural integrity, precision, and military-grade software. No radii should be applied to any container or interactive component unless it is a circular status indicator or avatar.

## Components

### Buttons
Primary buttons are solid #FF0000 with white text, utilizing a bold, uppercase label. Hover states shift the background to a deeper crimson with a 1px inner border. Secondary buttons use a ghost style: a 1px primary-colored border with no fill.

### Input Fields
Fields feature a dark background with a subtle bottom-only border in the idle state. Upon focus, the border becomes a full 1px primary red outline. Error states utilize a pulsing animation of the primary red border.

### Chips & Tags
Used for status indicators (e.g., "Critical," "Active," "Resolved"). "Critical" tags must use the primary red background with white text. All tags are rectangular with no corner radius.

### Cards
Cards are the primary container for data modules. They feature a 1px border (#25272A) and a "header" area distinguished by a slightly darker background.

### Threat Indicators
A specialized component for this system, these are small, high-visibility square blocks that flash or pulse in primary red when a real-time threat is detected.