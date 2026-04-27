---
title: "EU IBAN + Credit Card Top-Up"
description: "Neobank comparison: free CC top-up + instant SEPA. April 2026."
lastUpdated: "2026-04-13"
---

EU neobanks with **free credit card top-up** + **free instant SEPA transfers**. Since the 2025 EU Instant Payments Regulation, all EU banks offer instant SEPA at no extra cost — the differentiator is **CC top-up cost**.

## Comparison

| Bank | IBAN | Free CC/mo | Fee after | Max/mo | Daily limit | Apple Pay |
|------|------|-----------|-----------|--------|-------------|-----------|
| **Revolut** | Multi (LT/GB/FR...) | up to 5.000€ | Varies by plan | 5.000€ | — | ✅ |
| **bunq Free** | NL 🇳🇱 | 500€ | 0,5% | 2.000€ | **500€/day** | ✅ |
| **Vivid Standard** | DE 🇩🇪 | 200€ | 1% (min 0,49€) | 5.000€ | — | ✅ |
| Vivid Plus (6,90€/mo) | DE 🇩🇪 | 500€ | 1% | 5.000€ | — | ✅ |
| Vivid Prime (9,90€/mo) | DE 🇩🇪 | 1.000€ | 1% | 5.000€ | — | ✅ |
| N26 | DE 🇩🇪 | ⚠️ ~1,5% always | 1,5% | Varies | — | ✅ |
| Wise | BE 🇧🇪 | ⚠️ 1,5-2,5% always | Same | No limit | — | ❌ |
| Monese | — | ❌ No CC top-up | — | — | — | ❌ |

**Vivid paid plans never pay for themselves** — the plan fee exceeds the fee savings at any volume.

**Curve** is an overlay card (not a bank) that routes any CC as Mastercard. Masks the neobank destination from the issuer — useful when your CC blocks direct neobank top-ups. Works with Apple Pay.

## Issuer Compatibility (tested April 2026)

| Issuer CC | → Revolut | → bunq | → Vivid | Via Curve |
|-----------|-----------|--------|---------|-----------|
| CaixaBank Visa Vueling | ✅ 500€ | ✅ 500€ | ✅ | ✅ |
| WiZink | ✅ 777€ | ✅ 60€ | ✅ 2€ (via Curve) | ✅ |
| Revolut CC (Visa) | N/A | ✅ 440€ | ✅ 999€ | ❌ (ping timeout) |

**Key findings:**
- **WiZink → Revolut works** (777€ confirmed via Apple Pay). Earlier 499€ rejection was likely a temporary/daily limit, not a permanent block.
- **Revolut CC → Vivid works** (999€ confirmed direct). Revolut CC → bunq works up to 440€ but rejected at 500€ (bunq daily limit, not issuer).
- **bunq hard limit: 500€/day** — strictly enforced. Top-ups rejected once daily total reaches 500€, regardless of issuer. Split across multiple smaller top-ups to fill the daily quota (e.g. 60€ + 440€ = ✅).
- **Issuer anti-fraud whitelisting:** some CC issuers (e.g. WiZink) auto-block transactions to unfamiliar countries (NL, UK, LT). Call issuer to whitelist — WiZink allows 3-month country whitelisting. After whitelisting, all neobank top-ups work.
- Apple Pay / Google Pay top-ups count toward the same CC monthly and daily limits.

## bunq Fee Calculator

0,5% flat on everything above 500€/mo free. Hard limits: **500€/day**, 2.000€/month.

| Top-up/mo | Fee |
|-----------|-----|
| 500€ | **0€** |
| 1.000€ | **2,50€** |
| 1.500€ | **5,00€** |
| 2.000€ | **7,50€** |

To reach 2.000€/month: top up 500€/day across 4 days. New accounts (< 1 month): max 1.200€/30d.

## Optimal Strategy

Stack free tiers: **Revolut** (~5.000€) + **bunq** (500€) + **Vivid** (200€) = **~5.700€/mo free**.

Beyond that, bunq at 0,5% is cheapest (half of Vivid's 1%).

## Deposit Guarantee

All listed neobanks are covered by the **EU Deposit Guarantee Scheme (100.000€/person)**:

| Bank | Licensed entity | Country | Regulator |
|------|----------------|---------|-----------|
| Revolut | Revolut Bank UAB | Lithuania | Bank of Lithuania |
| bunq | bunq B.V. | Netherlands | DNB (De Nederlandsche Bank) |
| Vivid | Solarisbank AG (Solaris SE) | Germany | BaFin |
| N26 | N26 Bank GmbH | Germany | BaFin |
| Wise | Licensed as EMI, not a bank | Belgium | NBB |

Vivid is not a bank itself — it's a frontend/agent for **Solarisbank AG**, which holds the German banking licence. Funds legally held at Solaris, fully covered by the German deposit guarantee (EdB).

Wise is an Electronic Money Institution — **not covered** by deposit guarantee. Funds are safeguarded but not insured.

## Square POS Bank Account (EU)

Square Spain requires an **ES IBAN** for merchant payouts — German/Dutch neobank IBANs are not accepted.

**Where to change the linked bank account in Square Dashboard (EU layout):**

Direct URL: [https://app.squareup.com/dashboard/balances/bank-accounts](https://app.squareup.com/dashboard/balances/bank-accounts)

Hidden in the EU dashboard menu (not under Settings → Banking as US docs claim). The path Settings → Account & settings shows: Personal information / My business / Pricing / Payments / Money / Notifications / GDPR and fiscal compliance / etc — but **none of these contain bank accounts**. Use the direct URL above.

Process: micro-deposit verification + email confirmation link (must click within 24h).

## Sources

[Vivid top-up](https://support.vivid.money/en/articles/8912320-what-s-an-instant-top-up) · [Vivid Prime](https://support.vivid.money/en/articles/8658613-what-s-vivid-prime) · [Vivid Plus](https://support.vivid.money/en/articles/10010274-what-s-vivid-plus) · [bunq limits](https://help.bunq.com/articles/what-are-the-limits-topping-up-using-your-card) · [bunq Free](https://help.bunq.com/articles/what-are-the-benefits-of-the-bunq-free-plan) · [NeoBank for EU Businesses](https://businessbank.idr.net)
