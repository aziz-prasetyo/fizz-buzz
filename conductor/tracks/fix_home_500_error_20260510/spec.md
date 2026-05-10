# Specification: Fix Home Page 500 Error

## Overview
The goal of this track is to fix a 500 Internal Server Error occurring on the Home page.

## Functional Requirements
- Identify and resolve the SSR error (`effect_orphan`) caused by the `Shimmer` component.
- Ensure the `Shimmer` component and its configuration only run on the client side.
- Provide a visually consistent fallback for the `Shimmer` component during SSR.

## Non-Functional Requirements
- Maintain existing visual aesthetic and responsiveness.
- Ensure the fix doesn't introduce regressions in other parts of the application.

## Acceptance Criteria
- [ ] The Home page loads successfully without any 500 errors.
- [ ] The `Shimmer` loading effect functions correctly on the client side.
- [ ] The fallback UI is displayed during SSR.