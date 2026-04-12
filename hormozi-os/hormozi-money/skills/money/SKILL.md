---
name: hormozi-money
version: 1.0.0
description: >
  Apply Alex Hormozi's $100M Money Models framework to any revenue problem.
  Trigger when the user asks about: pricing, revenue models, monetization, subscriptions,
  product pricing, how to make more money, increasing revenue per customer, LTV optimization,
  reducing churn, building continuity offers, designing upsell ladders, choosing a business
  model, cash flow problems, pricing strategy, value-based pricing, when to raise prices,
  how to structure payment plans, or "what's the best way to monetize [X]". Also trigger on:
  "I'm undercharging", "I want to add recurring revenue", "how do I increase LTV",
  "which model makes more money", "should I offer monthly or annual", "design my pricing page".
sources:
  - "$100M Offers — Alex Hormozi (Acquisition.com Volume I)"
  - "$100M Leads — Alex Hormozi (Acquisition.com Volume II)"
  - "ACQ Money Models Framework — Acquisition.com"
---

# Hormozi Money — Skill v1.0

> "Price is a positioning decision before it is a math decision."
> "The goal is not to make more sales. The goal is to make more money per sale."
> "More before Better before New — in that exact order."

This skill operationalizes the complete ACQ money models framework into 4 executable workflows.
Works alongside **hormozi-offers** (pricing and value stacking) and **hormozi-scale** (LTV:CAC governs scale decisions).

---

## Workflow Selection

| Intent | Workflow |
|---|---|
| "Which model should I use?" / "Design my monetization" | → [Workflow 1: Revenue Model Selector](#wf1) |
| "How should I price this?" / "Design my pricing page" | → [Workflow 2: Pricing Architecture](#wf2) |
| "How do I increase LTV?" / "Reduce churn" | → [Workflow 3: LTV Maximizer](#wf3) |
| "What's the best growth move?" / "More vs. Better vs. New" | → [Workflow 4: More/Better/New Engine](#wf4) |

**For new monetization strategy:** chain 1 → 2 → 3 (model first, then price, then maximize LTV).

---

## Workflow 1: Revenue Model Selector {#wf1}

**Source:** $100M Money Models — ACQ Framework

### The 4 Money Models

#### Model 1 — Products

**What it is:** One-time purchase of a physical or digital deliverable.
**Best for:** High-volume, lower-touch, transactional businesses.

| Sub-type | Example | Pros | Cons |
|---|---|---|---|
| Physical products | Equipment, tools, goods | Tangible value, scalable | COGS, returns, logistics |
| Digital products | Courses, templates, tools | Zero marginal cost | Easy to pirate, commoditizes quickly |
| Info products | Books, guides, reports | Low cost to produce | Low perceived value without proof |

**Revenue math:** Units × Price − COGS = Gross Profit
**Key lever:** Volume + average order value (AOV)

---

#### Model 2 — Subscriptions

**What it is:** Recurring payment for ongoing access, service, or product.
**Best for:** Businesses where ongoing value justifies recurring payment.

| Sub-type | Example | Key Metric |
|---|---|---|
| SaaS | Software platform | MRR, churn rate, NRR |
| Membership | Community, content access | Retention, engagement |
| Continuity | Replenishment, service plan | Cancellation rate |
| Retainer | Ongoing consulting, agency | NPS, renewal rate |

**Revenue math:** MRR × (1 − Monthly Churn) compounded over time
**Key lever:** Reduce churn. Cutting churn 50% can double LTV without acquiring a new customer.

**Churn LTV table:**

| Monthly Churn | Average Lifespan | LTV (at $500/mo, 70% GM) |
|---|---|---|
| 2% | 50 months | $17,500 |
| 5% | 20 months | $7,000 |
| 10% | 10 months | $3,500 |
| 20% | 5 months | $1,750 |

---

#### Model 3 — Services

**What it is:** Payment for labor, expertise, or outcomes.
**Best for:** High-touch businesses where human judgment creates the value.

| Sub-type | Example | Scalability |
|---|---|---|
| Done-For-You (DFY) | Agency, consulting | Limited by headcount |
| Done-With-You (DWY) | Coaching, consulting | Moderate |
| Done-By-You (DIY) | Training, courses | High |

**Revenue math:** Price × Volume − (Labor Cost + Overhead) = Profit
**Key lever:** Raise prices (most underused lever in service businesses); increase capacity through systems.

> Rule: Service businesses that can't raise prices have not proven enough ROI for the client. Fix the proof and the price follows.

---

#### Model 4 — Assets

**What it is:** Build, buy, or license something that generates passive or semi-passive income.
**Best for:** Businesses that have proven a model and want to create leveraged income.

| Sub-type | Example | Capital Required |
|---|---|---|
| Equity in businesses | M&A, roll-ups | High |
| Licensing / royalties | IP licensing, white-label | Low-Medium |
| Real estate | Commercial, residential | High |
| Digital assets | SEO sites, newsletters | Low-Medium |
| Franchises | Licensed operating models | Medium |

**Revenue math:** Yield × Asset Value = Annual Cash Flow
**Key lever:** Capital deployment efficiency + asset selection

---

### Model Selection Matrix

Score each model 1–5 on criteria relevant to your situation:

| Criteria | Products | Subscriptions | Services | Assets |
|---|---|---|---|---|
| Low startup capital needed | 3 | 4 | 5 | 1 |
| Scales without you | 4 | 5 | 1 | 5 |
| Predictable revenue | 2 | 5 | 3 | 4 |
| Highest LTV | 2 | 5 | 4 | 5 |
| Fastest to first dollar | 3 | 3 | 5 | 1 |
| Lowest overhead | 4 | 4 | 3 | 3 |

**Default recommendation by stage:**
- $0–$100k/year: Services first (fastest path to revenue)
- $100k–$1M/year: Services + Subscriptions (add recurring)
- $1M+/year: Services + Subscriptions + Assets (build passive)

### Output: Revenue Model Brief

```
REVENUE MODEL BRIEF
============================
BUSINESS:         [offer + ICP + stage]
RECOMMENDED MODEL: [Primary + Secondary if applicable]
RATIONALE:        [why this combination]
MONETIZATION STACK:
  Entry offer:    [low-friction first purchase]
  Core offer:     [primary revenue driver]
  Continuity:     [recurring revenue element]
  Asset building: [if applicable]
MONTHLY REVENUE POTENTIAL: [estimate at scale]
============================
```

**Deep dive:** `references/four-models.md`

---

## Workflow 2: Pricing Architecture {#wf2}

**Source:** $100M Offers — Pricing Framework

### The Pricing Principle

> "Price is a byproduct of positioning. Position first, price second."

Price communicates value. Underpricing signals low quality. Overpricing with no proof signals risk.

**The Grand Slam Pricing Rule:** Charge what the transformation is worth, not what the deliverable costs to produce.

### The 4-Tier Pricing Ladder

Every monetization system should have 4 tiers:

```
TIER 1 — Lead Magnet (Free)
  Purpose: Convert strangers to contacts
  Price: $0
  Examples: Checklist, calculator, case study, mini-course

TIER 2 — Entry Offer (Low Friction)
  Purpose: Convert contacts to buyers; break the non-buyer identity
  Price: $1 – $297 (consumer) | $500 – $2,000 (B2B)
  Examples: Workshop, template pack, short course, audit

TIER 3 — Core Offer (Primary Revenue)
  Purpose: Deliver the primary transformation; primary revenue driver
  Price: $500 – $5,000 (consumer) | $3,000 – $50,000+ (B2B)
  Examples: Full program, DFY service, consulting engagement

TIER 4 — Continuity / Ascension (Maximum LTV)
  Purpose: Extend relationship and revenue over time
  Price: Monthly subscription or higher-tier upgrade
  Examples: Mastermind, retainer, membership, advanced program
```

### The Value Anchor (from $100M Offers)

Always establish a value anchor before revealing price:

1. List all deliverables in the offer (see hormozi-offers: grand-slam-stack)
2. Assign standalone market value to each
3. Sum to get the total value
4. Reveal actual price (minimum 5:1 gap; Grand Slam = 10:1+)

**Example:**
- Strategy session ($2,000) + Implementation ($8,000) + Tools ($1,500) + Support ($3,600/year) = $15,100 total value
- Price: $3,000
- Gap: 5:1 ✅

### Pricing Models by Business Type

| Business Type | Recommended Model | Why |
|---|---|---|
| Agency / DFY service | Milestone-based or performance-based | Aligns incentives; reduces price objections |
| High-ticket coaching | One-time program fee | Clean; easy to sell |
| SaaS | Monthly with annual discount (2 months free) | Reduces churn; improves cash flow |
| Course / info product | One-time purchase + optional upsell | Simple; high conversion |
| Consulting retainer | Monthly retainer + performance kicker | Predictable; incentivized |
| Membership | Monthly subscription + annual option | Flexibility + retention incentive |

### Annual vs. Monthly Pricing

**Rule:** Always offer annual. Annual plans:
- Reduce monthly churn dramatically
- Improve cash flow (money upfront)
- Increase commitment → increase results → increase renewals

**Standard discount:** 2 months free (16.7% discount) or 20% off annual.

### Output: Pricing Architecture

```
PRICING ARCHITECTURE
============================
TIER 1 (Free):     [Lead magnet name + format]
TIER 2 (Entry):    $[X] — [offer name] — [what it includes]
TIER 3 (Core):     $[X] — [offer name] — [value stack + anchor]
TIER 4 (Continuity): $[X]/month — [offer name] — [what keeps them]
VALUE ANCHOR:      $[Total standalone value] → Price $[X] → Gap [X]:1
RECOMMENDED PAYMENT: [monthly / annual / one-time / payment plan]
============================
```

**Deep dive:** `references/pricing-architecture.md`

---

## Workflow 3: LTV Maximizer {#wf3}

**Source:** ACQ LTV Framework

> "The customer who already bought is 5–10x easier to sell than a stranger."
> "The question is never 'how do I get more customers?' before 'how do I make each customer worth more?'"

### The 5 LTV Levers

**Lever 1 — Raise Prices**
- The single most underused lever in service businesses
- Raising prices 20% while keeping the same customers = 20% revenue increase, 0 new customers
- Gate: proof must justify the price; use hormozi-offers proof stack first

**Lever 2 — Reduce Churn**
- Cutting monthly churn from 10% to 5% doubles LTV
- Churn fix hierarchy: Onboarding → Value delivery speed → Community stickiness → Annual billing

**Lever 3 — Increase Purchase Frequency**
- More purchases per customer per year
- Design the natural "what's next" for every completed customer
- Upsell ladder: Entry → Core → Continuity → Premium → Asset

**Lever 4 — Increase Average Order Value**
- Upsell at point of purchase ("Would you like to add X for $Y more?")
- Bundle complementary products (increases AOV without new product)
- Payment plans (makes higher prices accessible; doesn't reduce LTV)

**Lever 5 — Extend Relationship Duration**
- Annual billing (locks in 12 months)
- Community (switching cost = social capital)
- Results delivered = reason to stay + upsell

### LTV Audit Scorecard

Score each lever 1–5 (1 = untouched, 5 = maximized):

| Lever | Score | Priority Action |
|---|---|---|
| Prices | /5 | [action] |
| Churn | /5 | [action] |
| Purchase frequency | /5 | [action] |
| AOV | /5 | [action] |
| Relationship duration | /5 | [action] |

**Total: /25** — Anything below 15 = significant LTV upside available before acquiring more customers.

### Output: LTV Optimization Plan

```
LTV OPTIMIZATION PLAN
============================
CURRENT LTV:      $[X]
TARGET LTV:       $[X] (in 90 days)
LEVER SCORES:     [each lever score/5]
TOP 3 ACTIONS:
  1. [action] → expected LTV impact: +$[X]
  2. [action] → expected LTV impact: +$[X]
  3. [action] → expected LTV impact: +$[X]
NEW LTV PROJECTION: $[X]
LTV:CAC IMPACT:   [current ratio] → [projected ratio]
============================
```

**Deep dive:** `references/ltv-maximizer.md`

---

## Workflow 4: More/Better/New Engine {#wf4}

**Source:** ACQ Scaling + Money Models Framework

### The Framework

At every revenue milestone, there is exactly one highest-ROI move:

```
Until volume is the constraint → MORE (do more of what's working)
Until quality is the constraint → BETTER (improve what's working)
Until you've maxed the current → NEW (add something new)
```

**Why this matters for money:**
- Adding a new revenue stream before the core is optimized = distraction tax
- Optimizing before you've maxed volume = premature optimization
- "New" before "Better" = building on a broken foundation

### The Money Decision Tree

```
Is current revenue model producing consistent results?
  NO → Phase 1: More volume. Do not change the model.
  YES ↓

Is pricing optimized? (Value anchor + 5:1 gap + upsell ladder in place?)
  NO → Phase 2: Better pricing + LTV. Do not add new revenue streams.
  YES ↓

Is LTV maximized? (All 5 levers scored 4+/5?)
  NO → Phase 2: Optimize LTV. Do not add new revenue streams.
  YES ↓

Is the current model at capacity?
  NO → More volume on existing model.
  YES → Phase 3: Add new revenue stream (next tier on the 4-model ladder).
```

### New Revenue Stream Priority

When Phase 3 is confirmed, add revenue streams in this order:

1. **Continuity** — recurring version of your current offer (if not already in place)
2. **Upsell** — premium tier of your current offer
3. **Downsell / Entry offer** — capture people who won't pay the core price
4. **Adjacent offer** — different problem, same ICP
5. **New model** — different delivery mechanism or revenue type

### Output: More/Better/New Decision

```
MORE/BETTER/NEW DECISION
============================
CURRENT STAGE:    [revenue + model + primary channel]
PHASE:            [More / Better / New]
EVIDENCE:         [3 reasons why this is the correct phase]
RECOMMENDED MOVE: [specific, single action]
EXPECTED IMPACT:  $[X] additional revenue over [timeframe]
WHAT TO AVOID:    [the tempting-but-wrong move for this phase]
============================
```

**Deep dive:** `references/more-better-new.md`
