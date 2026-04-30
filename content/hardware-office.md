---
title: Hardware — Office
description: Office hardware setup, fixes, and troubleshooting notes
lastUpdated: 2026-04-30
---

## HOKO Ergo-Work-Table — Height Adjustable Desk

**Model:** HOKO Ergo Premium / Ergo-Work-Table (compact, electric height-adjustable, dual motor)
**Status:** ❌ Discontinued on Amazon.es as of 2026
**Owned units:** White (Nov 2021), Black (Oct 2021)
**Controllers seen:** 2 variants
- Variant A: ▲ Up · ▼ Down · Stand · Seat · 3 · 4 · M
- Variant B: T · M · ▲ · ▼ · 1 · 2 · 3 · LCD + status LED top-right
**Underlying OEM:** Jiecang (Chinese) — same controller family used across many rebrands

---

### Lifespan

~4.5 years before motor desync / controller faults appear. Out-of-warranty repairs cost €40-60 per part (motor leg, control box, cable) and need correct diagnosis.

---

### Error codes encountered

| Code | Display quirk | Meaning | Source |
|------|---------------|---------|--------|
| `RST` | LED segments may render as `r5E` / `rSt` / `r5\|⁻` blinking | Controller awaiting calibration sequence | Jiecang FAQ |
| `E05` | LED red light top-right ON | Anti-collision triggered (gyroscopic sensor false-positive) | Eureka Ergonomic, Lofty Furniture |
| `E11` | — | M1 port motor missing/short | Jiecang FAQ |
| `E21` | — | M2 port motor missing/short | Jiecang FAQ |

---

### Fix sequences (try in order)

**1. RST calibration (standard)**
1. Empty the desk (no monitor / no taut cables under).
2. Hold **▼ (down)** continuously — 15-20s without releasing.
3. Wait for beep + small upward rebound + height number on display.
4. Release ▼. Test ▲.

**2. RST calibration (Variant B alternative)**
1. Hold **▲ + ▼ together** ~5-10s until display shows init code (`A-3` or similar).
2. Release.
3. Hold **▼** to bottom + rebound + number.
4. Test ▲.

**3. Hard reset (after E05)**
1. Unplug power **60 seconds** (capacitors need time).
2. Replug.
3. Hold **3 + 4** together 3s → calibration mode.
4. Hold **▼** to rebound.

**4. Limit-clear (deeper Jiecang reset)**
1. Press **M** once, then long-press **M** until display shows `555`.
2. Saved height limits cleared.
3. Repeat fix #1.

---

### When fixes fail: motor desync diagnosis

The Jiecang controller refuses to complete RST if both motors don't descend synchronously. After 4-5 years one motor degrades.

**Diagnostic swap (5 min, 0€):**
1. Unplug.
2. Swap motor cables M1 ↔ M2 at the control box.
3. Replug, attempt RST.

| Result | Conclusion |
|--------|------------|
| Same leg fails | Control box port faulty — replace control box (Jiecang JCB35NQ ~€35-50) |
| Other leg now fails | Motor in original leg dead — replace leg (€40-60) |
| Error changes E11↔E21 | Confirms which port; replace per code |

⚠️ **Disconnecting one motor blocks operation** (E21 / E11 displayed). Jiecang firmware refuses single-motor operation as a safety measure — you cannot manually limp one leg down.

---

### Why anti-collision (E05) is the weak point

HOKO Premium uses a **gyroscopic anti-collision sensor**. When the desk wakes from `RST`, any inertia (a heavy monitor, a wobbling lamp, an uneven floor) is misread as collision and reverses the motor. This is the most common failure mode after 4 years.

**Newer / better designs use current-based anti-collision** (motor stall detection). Simpler, more robust, fewer false triggers. Worth checking before you buy a new frame.

---

### Cannot push desk down by hand

Lead screws (tornillo sin fin) inside the columns are **physically self-locking** — when the motor doesn't rotate, the screw cannot translate axially. Pushing down by force won't lower the desk; it will damage gears, bearings, or frame welds.

**The only physical workaround**: unscrew the tabletop from the frame (6-8 screws underneath), place the tabletop on alternative supports (filing cabinets, sturdy boxes, sawhorses) at sitting height. 15 minutes, zero cost.

---

## Replacement: MAIDeSITe T2 Pro Plus

**Decision (2026-04-30):** When HOKO failed beyond recovery, replaced the **frame only** (kept original tabletop) with MAIDeSITe T2 Pro Plus.

| Spec | MAIDeSITe T2 Pro Plus | HOKO Ergo Premium (replaced) |
|------|----------------------|------------------------------|
| Price | €273.98 (Amazon.es, sale from €339.99) | €290 in 2021 |
| Reviews | 4.8★ × 1,784 (Amazon's Choice) | 4.5★ × 191 |
| Brand age | 2001 (24 years) | Generic / discontinued |
| Motors | 2 | 2 |
| Leg segments | **3** (key for low minimum) | 3 |
| Height range | **62-125 cm** | 62-128 cm |
| Width range | 100-180 cm | 100-170 cm |
| Fits tabletop | 100-220 × 60-100 cm | 110-200 × 70-90 cm |
| Load | **160 kg** | 100 kg |
| Speed | 40 mm/s | 38 mm/s |
| Memory | 4 + sit/stand reminder | 3 + reminder |
| Anti-collision | **Current-based** ✅ | Gyroscopic ⚠️ |
| Noise | <45 dB | not specified |
| USB charging port | ✅ | ❌ |
| Child lock | ✅ | ❌ |
| Warranty | 2 years (new) | expired |

### Key buying lessons

1. **3-segment legs are mandatory** to reach 62 cm minimum. 2-segment frames start at 70-72 cm — too tall for short users / footrest setups.
2. **Current-based anti-collision > gyroscopic** for longevity. The HOKO failure mode was 100% gyroscopic sensor false triggers.
3. **Buy frame only, reuse tabletop**. Tabletops outlast electronics 3:1. €273 frame swap vs €400+ complete desk.
4. **Established brands beat sponsored unknowns**. LIFEZEAL "Dual Motor Electric Desk Stand" appeared as sponsored alternative at €172.99 but searches confirm LIFEZEAL doesn't sell electric frames in EU — it was a relisting / unverified seller. MAIDeSITe (since 2001), FlexiSpot, AIMEZO are the trusted brands in this segment on Amazon.es.
5. **Avoid 2-stage frames for replacement**. Many cheaper options (€110-200) are 2-stage = high minimum height = downgrade vs HOKO.

### Frame swap procedure (when MAIDeSITe arrives)

1. Empty desk, unplug HOKO.
2. Underneath: unscrew 6-8 bolts joining tabletop to HOKO frame.
3. Lift tabletop off (15-25 kg, 2 people if large).
4. Move HOKO frame aside.
5. Position MAIDeSITe frame upside-down, place tabletop on top.
6. Screw using included MAIDeSITe screws (different bolt holes likely — pre-drill if needed).
7. Plug in, run RST calibration (hold ▼ until rebound).
8. ~45-60 min total.
