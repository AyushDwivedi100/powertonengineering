# 🤖 AI AGENT MANDATORY RULES - POWERTON ENGINEERING PROJECT

## ⚠️ CRITICAL: READ BEFORE ANY CHANGES

**Every AI agent working on this project MUST follow these rules. No exceptions.**

---

## 📋 MANDATORY CHECKLIST - BEFORE ANY WORK

- [ ] Read and understand all rules in this file
- [ ] Review `replit.md` for project context and preferences
- [ ] Check current image ID ranges before adding images
- [ ] Verify color scheme compliance in all components
- [ ] Test UI consistency against established patterns

---

## 🎯 RULE #1: IMAGE MANAGEMENT SYSTEM

### **ABSOLUTE REQUIREMENT**: Every image MUST have a unique ID

**Format**: `alt="ID-[unique-id]: [descriptive text]"`

**Current ID Ranges** (UPDATE when used):
- ID-001-002: Logo images ✓ ASSIGNED
- ID-003-005: About section images ✓ ASSIGNED
- ID-050-059: Project and product showcase images ✓ ASSIGNED
- ID-080-089: Gallery images ✓ ASSIGNED
- ID-200-299: Portfolio images (reserved)
- ID-300-399: Service images (reserved)
- ID-400-499: Resource whitepapers (reserved)
- ID-500-599: Case studies (reserved)
- ID-600-699: Webinars (reserved)
- ID-700-799: Industry insights (reserved)
- ID-800-809: Background images for sections (reserved)
- ID-810-813: Hero and contact background images ✓ ASSIGNED
- ID-820-829: Client logo carousel images ✓ ASSIGNED
- **NEXT AVAILABLE**: ID-830+

**PROCESS**:
1. Find next available ID range
2. Assign unique ID to image
3. Update this documentation with new range
4. Use official Powerton logo URL: `https://powertonengineering.in/assets/img/logo-new.jpg`

---

## 🎨 RULE #2: COLOR SCHEME ENFORCEMENT

### **BRAND COLORS** (NEVER change these):
- **Primary**: `hsl(215, 89%, 33%)` - Blue for headers, buttons, brand
- **Secondary**: `hsl(20, 91%, 48%)` - Orange for accents, CTAs

### **REQUIRED CSS CLASSES** (NEVER use hardcoded colors):
```css
/* Use THESE classes only */
bg-primary, text-primary, border-primary
bg-secondary, text-secondary, border-secondary
bg-background, bg-muted, bg-card
text-foreground, text-muted-foreground
```

### **FORBIDDEN** (Will break design):
```css
/* NEVER use these */
bg-blue-500, text-gray-600, bg-red-400
#3B82F6, rgb(59, 130, 246)
Any hardcoded color values
```

---

## 🎭 RULE #3: UI CONSISTENCY STANDARDS

### **Typography System**:
```css
/* Page Titles */
text-4xl md:text-5xl lg:text-6xl font-bold text-foreground

/* Section Titles */  
text-3xl md:text-4xl font-bold text-foreground

/* Subsection Titles */
text-xl md:text-2xl font-semibold text-foreground

/* Body Text */
text-base md:text-lg text-muted-foreground

/* Small Text */
text-sm text-muted-foreground
```

### **Spacing System**:
```css
/* Section Padding */
py-12 md:py-16 lg:py-20

/* Container Padding */
px-4 md:px-6 lg:px-8

/* Card Padding */
p-6 md:p-8

/* Element Gaps */
gap-4 md:gap-6 lg:gap-8
```

### **Grid Layouts**:
```css
/* Card Grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

/* Feature Grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8

/* Two Column */
grid grid-cols-1 lg:grid-cols-2 gap-12
```

### **Button System**:
```css
/* Primary Button */
bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors

/* Secondary Button */  
bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors

/* Outline Button */
border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all
```

### **Card Components**:
```css
/* Base Card */
bg-card border border-border rounded-lg p-6 shadow-sm

/* Interactive Card */
bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer

/* Feature Card */
bg-card border border-border rounded-lg p-6 shadow-sm hover:border-primary/50 transition-colors
```

---

## 🚫 CRITICAL VIOLATIONS - NEVER DO THESE

1. **❌ Add images without ID system**
2. **❌ Use hardcoded colors instead of theme variables**
3. **❌ Create inconsistent spacing or typography**
4. **❌ Break responsive design patterns**
5. **❌ Ignore accessibility standards**
6. **❌ Modify core color scheme values**
7. **❌ Use different button or card styles**

---

## ✅ SUCCESS CHECKLIST - BEFORE COMPLETION

- [ ] All images have unique IDs in alt attributes
- [ ] Only theme colors used (no hardcoded values)
- [ ] Typography matches established hierarchy
- [ ] Spacing follows standard system
- [ ] Responsive design works on all screen sizes
- [ ] Cards and buttons use consistent styling
- [ ] Updated `replit.md` if architectural changes made
- [ ] Updated this file if new patterns added

---

## 📝 WHEN TO UPDATE THESE RULES

**Update this file when**:
- Adding new UI component patterns
- Establishing new design systems
- Creating new image ID ranges
- Modifying color schemes (rare)
- User requests new consistency rules

**Always update**:
- Image ID ranges when used
- `replit.md` for architectural changes
- User preferences when expressed

---

## 🔄 PROJECT CONTEXT

This is the **Powerton Engineering** industrial automation website. It's a professional business platform that showcases engineering services, products, and expertise. 

**Key Features**:
- Industrial automation services
- Electrical engineering solutions
- Project portfolio and case studies
- Lead generation forms
- AI-powered chatbot system

**Technology Stack**:
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Express.js backend
- PostgreSQL database
- Deployed on Replit

**Remember**: This is a professional business website. Maintain high standards for design consistency, accessibility, and user experience.

---

*Last Updated: August 19, 2025*
*Next Agent: Follow these rules strictly for consistent, professional results*