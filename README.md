# Priyanshu Soni – Portfolio

Modern single-page portfolio that highlights Priyanshu’s skills, featured projects, and contact options with smooth scrolling, responsive layout, and playful accents like the floating resume CTA.

## Table of Contents
1. [Live Preview](#live-preview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Local Development](#local-development)
5. [Customization Tips](#customization-tips)
6. [Project Structure](#project-structure)
7. [Contact](#contact)

## Live Preview
- **GitHub Pages:** `https://sonipriyanshu80.github.io/priyanshu-portfolio.github.io/`

## Features
- **Hero + Resume CTA:** Floating pill link for quick access to the PDF resume.
- **About & Skills:** Focus areas and categorized badges describing core strengths.
- **Projects Grid:** Links to interactive mini-apps (RockPaperGo, SkyCast, Reaction Tester).
- **Contact Form:** FormSubmit-powered AJAX form with inline feedback and WhatsApp shortcut.
- **Scroll Enhancements:** Smooth scrolling navigation, active-link highlighting, back-to-top button, and preload spinner.
- **Responsive Styling:** Media queries handle tablets/phones, with tuned spacing for the resume CTA.

## Tech Stack
- **HTML5** for markup and content sections
- **CSS3** for theming, layout, and responsive design
- **JavaScript (jQuery)** for scroll behavior, form submission, and interactivity
- **ScrollReveal** for gentle section entrance animations
- **FormSubmit.co** for email delivery without a custom backend

## Local Development
1. Clone or download this repository.
2. Open the folder in your editor of choice.
3. Use any static server (e.g., VSCode Live Server, `python -m http.server`) to preview at `http://localhost:5500` (or similar).
4. Update assets in `assets/` or tweak content in `index.html` as needed.

## Customization Tips
- **Resume Button:** Update `assets/Priyanshu_Soni_Resume.pdf` or change the link target in the hero section.
- **Skills / Projects:** Edit the respective sections in `index.html` to add or remove items.
- **Styling:** Modify colors, spacing, or animations in `style.css`. The resume pill is tuned via the `.resume-pill` rules and responsive media queries.
- **Form Handling:** Replace the FormSubmit action URL with your email or connect to a custom backend.

## Project Structure
```
.
├── index.html           # Main one-page site
├── style.css            # Global styles and responsive rules
├── script.js            # jQuery interactions, ScrollReveal, AJAX form
├── assets/              # Images, resume PDF, WhatsApp icon
├── projects/            # Standalone mini-projects linked from the grid
└── js/jquery.min.js     # Local jQuery copy
```

## Contact
- **Portfolio:** `https://sonipriyanshu80.github.io/priyanshu-portfolio.github.io/`
- **Email:** `sonipriyanshu80@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/priyanshu-soni-4a4776266/`
- **GitHub:** `https://github.com/sonipriyanshu80`

Feel free to fork, adapt, or reach out for collaboration ideas! 🎨✨

