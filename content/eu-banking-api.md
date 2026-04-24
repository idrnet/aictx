---
title: "EU Neobank API Access"
description: "Direct API vs PSD2 aggregator for Revolut, bunq, and Spanish banks. April 2026."
lastUpdated: "2026-04-24"
---

Which EU neobanks let you read your own transactions programmatically — and at what cost?

## TL;DR

| Bank | Free Direct API | Catch |
|------|----------------|-------|
| **bunq** | ✅ Yes (Pro plan required) | €9.99/mo Pro, API key auth |
| **Revolut Business** | ✅ Yes (Grow plan required) | €25/mo Grow, OAuth2 |
| **Revolut Personal** | ❌ No | No public API — PSD2 TPP only |
| **Revolut Pro** | ❌ No | Freelancer tier, no API access |
| **BBVA / CaixaBank / Santander / ING** | ⚠️ Sandbox free, prod = TPP cert | PSD2 TPP license = expensive + regulated |
| **Vivid** | ❌ Not via Enable Banking | Uses finAPI as PSD2 hub |

## Direct APIs

### bunq
- Full REST API at [doc.bunq.com](https://doc.bunq.com)
- Auth: API key (generated in app → Security → API keys)
- Requires **bunq Pro** (€9.99/mo) or higher — Core (free) plan excludes API access
- Covers: balances, transactions, payments, cards, user details
- Rate limit: 3 req/s

### Revolut Business
- API at [developer.revolut.com](https://developer.revolut.com/docs/business/business-api)
- Auth: OAuth2 with your own Business account
- Requires **Grow plan** (~€25/mo) or above
- Covers: accounts, transactions, payments, counterparties
- Free plan and Freelancer/Pro tiers: no API access

### Revolut Personal
No public API exists for personal accounts. The only programmatic access is via PSD2 (requires a regulated TPP license — expensive and not practical for personal automation).

## PSD2 Aggregators (e.g. Enable Banking)

Services like [Enable Banking](https://enablebanking.com), Salt Edge, and Nordigen act as TPP intermediaries — they hold the PSD2 license and expose a unified API across hundreds of banks.

**When aggregators beat direct APIs:**
- You need access to banks without developer APIs (Spanish banks, traditional lenders)
- You hold multiple accounts across different banks and want one API
- You don't qualify for or want a bank's business plan tier

**When direct APIs beat aggregators:**
- You already pay for the required bank plan (Grow / Pro)
- You want fewer moving parts and lower latency
- The aggregator fee exceeds the plan upgrade cost

## Spanish Banks (BBVA, CaixaBank, Santander, ING)

All are PSD2-compliant and technically offer open banking APIs. However:
- **Sandbox**: free, good for testing
- **Production**: requires a PSD2 TPP license (regulated financial license, months to obtain, ongoing compliance cost)

For personal/business automation on your own accounts, **an aggregator like Enable Banking is the practical route** — the TPP license cost far exceeds the aggregator fee.

## Monese

- No public API (business or personal)
- Business onboarding currently paused (as of early 2026)
- Incoming SEPA transfers: free; outgoing EUR SEPA: free; card top-up: €3k/day limit
- Stronger than bunq for: simpler onboarding (no EU residency requirement in some countries)
- Weaker than bunq for: currency coverage (GBP/EUR/RON only vs bunq's 22 currencies), no API, e-money institution only (not full banking license)

## Related

- [EU IBAN + Credit Card Top-Up](/eu_iban-apple_pay-topup) — neobank comparison for free CC top-up + instant SEPA
