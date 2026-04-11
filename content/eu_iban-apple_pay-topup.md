---
title: "EU IBAN + Credit Card Top-Up"
description: "Neobank comparison: free CC top-up + instant SEPA. April 2026."
lastUpdated: "2026-04-11"
---

EU neobanks with **free credit card top-up** + **free instant SEPA transfers**. Since the 2025 EU Instant Payments Regulation, all EU banks offer instant SEPA at no extra cost — the differentiator is **CC top-up cost**.

## Comparison

| Bank | IBAN | Free CC/mo | Fee after | Max/mo | Apple Pay |
|------|------|-----------|-----------|--------|-----------|
| **Revolut** | Multi (LT/GB/FR...) | up to 5.000€ | Varies by plan | 5.000€ | ✅ |
| **bunq Free** | NL 🇳🇱 | 500€ | 0,5% | 2.000€ | ✅ |
| **Vivid Standard** | DE 🇩🇪 | 200€ | 1% (min 0,49€) | 5.000€ | ✅ |
| Vivid Plus (6,90€/mo) | DE 🇩🇪 | 500€ | 1% | 5.000€ | ✅ |
| Vivid Prime (9,90€/mo) | DE 🇩🇪 | 1.000€ | 1% | 5.000€ | ✅ |
| N26 | DE 🇩🇪 | ⚠️ ~1,5% always | 1,5% | Varies | ✅ |
| Wise | BE 🇧🇪 | ⚠️ 1,5-2,5% always | Same | No limit | ❌ |
| Monese | — | ❌ No CC top-up | — | — | ❌ |

**Vivid paid plans never pay for themselves** — the plan fee exceeds the fee savings at any volume.

**Curve** is an overlay card (not a bank) that routes any CC as Mastercard. Masks the neobank destination from the issuer — useful when your CC blocks direct neobank top-ups. Works with Apple Pay.

## Issuer Compatibility (tested April 2026)

| Issuer CC | → Revolut | → bunq | → Vivid | Via Curve |
|-----------|-----------|--------|---------|-----------|
| CaixaBank Visa Vueling | ✅ | ✅ 500€ (Apple Pay) | ✅ 1€ | ✅ |
| WiZink | ❌ 499€ | ❌ 500€ | ? | ✅ Vivid 2€ / ❌ bunq |
| Revolut CC (Visa) | N/A | ❌ | ✅ 999€ | ❌ (ping timeout) |

**Key findings:**
- **Revolut CC → Vivid works** (999€ confirmed) but fails with bunq and Curve
- **WiZink blocks direct neobank top-ups** but Curve bypasses it (for Vivid, not bunq)
- **Revolut CC is restrictive as a source** — only works with Vivid direct, fails with Curve and bunq
- **bunq 500€/day hard limit** — after hitting it, rejects all top-ups until next day (any issuer)
- Apple Pay / Google Pay top-ups count toward the same CC monthly limits

## bunq Fee Calculator

0,5% flat on everything above 500€ free. Cap: 2.000€/month, 500€/day.

| Top-up/mo | Fee |
|-----------|-----|
| 500€ | **0€** |
| 1.000€ | **2,50€** |
| 1.500€ | **5,00€** |
| 2.000€ | **7,50€** |

New accounts (< 1 month): 1.200€/30d max, 500€/day.

## Optimal Strategy

Stack free tiers: **Revolut** (~5.000€) + **bunq** (500€) + **Vivid** (200€) = **~5.700€/mo free**.

Beyond that, bunq at 0,5% is cheapest (half of Vivid's 1%).

## Sources

[Vivid top-up](https://support.vivid.money/en/articles/8912320-what-s-an-instant-top-up) · [Vivid Prime](https://support.vivid.money/en/articles/8658613-what-s-vivid-prime) · [Vivid Plus](https://support.vivid.money/en/articles/10010274-what-s-vivid-plus) · [bunq limits](https://help.bunq.com/articles/what-are-the-limits-topping-up-using-your-card) · [bunq Free](https://help.bunq.com/articles/what-are-the-benefits-of-the-bunq-free-plan) · [Revolut Business referral](https://businessbank.idr.net)
