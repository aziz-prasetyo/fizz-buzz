# Specification: Enhance Home Page Content

## Overview

The goal of this track is to add more content sections to the Home page to ensure it does not look empty and provides immediate value and context to the user before they start playing.

## Functional Requirements

- **New Sections:** Implement the following sections on the Home page:
  1.  **About the Game:** A brief explanation of the classic Fizz Buzz concept and the game's vision.
  2.  **How to Play:** Clear instructions on the game rules, scoring, and mechanics.
  3.  **Features & Highlights:** Scannable highlights of key features (e.g., dynamic timer, combos, local-first persistence).
  4.  **Leaderboard/Stats Preview:** A dynamic section showing a quick glance at top local scores or recent player stats.
- **Layout & Placement:** All new sections must be placed _above_ the main "Play" call-to-action area, ensuring users are informed before starting the game.
- **Content Style:** The design must be visual and scannable, heavily utilizing UI Cards and Icons to break up text and make the information digestible.

## Non-Functional Requirements

- **Responsive Design:** The new sections must look great and function correctly on both mobile and desktop views.
- **Aesthetics:** Adhere to the defined "Retro UI / Neo-Brutalist" design language.
- **Performance:** Ensure loading the Leaderboard/Stats preview does not block the initial page render.

## Acceptance Criteria

- [ ] The Home page displays the four new sections: About the Game, How to Play, Features, and Leaderboard Preview.
- [ ] All new content is positioned above the main Play area.
- [ ] The layout uses Cards and Icons for a visual, scannable experience.
- [ ] The page remains responsive and visually consistent with the Neo-Brutalist theme.

## Out of Scope

- Major redesigns of the actual game screen (`/game`).
- Implementing an online, global leaderboard (must stick to local-first).
