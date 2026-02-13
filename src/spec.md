# Specification

## Summary
**Goal:** Let users edit and save the ReplyPage reply in-place, then navigate to a new Farewell page that shows a fixed parting message and auto-plays a 5-second kissing animation.

**Planned changes:**
- Update ReplyPage reply box to start read-only with the persisted reply text, enter edit mode on click/tap, and provide a Save button at the bottom of the reply box that persists updates and shows a saving/disabled state while saving.
- Add a Next button on ReplyPage that routes to a new fourth page without a full page reload.
- Create a new fourth page that displays the provided parting message exactly as written and automatically plays a kissing-themed animation on open for 5 seconds, then stops/ends.

**User-visible outcome:** On the Reply page, the user can tap the reply text to edit it, save changes, and then press Next to reach a Farewell page that shows the exact parting message and plays a one-time 5-second kissing animation.
