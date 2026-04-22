---
title: Hardware — Office
description: Office hardware setup, fixes, and troubleshooting notes
lastUpdated: 2026-04-22
---

## HOKO Ergo-Work-Table — Height Adjustable Desk

**Model:** HOKO Ergo-Work-Table (compact, electric height-adjustable)
**Colours owned:** White (Nov 2021), Black (Oct 2021)
**Controller buttons:** ▲ Up · ▼ Down · Stand · Seat · 3 · 4 · M

---

### Error: `RST` / `r5E` display — desk stuck at minimum height

**Symptom:** LED shows `r5E` (looks like `rSt`). Desk responds to ▼ (makes an effort, already at lowest) but ignores ▲.

**Root cause:** Controller lost its calibration reference. Needs a full reset + re-learn cycle.

**Fix that worked:**

1. Hold **▲ + ▼ simultaneously** for ~5–10 seconds until display changes (shows something like `A-3` or similar init code).
2. Release both buttons.
3. Press and hold **▼ (down)** until desk reaches absolute minimum and stops. Hold for a few more seconds.
4. Press **▲ (up)** — desk should now respond and rise normally.
5. Done. Controller has re-learned its range.

**Alternative reset (if above doesn't work):**

1. Unplug power for 30 seconds.
2. Plug back in.
3. Hold **3 + 4** simultaneously for 3 seconds to enter calibration mode.
4. Hold **▼** until desk hits bottom and rebounds slightly. Display shows height number → release.
5. Test **▲**.

> Note: The `RST` error is common on Chinese OEM controllers (Jiecang-based). Both procedures recalibrate the min/max travel range.
