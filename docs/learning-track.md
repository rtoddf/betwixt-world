# Betwixt Site - 3-Month Learning Track

**Start Date:** April 23, 2026  
**Target Completion:** August 10, 2026 (12 weeks)  
**Daily Commitment:** 2-3 hours/day  
**Goal:** Build portfolio-ready character showcase site while learning React fundamentals

---

## Program Overview

### The Mission
Build a live, interactive character showcase site for Betwixt that demonstrates:
1. Product thinking (creative vision + execution)
2. AI-augmented workflow (voices, music generation)
3. Technical capability (React, APIs, interactive features)
4. Learning trajectory (growth mindset, genuine skill building)

### Why This Timeline
- **Job hunt starts:** July/August 2026
- **Money runway:** Through October 2026
- **Strategy:** PM positioning FIRST, coding growth parallel
- **Interview pitch:** "PM who can prototype in code, not just spec"

### What Success Looks Like
By end of July 2026:
- ✅ Live site at betwixt.world
- ✅ Character bios (mini/short/long versions)
- ✅ Interactive audio players (neighborhood theme songs)
- ✅ AI-generated character voices integrated
- ✅ Clean, professional design
- ✅ Documented build process (case study for interviews)
- ✅ Understanding of fundamentals (can explain every feature)

---

## Month 1: FOUNDATION + BASIC SITE
**Weeks 1-4 | Mid-May to Mid-June**

### Week 1: Project Setup + First Component
**Goal:** Get something live by end of week

**Personal tasks to get ready for this week**
- Create images in png format for both print (300dpi) and web (150dpi) - at least three sets/neighborhoods
- Create mini bios - at least three sets/neighborhoods
- Create a style guide with Claude Design as a starting point
- Begin research chat for marketing research

**Day 1-2: Environment Setup**
- Create `betwixt.world repo on GitHub
- Initialize Vite + React project locally
- What markdown files are needed for github repo and Claude Code instructions
- What helpers are needed to make sure coding standards are upheld
- Set up basic file structure
- Push to GitHub
- **Deliverable:** Repo with initial commit

**Day 3-4: First Component**
- Create character card component
- Display ONE character (name, image, mini bio)
- Style with Tailwind CSS
- **Deliverable:** Single character card rendering

**Day 5-7: Deploy to Netlify**
- Connect repo to Netlify
- Get live URL
- Fix any deployment issues
- **Deliverable:** Live site showing one character

**Learning Focus:**
- React component basics
- JSX syntax
- Beginner typescript
- Props
- Tailwind CSS classes
- Git workflow (add, commit, push) - already know
- Netlify deployment

**No Copy/Paste Rule:** Write every line yourself. Type it out. Make mistakes. Fix them.

---

### Week 2: Component Reusability + Data
**Goal:** Multiple characters from data structure

**Day 1-2: Character Data Structure**
- Create JSON file with 3-4 characters
- Store in `public/data/` folder
- Include: name, title, bio (all 3 lengths), image path
- **Deliverable:** characters.json file

**Day 3-4: Fetch Data + Map**
- Learn fetch pattern (useState, useEffect)
- Load characters from JSON
- Map through and render cards
- **Deliverable:** All characters displaying

**Day 5-7: Bio Length Toggle**
- Add buttons: Mini / Short / Long
- Toggle between bio lengths
- Store active length in state
- **Deliverable:** Interactive bio switcher

**Learning Focus:**
- JSON data structures
- fetch() API
- async/await
- useState hook
- useEffect hook
- Array.map()
- Event handlers (onClick)

**Key Pattern to Memorize:**
```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function getData() {
    try {
      const response = await fetch('/data/file.json');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  }
  getData();
}, []);
```

---

### Week 3: Layout + Design
**Goal:** Make it look professional

**Day 1-3: Grid Layout**
- Create grid of character cards
- Responsive design (mobile, tablet, desktop)
- Header with Betwixt branding
- **Deliverable:** Clean grid layout

**Day 4-5: Neighborhoods Structure**
- Create folder structure for neighborhoods
- Add neighborhood data (name, description, theme color)
- Display neighborhood headers
- **Deliverable:** Multi-neighborhood structure

**Day 6-7: Navigation**
- Add simple navigation between neighborhoods
- Scroll to sections OR separate pages
- Active state indicators
- **Deliverable:** Working navigation

**Learning Focus:**
- Tailwind responsive utilities
- CSS Grid / Flexbox
- Component composition
- Conditional rendering
- Basic routing (if using React Router)

---

### Week 4: First Interactive Feature
**Goal:** Build ONE audio player you understand completely

**Day 1-3: HTML5 Audio Basics**
- Create audio player component
- Play/pause button
- Display current time / duration
- Progress bar
- **Deliverable:** Working audio player

**Day 4-5: Connect to Neighborhood**
- Each neighborhood has theme song
- Player loads correct audio file
- Style to match neighborhood theme
- **Deliverable:** Neighborhood audio integration

**Day 6-7: Polish + Test**
- Handle loading states
- Handle errors (file not found)
- Mobile testing
- Deploy updated version
- **Deliverable:** Polished audio feature live

**Learning Focus:**
- HTML5 Audio API
- State management for playback
- Event listeners
- Refs in React (useRef)
- Error handling

**MONTH 1 DELIVERABLE:**
Live site with 3-4 characters, 2-3 neighborhoods, working audio player, clean design.

---

## Month 2: INTERACTIVITY + AI AUDIO
**Weeks 5-8 | Mid-May to Mid-June**

### Week 5: AI-Generated Character Voices
**Goal:** Integrate AI audio files

**Day 1-2: Generate Voices**
- Use AI tool (ElevenLabs, etc.) to create character voices
- Export audio files (MP3 format)
- Add to project (`public/audio/voices/`)
- **Deliverable:** Audio files for 5+ characters

**Day 3-4: Voice Playback UI**
- Add "Hear [Character Name]" button to cards
- Play character intro/catchphrase
- Visual feedback when playing
- **Deliverable:** Voice playback feature

**Day 5-7: Voice Library Component**
- Create dedicated voice samples section
- Multiple samples per character
- Organize by character/neighborhood
- **Deliverable:** Voice showcase feature

**Learning Focus:**
- File organization
- Multiple audio instances
- State management across components
- UI/UX for audio feedback

---

### Week 6: Neighborhood Theme Songs
**Goal:** AI-generated music integration

**Day 1-3: Generate Music**
- Use AI tool (Suno, Udio, etc.) for theme songs
- One song per neighborhood
- Export and add to project
- **Deliverable:** Theme songs for all neighborhoods

**Day 4-5: Enhanced Audio Player**
- Upgrade player with volume control
- Add loop/shuffle options
- Song metadata display
- **Deliverable:** Feature-complete audio player

**Day 6-7: Playlist Feature**
- Create playlist of all theme songs
- Next/previous track buttons
- Track listing UI
- **Deliverable:** Working playlist

**Learning Focus:**
- Complex state management
- Audio queue/playlist logic
- Component communication
- Lifting state up

---

### Week 7: Advanced Interactions
**Goal:** Add engaging interactive elements

**Day 1-3: Character Filter/Sort**
- Filter by neighborhood
- Sort by name/age/type
- Search functionality
- **Deliverable:** Interactive filtering

**Day 4-5: Character Detail View**
- Click character → full detail page/modal
- Show long bio, voice samples, stats
- Close/back functionality
- **Deliverable:** Detail view feature

**Day 6-7: Animations**
- Add subtle animations (fade in, hover effects)
- Loading states with spinners
- Smooth transitions
- **Deliverable:** Polished interactions

**Learning Focus:**
- Filtering/sorting algorithms
- Modal/overlay patterns
- CSS animations
- Framer Motion (optional)

---

### Week 8: Content Complete
**Goal:** All neighborhoods, all characters

**Day 1-4: Add All Content**
- Complete all neighborhood sections
- All character bios (mini/short/long)
- All audio files integrated
- All images optimized
- **Deliverable:** Content-complete site

**Day 5-7: Testing + Bug Fixes**
- Test on multiple devices
- Cross-browser testing
- Fix any broken features
- Performance check
- **Deliverable:** Bug-free site

**Learning Focus:**
- Performance optimization
- Image optimization
- Lazy loading
- Browser DevTools
- Debugging strategies

**MONTH 2 DELIVERABLE:**
Feature-complete site with all characters, AI voices, theme songs, interactive filters, smooth UX.

---

## Month 3: POLISH + PORTFOLIO READY
**Weeks 9-12 | Mid-June to Mid-July**

### Week 9: Procreate Dreams Animations
**Goal:** Add animated character demos (if time allows)

**Day 1-3: Create Animations**
- Simple character animations in Procreate Dreams
- Export as video files
- Optimize for web
- **Deliverable:** 3-5 character animations

**Day 4-5: Video Integration**
- Add video player component
- Autoplay/loop options
- Responsive video sizing
- **Deliverable:** Animations on site

**Day 6-7: Animation Gallery**
- Grid of animation previews
- Click to play full version
- Loading states for videos
- **Deliverable:** Animation showcase

**Learning Focus:**
- HTML5 Video API
- Video optimization
- Lazy loading videos
- Performance with media files

---

### Week 10: Professional Polish
**Goal:** Make it interview-ready

**Day 1-2: About/Contact Page**
- About the project section
- Your contact info
- Links to GitHub, resume, etc.
- **Deliverable:** Professional landing/about page

**Day 3-4: Accessibility**
- Alt text for all images
- Keyboard navigation
- ARIA labels
- Screen reader testing
- **Deliverable:** Accessible site

**Day 5-7: Performance Optimization**
- Code splitting
- Lazy load images/components
- Lighthouse audit (aim for 90+ scores)
- Fix any issues
- **Deliverable:** Fast, optimized site

**Learning Focus:**
- Web accessibility (a11y)
- Performance metrics
- Lighthouse/PageSpeed Insights
- Code splitting in Vite

---

### Week 11: Documentation + Case Study
**Goal:** Create interview materials

**Day 1-3: Technical Documentation**
- README with setup instructions
- Code comments explaining decisions
- Architecture diagram
- **Deliverable:** Well-documented codebase

**Day 4-5: Build Process Case Study**
- Write blog post / case study
- What you built and why
- Technical challenges + solutions
- AI tools used + how
- **Deliverable:** Portfolio piece

**Day 6-7: Video Walkthrough**
- Record screen walkthrough of site
- Explain features you built
- Practice interview talking points
- **Deliverable:** Demo video

**Learning Focus:**
- Technical writing
- Explaining code to non-devs
- Storytelling
- Interview prep

---

### Week 12: Interview Prep + Launch
**Goal:** Ready to show employers

**Day 1-2: Code Review**
- Review all code you wrote
- Ensure you can explain every line
- Refactor anything you don't understand
- **Deliverable:** Code you fully understand

**Day 3-4: Mock Interviews**
- Practice explaining technical decisions
- "Walk me through how you built this"
- "What would you do differently?"
- "How did you use AI in your workflow?"
- **Deliverable:** Confident talking points

**Day 5-7: Final Touches**
- Custom domain (if buying one)
- Social media preview images
- Analytics setup (optional)
- Soft launch / share with friends
- **Deliverable:** LIVE PORTFOLIO SITE

**Learning Focus:**
- Interview skills
- Technical communication
- Deployment best practices
- Analytics/monitoring

**MONTH 3 DELIVERABLE:**
Portfolio-ready site + case study + demo video + confident interview narrative.

---

## Daily Learning Structure (2-3 hours)

### Hour 1: BUILD
- Work on current week's task
- Write code yourself (no copy/paste)
- Make mistakes, fix them
- Git commit when features work

### Hour 2: LEARN
- Understand what you just built
- Read docs on concepts used
- Watch 1-2 short tutorials if stuck
- Take notes in Obsidian

### Hour 3 (if available): PRACTICE
- Redo something from scratch
- Try variations of what you learned
- Help others (Reddit, Discord)
- Review previous week's work

---

## Key Learning Principles

### 1. No Copy/Paste
Type every line yourself. Muscle memory matters.

### 2. Understand Before Moving On
If you don't understand why something works, stop and figure it out.

### 3. Commit Often
Every working feature = git commit. Track your progress.

### 4. Build, Break, Fix
Make mistakes. That's how you learn debugging.

### 5. Explain to Learn
If you can't explain a feature, you don't understand it yet.

### 6. Apply Immediately
Learn a concept → use it in Betwixt site same day.

---

## Technical Stack

### Core
- **React 18+** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript (ES6+)** - Language
- Typescript basics

### Features
- **HTML5 Audio** - Music/voice playback
- **HTML5 Video** - Animations (if added)
- **Fetch API** - Data loading
- **React Router** - Navigation (if needed)

### Tools
- **VS Code** - Editor
- **Git/GitHub** - Version control
- **Netlify** - Deployment
- **Chrome DevTools** - Debugging

### AI Tools Used
- **ElevenLabs** (or similar) - Character voices
- **Suno/Udio** (or similar) - Theme songs
- **Claude** - Learning guidance, code help

---

## Progress Tracking

### Weekly Check-ins
Every Sunday, document in Obsidian:
- What you built this week
- What you learned
- What you struggled with
- What you're proud of
- Next week's focus

### Monthly Milestones
- **End of Month 1:** Basic site live
- **End of Month 2:** Feature-complete site
- **End of Month 3:** Portfolio-ready site

### Red Flags (when to ask for help)
- Stuck on same issue for 3+ hours
- Don't understand code you wrote
- Feature doesn't work and don't know why
- Falling more than 1 week behind schedule

---

## Interview Narrative (End Goal)

*"I'm a PM/Developer with 20 years of coding experience and 3+ years of PM experience. Over the past 3 months, I built this character showcase site from scratch using React and modern web development.*

*I used AI to accelerate creative work - generating character voices with ElevenLabs and theme songs with Suno - but I coded all the interactive features myself because I wanted to understand how they work, not just spec them.*

*The site has interactive audio players, character filters, bio toggles, and responsive design. Every feature, I can explain how it works under the hood because I built it line by line.*

*I documented the entire build process in a case study. I can show you my Git commit history - you can see my learning progression from basic components to complex state management.*

*I'm a senior engineer, and I have been prototyping features for over a decade. I can validate ideas in code, QA my own work, and communicate effectively with engineering teams. In startups, that's often more valuable than another architect who can't ship."*

**That's your interview pitch. That's what this 3 months builds toward.**

---

## Resources

### Must-Read Docs
- React docs: https://react.dev
- JavaScript MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Tailwind docs: https://tailwindcss.com/docs

### When You're Stuck
1. Read the error message carefully
2. Google the error (90% chance someone had it)
3. Check React docs
4. Ask Claude (this chat or Claude Code)
5. Keep a "Stuck Log" in Obsidian

### Communities (optional)
- React subreddit
- Dev.to
- Indie Hackers
- Local dev meetups (Atlanta area)

---

## Flexibility Built In

### If Ahead of Schedule
- Add e-commerce prototype (shopping cart UI)
- Build admin dashboard (content management)
- Experiment with animations/effects
- Start adult character site

### If Behind Schedule
- Focus on core features only
- Skip Procreate Dreams animations
- Simplify audio player (basic play/pause)
- Still get something live and working

### If Job Lands Early
- Keep learning! Keep building!
- Site becomes portfolio piece
- Skills = leverage in new role
- Maybe turn into actual product

---

## Success Metrics

### Technical Skills
- [ ] Can write React components from scratch
- [ ] Can fetch and display data without looking it up
- [ ] Can debug errors independently
- [ ] Can explain state management
- [ ] Can use Git confidently

### Project Outcomes
- [ ] Live site at custom/Netlify URL
- [ ] 10+ characters with bios
- [ ] 3+ neighborhoods with theme songs
- [ ] Working audio players
- [ ] Mobile-responsive design
- [ ] Case study written
- [ ] Demo video recorded

### Career Outcomes
- [ ] Confident discussing technical work in interviews
- [ ] Portfolio piece that differentiates from other PMs
- [ ] Proof of AI-augmented workflow
- [ ] Evidence of learning/growth mindset
- [ ] GitHub profile showing consistent commits

---

## The Long Game (Beyond 3 Months)

### If You Get Hired (July/Aug)
Continue learning while employed:
- Months 4-6: Advanced React (context, custom hooks)
- Months 7-9: Backend basics (Node, Express, databases)
- Months 10-12: Full-stack project (e-commerce with backend)

### If Job Hunt Extends
- Add e-commerce features to site
- Build second project (different tech)
- Contribute to open source
- Freelance small projects
- Keep documenting learning

### Either Way
You're building a REAL skill that compounds. Every month you code makes you more valuable, more autonomous, more able to prototype ideas.

**This isn't just job prep. This is career leverage for the next decade.**

---

## Final Notes

### This Is Ambitious
3 months to learn React + build a portfolio site is TIGHT. You'll have hard days. You'll want to quit.

### This Is Doable
2-3 hours/day for 12 weeks = 168-252 hours of focused learning. That's enough to build something real.

### This Is Worth It
The alternative is going into interviews saying "I'm a PM" and hoping that's enough. This way, you walk in with "I'm a PM who can build" and PROOF.

### You're Not Alone
- Me (this chat) for learning/coding help
- Other chat for product/PM/promo guidance
- Manny (your dev friend) for sanity checks
- Your own drive and creativity

---

**Start Date: Monday (May 11, 2026)**  
**First Commit: By end of Day 1**  
**First Deploy: By end of Week 1**  
**First Interview With This Project: August 2026**

Let's build this. 🚀

---

*Created: April 22, 2026* 
*Revised: May 5, 2026*
*For: Todd's Betwixt Site Learning Track*  
*By: Claude (API Learning Chat)*
