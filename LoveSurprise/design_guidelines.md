# Romantic Surprise Application - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by romantic greeting card websites and interactive proposal sites with warm, personal touches and smooth animations.

## Core Experience Flow
1. **Interactive Gift Box** (Landing) → 2. **Love Letter Reveal** → 3. **Playful Proposal** → 4. **Celebration Page**

## Visual Design System

### Color Palette
- **Primary Background**: #AAC4F5 (soft romantic blue)
- **Letter Border**: #000000 (black, 5px solid)
- **Button Backgrounds**: High contrast colors with white text
- **Gift Box Effect**: White backlight glow effect

### Typography
- Romantic, elegant font families throughout
- Personalized messaging: "Dear Bujjamma" and "Yours Lovingly.... Swaroop"
- Emphasis on warmth and intimacy in text presentation

### Layout & Spacing
- Centered layouts across all pages
- Gift box occupies ~50% of screen length for visual impact
- Responsive proportions for desktop and mobile
- Generous spacing to highlight key interactive elements

## Component Library

### 1. Interactive Gift Box (Landing Page)
- **3D Effects**: Bulged, dimensional appearance with depth
- **Backlight**: White glow effect creating anticipation
- **Size**: Approximately 50% of screen length
- **Interaction**: Click/tap reveals love letter with smooth transition

### 2. Animated Love Letter Page
- **Border**: Black 5px border framing the letter
- **Typography**: Elegant romantic fonts
- **Content Structure**: 
  - Greeting: "Dear Bujjamma"
  - Custom personalized message body
  - Signature: "Yours Lovingly.... Swaroop"
- **Animation**: Smooth reveal with fade/unfold effects

### 3. Playful Proposal Page
- **Question**: "Will you be mine?" prominently displayed
- **Yes Button**: Oval-shaped, static, leads to celebration
- **No Button**: Oval-shaped, dynamically moves away from cursor on hover/approach (playful evasion mechanic)
- **Button Styling**: Contrasting colors with white text, oval shapes

### 4. Celebration Page
- **Centerpiece**: Dancing cat animation
- **Animation**: Continuous celebratory movement
- **Atmosphere**: Joyful, triumphant mood

## Animations & Interactions
- **Page Transitions**: Smooth fade and slide effects between all screens
- **Gift Box**: 3D hover states, click interaction with reveal animation
- **Letter**: Gentle entrance animation (unfold/fade-in)
- **Button Evasion**: Smooth repositioning of "No" button when cursor approaches
- **Cat Animation**: Continuous looping dance movement

## Responsive Behavior
- Optimized for both desktop and mobile viewports
- Maintain proportional sizing (gift box remains ~50% screen)
- Touch-friendly interactions for mobile (button evasion adapted for tap)
- Centered layouts scale gracefully across devices

## Technical Notes
- Built with Bootstrap for responsive grid and utilities
- Custom CSS for 3D effects, animations, and romantic styling
- JavaScript for interactive mechanics (button evasion, page transitions, animations)
- All transitions smooth and polished for emotional impact