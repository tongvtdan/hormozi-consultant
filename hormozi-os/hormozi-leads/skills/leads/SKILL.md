---
name: hormozi-leads
version: 1.0.0
description: >
  Apply Alex Hormozi's $100M Leads framework to get strangers to want to buy.
  Trigger when the user asks about: lead generation, getting more leads, lead magnets,
  content strategy, warm outreach, cold outreach, paid ads, growing an audience, building
  a following, filling a calendar, acquiring customers, market analysis, validating an idea,
  identifying a target market, writing hooks, writing headlines, writing ad copy, or
  building a content machine. Also trigger on: "I'm not getting enough leads", "how do I
  grow my audience", "help me get more clients", "nobody knows about my offer", "I need
  a lead magnet", "what market should I be in", "write me some hooks".
sources:
  - "$100M Leads — Alex Hormozi (Acquisition.com Volume II)"
  - "ACQ Closer Handbook — Alex Hormozi"
  - "$100M Offers — Alex Hormozi (for market selection)"
---

# Hormozi Leads — Skill v1.0

> "It's hard to be poor with leads bangin' down your door." — Hormozi family jingle
> "A lead is a person you can contact. An engaged lead shows interest in the stuff you sell."
> "All else being equal... when you double your leads, you double your business."

This skill operationalizes the complete $100M Leads framework into 4 executable workflows.
Works upstream of **hormozi-offers** (offers need traffic) and **hormozi-scale** (scale needs consistent lead flow).

---

## Workflow Selection

| Intent | Workflow |
|---|---|
| "Get me more leads" / "Build a lead gen system" | → [Workflow 1: Lead Gen System Builder](#wf1) |
| "Create a lead magnet" / "I need a free offer" | → [Workflow 2: Lead Magnet Designer](#wf2) |
| "What market should I target?" / "Validate my idea" | → [Workflow 3: Market Breakdown System](#wf3) |
| "Write hooks" / "Ad copy" / "Content ideas" | → [Workflow 4: Hooks & Headline Engine](#wf4) |

**For full acquisition systems:** chain 3 → 2 → 1 (market first, then magnet, then channels).

---

## Workflow 1: Lead Gen System Builder {#wf1}

**Source:** $100M Leads — Core Four Framework

### The Core Four (always activate in this order — never skip steps)

```
1. Warm Outreach    → Fastest path to first dollar
2. Content Machine  → Builds compounding organic authority
3. Cold Outreach    → Scalable once offer is proven warm
4. Paid Ads         → Amplifies what already converts
```

> **Critical sequencing rule:** Warm before cold. Organic before paid.
> Starting with paid ads before warm validation = spending money to discover the offer doesn't work.

### Channel 1 — Warm Outreach

**Goal:** Book conversations. Not sell. Check if they have the problem.

**Daily target:** 10+ genuine warm conversations

**Setter Script (from ACQ Closer Handbook):**
```
Opening:    "Hey [Name] — how have ya been?"
Context:    "[Personalized observation about their business/situation]"
Question:   "Are you still dealing with [specific problem you solve]?"
Bridge:     "I've helped [2-3 similar people] achieve [specific result] in [timeframe]"
CTA:        "Would 15 minutes make sense to see if it applies to your situation?"
```

**Rules:**
- Never pitch in the first message
- Always end with a yes/no question
- Follow up 3x over 7 days if no response
- Confirm decision-making authority before the next call

### Channel 2 — Content Machine

The only scalable "free forever" channel. Builds trust at scale.

| Platform | Format | Frequency | Goal |
|---|---|---|---|
| TikTok/Reels/Shorts | 30–90 sec hook + lesson + CTA | Daily | Organic reach |
| YouTube | 10–20 min deep dive / case study | Weekly | Authority + SEO |
| LinkedIn/Newsletter | 300–800 word framework or story | 3×/week | B2B trust |
| X (Twitter) | Thread or single insight | Daily | Distribution |
| Skool/Discord | Discussion + AMA | Daily | Community |

**Content Flywheel:**
```
POST → Engagement → Lead magnet CTA → Contact captured
→ Nurture → Offer presented → Client converts
→ Result → Case study → Back to POST
```

### Channel 3 — Cold Outreach

**Only activate after:** ≥5 paying warm customers + proven offer + validated script

Same script as warm outreach — personalized at scale.
Volume target: 50–100 personalized touches/day.
Follow-up cadence: 5–7 touches over 14 days before marking cold.

Minimum personalization: reference one specific, researched detail about their business.

### Channel 4 — Paid Ads

**Gate criteria (all must be met before spending):**
- [ ] LTV:CAC ratio confirmed > 3:1 (from hormozi-scale audit)
- [ ] Offer validated via warm outreach (≥ 10 paying customers)
- [ ] Lead magnet tested and converting organically
- [ ] Closing rate on qualified calls ≥ 20%

**Ad creative formula:** Hook (from Workflow 4) → Case study proof (identical ICP) → Lead magnet CTA → Single next step

### Output: Lead Gen System Brief

```
LEAD GEN SYSTEM BRIEF
============================
BUSINESS CONTEXT: [offer + ICP + current stage]

WARM OUTREACH:
  Target list:    [warm contacts, referrals, past clients, communities]
  Script:         [adapted from setter template above]
  Daily target:   10+ conversations
  Follow-up:      3x over 7 days

CONTENT MACHINE:
  Primary channel: [where ICP concentrates]
  Content pillars: [2-3 from reference/content-machine.md]
  Lead magnet CTA: [embedded in every post]
  Posting cadence: [per table above]

LEAD MAGNET:    [from Workflow 2]

COLD OUTREACH:
  Status:         [activate after X warm clients]
  Personalization: [what to reference per contact]

PAID ADS:
  Status:         [gate criteria status — activate when all met]
  Offer to run:   [validated lead magnet]
  Proof asset:    [best identical-ICP case study]
============================
```

**Deep dive:** `references/core-four-channels.md` and `references/outreach-scripts.md`

---

## Workflow 2: Lead Magnet Designer {#wf2}

**Source:** $100M Leads — Lead Magnet Framework

### What a Lead Magnet Does

A lead magnet is a **complete solution to a narrow problem** that makes the prospect aware of a larger problem — which your core offer solves.

```
Prospect has [broad problem]
  → Lead magnet solves [narrow sub-problem] for free
  → Solution reveals [next bigger problem]
  → Core offer solves [next bigger problem] for money
```

Example: "What's my home worth?" (narrow free) → "I still need to actually sell it" (core paid offer)

> "A person who pays with their time now is more likely to pay with their money later."

### 3 Types of Lead Magnets

1. **Awareness magnet** — reveals a problem they didn't know they had
2. **Trial/sample** — lets them experience the core offer result at a small scale
3. **One step in a multi-step process** — delivers value from step 1; the rest requires the full offer

### 7-Step Design Framework

**Step 1 — Pick the narrow problem and the person**
- Narrow = specific enough to solve completely in one interaction
- After solving it, the next problem must be solvable by your core offer

**Step 2 — Figure out how to solve it**
- Choose type: awareness / trial-sample / one-step-in-process

**Step 3 — Choose delivery format** (from lowest-to-highest effort for the consumer)

| Format | Effort | Best For |
|---|---|---|
| Checklist | Very low | Processes, compliance, launch prep |
| Template | Very low | Anything repeatable |
| Calculator/tool | Low | Quantifiable ROI, scores, comparisons |
| Case study | Low-medium | Proving results for identical ICP |
| Mini-course (3–5 lessons) | Medium | Education-led authority building |
| Free community tier | Medium | Network-effect + high-ticket offers |

> "Tools & checklists > additional trainings." Lower effort = higher Value Equation score.

**Step 4 — Name it with MAGIC formula** (→ use `/hormozi-offers:name-offer` or Workflow 4 of hormozi-offers)

**Step 5 — Make it easy to consume**
Short. Visual. Actionable. Each unit of time invested must feel worth it.

**Step 6 — Make it Grand Slam quality**
"Make your free thing so good people feel stupid saying no."
Apply the same Value Equation scoring to the lead magnet itself.

**Step 7 — One clear CTA to tell you they want more**
Single next step. No ambiguity. No choice paralysis.

### Output: Lead Magnet Spec

```
LEAD MAGNET SPEC
===========================
Problem solved:       [narrow and specific]
For whom (ICP):       [defined from Workflow 3]
Type:                 [awareness / trial-sample / one-step]
Format:               [from 6 formats above]
MAGIC name:           [M-A-G-I-C breakdown]
Next problem revealed: [bridges to core offer]
Delivery mechanism:   [how they access it]
CTA:                  [single next step]
Quality check:        [would they pay for this? Y/N]
===========================
```

**Deep dive:** `references/lead-magnet-library.md`

---

## Workflow 3: Market Breakdown System {#wf3}

**Source:** $100M Offers, Chapter 4 — "A Starving Crowd"

### The Hierarchy (Source-True)

> "Starving Crowd (market) > Offer Strength > Persuasion Skills"

A great offer in a bad market fails every time.
Pick the right market first — then build the offer, then build lead gen.

### 4 Market Criteria (score each 1–10)

| Criterion | Assessment | Hormozi's Warning |
|---|---|---|
| **Massive Pain** | Do they desperately NEED this? Not just want it. | "The degree of pain = the price you can charge" |
| **Purchasing Power** | Can they actually afford premium pricing? | The unemployed resume example — great pain, no money |
| **Easy to Target** | Are they gathered in findable groups? | If you can't reach them efficiently, the offer is moot |
| **Growing Market** | Is the industry expanding? | "Declining markets are like headwinds" (the newspaper example) |

**Score interpretation:** 32–40 = exceptional · 24–31 = good · 16–23 = viable, niche further · <16 = danger

**The Three Markets That Always Exist:** Health · Wealth · Relationships

### Niche Ladder

Drill down 3–4 levels:
- Level 0: "Time Management" → $19
- Level 1: "Time Management for Sales Professionals" → $99
- Level 2: "Time Management for B2B Outbound Sales Reps" → $499
- Level 3: "Time Management for B2B Power Tools Sales Reps" → $2,000

**Rule:** Under $10M/year — always niche down. Above $10M — evaluate TAM before broadening.

### Output: Market Brief

```
MARKET BRIEF
========================
MARKET:         [name]
ENTRY NICHE:    [Level 3–4 description]
ICP:            [avatar statement]

MARKET SCORE:   [X]/40
  Pain:         [X]/10  Money: [X]/10
  Targeting:    [X]/10  Growth: [X]/10

TAM/SAM/SOM:    [sizes]
TOP 3 GAPS:     [underserved opportunities + why underserved]
ENTRY WEDGE:    [specific first offer + rationale]
MONOPOLY PATH:  [defensible position in 3-5 years]
========================
```

**Deep dive:** `references/market-analysis.md`

---

## Workflow 4: Hooks & Headline Engine {#wf4}

### Hook Architecture

```
[Pattern interrupt] + [Specific promise or tension] + [Implicit "keep reading" pull]
```

### The 7 Hook Templates

1. **Contrast:** "Most [people] [common belief]. The top 1% [opposite truth]."
2. **Number:** "[Specific number] [outcome] in [timeframe] — here's exactly how"
3. **Mistake:** "The #1 mistake [ICP] make when [action] (and how to fix it in [time])"
4. **Secret:** "What [authority] never tells you about [topic]"
5. **Story:** "I [painful past state]. Today [transformed state]. Here's what changed."
6. **Question:** "What would you do if [scenario that forces visualization]?"
7. **Bold claim:** "[Counterintuitive statement that is provably true]"

### Headline Formula

```
[Action verb] + [Dream outcome] + [Timeframe] + [Without pain/objection]
```

MAGIC version:
```
[Magnetic reason] + [Avatar] + [Goal] + [Time interval] + [Container word]
```

### Output

For every request, deliver:
- **5 hooks** using 5 different templates
- **1 headline** using the formula
- **1 email subject line** variant
- **Emotional trigger** per hook: fear · status · curiosity · greed · belonging
- **#1 recommended hook** with reason why it will outperform

**Deep dive:** `references/content-machine.md`
