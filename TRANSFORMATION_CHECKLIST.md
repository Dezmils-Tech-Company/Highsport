# HIGH SPORT TRANSFORMATION - STEP-BY-STEP CHECKLIST

## Quick Copy-Paste Updates

### Step 1: Update JSON Data Files

**Replace `/public/events.json` with content from `/UPDATED_EVENTS.json`**
- Contains all school sports events for Nyanza Region
- Events: Football, Rugby, Hockey, Netball, Athletics, Tennis championships

**Replace `/public/locations.json` with content from `/UPDATED_LOCATIONS.json`**
- Contains all 4 Nyanza Region cities with school locations
- Kisumu (4 schools), Kericho (3 schools), Nakuru (3 schools), Kisii (3 schools)

---

## Step 2: Update Text Content in JSX Files

### 2.1 Banner Component (`src/Components/Banner/Banner.jsx`)

**Update slides array:**
```jsx
const slides = [
  {
    id: 1,
    title: "Your Central Hub for Nyanza Inter-School Sports",
    subtitle: "Connecting Champions",
    description: "Manage and track inter-school games across the Nyanza Region in one unified platform",
    image: "/BannerImg/image.png",
    cta: "Join Now",
    link: "/membership",
  },
  {
    id: 2,
    title: "Inter-School Championship Series 2025",
    subtitle: "Football, Rugby, Hockey & More",
    description: "Compete with schools from Kisumu, Kericho, Kisii, and Nakuru",
    image: "/BannerImg/slide-2.webp",
    cta: "View Schedule",
    link: "/events",
  },
  {
    id: 3,
    title: "Support Your School's Athletic Team",
    subtitle: "Live Scoring & Rankings",
    description: "Real-time updates, performance analytics, and team statistics",
    image: "/BannerImg/slide-3.webp",
    cta: "Follow Teams",
    link: "/courts",
  },
  {
    id: 4,
    title: "Nyanza Sports Development Program",
    subtitle: "Youth Excellence",
    description: "Coaching, talent identification, and pathway to national competitions",
    image: "/BannerImg/slide-4.webp",
    cta: "Learn More",
    link: "/about",
  },
  {
    id: 5,
    title: "Kenya Inter-County Games Trials",
    subtitle: "Your Path to National Glory",
    description: "Selection trials for Kenya Inter-County Games and national teams",
    image: "/BannerImg/slide-5.webp",
    cta: "Register",
    link: "/membership",
  },
];
```

---

### 2.2 EventWall Component Header (`src/Pages/Events/EventWall.jsx`)

**Replace the header section:**
```jsx
<span className="inline-block px-4 py-1 mb-4 text-sm font-bold text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20">
  NYANZA SPORTS CALENDAR
</span>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-serif">
  <span className="text-yellow-400">Championship</span> Events
</h1>
<div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 md:mb-8"></div>
<motion.p
  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
  viewport={{ once: true }}
  className="text-sm sm:text-md md:text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed italic"
>
  Inter-school games and sports championships across Nyanza Region
</motion.p>
```

---

### 2.3 HTML Title (`index.html`)

**Update:**
```html
<title>High Sport | Nyanza Inter-School Games</title>
```

---

### 2.4 About Page (`src/Pages/About/About.jsx`)

**Key sections to update:**
- Mission: "Unifying and promoting inter-school games and sports excellence across the Nyanza Region"
- Vision: "Building future champions through coordinated school sports programs in Kenya"
- Focus on school partnerships and youth development

---

### 2.5 Membership Page (`src/Pages/Membership/Membership.jsx`)

**Update tier descriptions to:**

**Student Tier**
- Access to all school event schedules
- Live match scoring and updates
- Team rankings and statistics
- Event registration
- Perfect for athletes and sports enthusiasts

**School Tier**
- Host championships and tournaments
- Manage athlete registrations
- Venue and facility booking
- Event promotion tools
- Performance analytics dashboard

**Coach Tier**
- Athlete performance tracking
- Team management tools
- Video analysis capabilities
- Player development plans
- Training schedule management

**Sponsor/Corporate Tier**
- Event partnership opportunities
- Branding and advertising
- Exclusive networking events
- Sponsorship package management
- Corporate team participation

---

### 2.6 Courts/Facilities Page (`src/Pages/Courts/Courts.jsx`)

**Update to show partner school facilities:**
- Football Pitches
- Rugby Grounds
- Hockey Astroturf Courts
- Tennis Courts
- Athletics Tracks
- Netball Courts

**Description:** "High Sport connects you with premier school sporting facilities across the Nyanza Region."

---

## Step 3: Navigation Updates

### Update Navbar links context (if needed)
- Courts → Partner Schools
- Membership → Become a Member
- Events → Championships (or keep as is)

---

## Step 4: Final Verification Checklist

- [ ] All "Elite Arena" text replaced with "High Sport"
- [ ] All Bangladesh locations replaced with Nyanza Region schools
- [ ] Events updated to school sports championships
- [ ] Banner slides reflect Nyanza/school sports messaging
- [ ] Membership tiers appropriate for school sports platform
- [ ] About page mission/vision reflects school sports focus
- [ ] Logo displays "HIGH SPORT" (✓ Already done)
- [ ] Footer mentions "Nyanza Region" if applicable
- [ ] All links functional
- [ ] Responsive design maintained
- [ ] Colors and styling consistent

---

## Step 5: Testing

1. Run `npm start` and verify all pages display correctly
2. Check navigation between pages
3. Verify event cards display with new Nyanza events
4. Check locations page shows Nyanza schools
5. Test responsive design on mobile
6. Verify filtering and search work with new content
7. Check all links are functional

---

## Files Created for Reference

- `/TRANSFORMATION_GUIDE.md` - Full overview of changes
- `/UPDATED_EVENTS.json` - Ready-to-use events data
- `/UPDATED_LOCATIONS.json` - Ready-to-use locations data
- `/BRANCH_NAMING_SUGGESTIONS.md` - School facility naming

---

## Important Notes

✓ **Structure Maintained:** All original components, routing, and functionality preserved
✓ **Data-Driven:** Content changes are primarily in JSX strings and JSON files
✓ **No API Changes:** Backend integration remains the same
✓ **Scalable:** System can grow with more schools/events as needed
✓ **Branding:** "High Sport" consistently used throughout
✓ **Regional Focus:** All content specific to Nyanza Region, Kenya

---

## Timeline

- **Phase 1 (Today):** Update JSON files and key JSX branding
- **Phase 2 (Day 2):** Complete text content updates
- **Phase 3 (Day 3):** Testing and verification
- **Phase 4 (Day 4):** Deploy to production

