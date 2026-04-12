---
name: hormozi-scale
version: 1.0.0
description: >
  Apply Alex Hormozi's scaling framework to grow a business past its current ceiling.
  Trigger when the user asks about: scaling a business, removing bottlenecks, hiring the
  right people, building systems, automation, SOPs, delegation, operations, revenue growth,
  LTV:CAC analysis, unit economics, when to hire, what to systemize, business audits,
  growth plateaus, or "I'm the bottleneck in my business". Also trigger on: "we're stuck at
  $X/month", "I don't know what to fix first", "should I hire or automate", "how do I
  get out of the day-to-day", "scale without burning out", "what's limiting my growth".
sources:
  - "$100M Leads — Alex Hormozi (Acquisition.com Volume II)"
  - "Acquisition.com Scaling Framework — Internal ACQ Playbook"
  - "$100M Offers — Alex Hormozi (pricing + unit economics)"
---

# Hormozi Scale — Skill v1.0

> "The bottleneck is always one thing. Find it. Remove it. Find the next one."
> "You are not the business. You are the constraint."
> "More. Then Better. Then New. In that order."

This skill operationalizes the complete ACQ scaling framework into 4 executable workflows.
Works downstream of **hormozi-leads** (needs lead flow first) and alongside **hormozi-money** (unit economics drive scale decisions).

---

## Workflow Selection

| Intent | Workflow |
|---|---|
| "Scale my business" / "What do I fix first?" | → [Workflow 1: Scale Readiness Audit](#wf1) |
| "What's holding me back?" / "I'm stuck at $X" | → [Workflow 2: Bottleneck Elimination System](#wf2) |
| "Who do I hire next?" / "Should I delegate this?" | → [Workflow 3: Hiring Blueprint](#wf3) |
| "Build an SOP" / "Automate this process" | → [Workflow 4: Systems & Automation Builder](#wf4) |

**For full scaling strategy:** chain 1 → 2 → 3 → 4 (audit first, remove bottleneck, hire for it, then systemize it).

---

## Workflow 1: Scale Readiness Audit {#wf1}

**Source:** ACQ Scaling Framework

### The Scale Sequence (must follow in order)

```
PHASE 1 → More:    Volume is the constraint. Do more of what works.
PHASE 2 → Better:  Quality-volume is the constraint. Improve the thing that works.
PHASE 3 → New:     You've maxed the channel/offer. Add a new one.
```

> **Critical rule:** Never move to "Better" while volume is still the constraint.
> Never move to "New" while quality is still the constraint.
> Most businesses add new channels when they should be doubling down on what's working.

### Phase Determination Scorecard

Answer each question Yes/No:

**Phase 1 Check (Are you doing MORE than what's working?)**
- [ ] Are you executing the primary lead channel at full capacity?
- [ ] Have you hit ≥ 10 paying warm customers?
- [ ] Is your weekly lead volume predictable and consistent?
- [ ] Is the team working the same winning process every week?

If any are NO → you are in Phase 1. Do more.

**Phase 2 Check (Is volume solved — now improve quality?)**
- [ ] Lead volume is consistent and meeting targets
- [ ] Closing rate is below 30% on qualified calls
- [ ] Customer result / delivery quality has variance
- [ ] LTV:CAC ratio is below 3:1

If any are YES → you are in Phase 2. Make it better.

**Phase 3 Check (Is MORE + BETTER maximized — now go NEW?)**
- [ ] Volume at capacity (you can't do more without hiring/systemizing)
- [ ] Quality optimized (close rate ≥ 30%, delivery consistent, LTV:CAC ≥ 3:1)
- [ ] TAM starting to feel constrained in current niche
- [ ] Cash/team runway to support a new channel or offer without killing the core

If all YES → Phase 3. Start new.

### LTV:CAC Pre-Requisite Check

Before scaling any paid acquisition, verify unit economics:

```
LTV:CAC = (Average Revenue Per Customer × Gross Margin × Avg. # of Purchases)
          ÷ (Total Sales + Marketing Cost ÷ # New Customers Acquired)
```

| Ratio | Interpretation | Action |
|---|---|---|
| < 1:1 | Losing money per customer | Fix offer, pricing, or retention immediately |
| 1:1 – 2:1 | Breaking even | Not safe to scale; improve before spending more |
| 3:1 | Minimum viable for paid scale | Green light to activate paid ads |
| 5:1+ | Healthy growth engine | Aggressive scale authorized |
| 10:1+ | Exceptional — usually means underpriced | Consider raising prices |

### Output: Scale Audit Report

```
SCALE AUDIT REPORT
============================
BUSINESS CONTEXT: [revenue + team size + primary offer + primary channel]

PHASE DIAGNOSIS:
  Current Phase:    [1: More / 2: Better / 3: New]
  Evidence:         [3 specific observations]
  Primary Action:   [single most leveraged move]

LTV:CAC CHECK:
  Current LTV:      $[X]
  Current CAC:      $[X]
  Ratio:            [X]:1
  Status:           [GATE MET / NOT MET for paid scale]

TOP 3 BOTTLENECKS:
  1. [Bottleneck] → Impact → Fix
  2. [Bottleneck] → Impact → Fix
  3. [Bottleneck] → Impact → Fix

30-DAY ACTION PLAN:
  Week 1: [specific action]
  Week 2: [specific action]
  Week 3: [specific action]
  Week 4: [specific action]
============================
```

**Deep dive:** `references/scale-sequence.md` and `references/ltv-cac-models.md`

---

## Workflow 2: Bottleneck Elimination System {#wf2}

**Source:** ACQ Constraint Theory Framework (inspired by Goldratt's Theory of Constraints)

### The Rule of the Single Constraint

> "There is always exactly one bottleneck. Solving two at once means you're optimizing the wrong one."

The bottleneck is always in one of 5 locations:

```
1. LEADS          — not enough people entering the funnel
2. CONVERSION     — leads are coming in but not buying
3. FULFILLMENT    — delivery is the rate limiter on capacity
4. CASH           — cash flow limits how fast you can scale
5. FOUNDER        — you are personally the single point of failure
```

### Bottleneck Diagnostic

**Step 1 — Locate the constraint:**

| Symptom | Likely Bottleneck |
|---|---|
| Not enough leads | Leads |
| Leads coming in, low close rate | Conversion |
| Leads closing, but capacity is full | Fulfillment |
| Revenue growing, but cash tight | Cash (see hormozi-money) |
| Team waiting on you for decisions | Founder |

**Step 2 — Quantify the bottleneck:**
- How many units/hours/people/dollars is it currently processing?
- What is the theoretical maximum?
- What is the gap?

**Step 3 — Exploit before you elevate:**
- Exploit: maximize what you have before adding resources
- Subordinate: make everything else serve the constraint
- Elevate: add resources only after exploitation is maxed

### Founder Bottleneck (Most Common at $100k–$1M/month)

The founder is the constraint when:
- They are in the critical path of sales, delivery, or ops
- Decisions require their personal approval
- Team cannot execute without their input
- Revenue growth requires their personal time to grow

**Elimination path:**
```
1. Document everything you do → SOP it (Workflow 4)
2. Identify which task has the lowest $/hour value → delegate first
3. Hire to replace yourself in one function per 90 days
4. Build decision frameworks so team decides without you
```

### Output: Bottleneck Elimination Plan

```
BOTTLENECK ELIMINATION PLAN
============================
IDENTIFIED CONSTRAINT:  [which of the 5 areas]
EVIDENCE:               [3 specific data points or observations]
CURRENT THROUGHPUT:     [what it's processing now]
THEORETICAL MAX:        [what it could process]
GAP:                    [the delta]

EXPLOIT ACTIONS (do these first — no new resources):
  1. [specific action]
  2. [specific action]

ELEVATION ACTIONS (add resources):
  1. [hire / tool / system]
  2. [hire / tool / system]

EXPECTED RESULT: [what unlocks when this constraint is removed]
NEXT CONSTRAINT: [what becomes the bottleneck after this one is fixed]
============================
```

**Deep dive:** `references/scale-sequence.md`

---

## Workflow 3: Hiring Blueprint {#wf3}

**Source:** ACQ Hiring Framework

### The Hiring Priority Rule

> "Hire to replace yourself in the thing that generates the least revenue per hour of your time."

### Value-Per-Hour Delegation Matrix

**Step 1 — List every task you do in a week**
**Step 2 — Assign a $/hour value to each:**

| Your Task | Your Hourly Rate | Task Market Rate | Leverage |
|---|---|---|---|
| CEO strategy | $1,000/hr | $1,000/hr (irreplaceable) | — |
| Sales calls | $500/hr | $150/hr (closers) | 3.3x |
| Fulfillment | $200/hr | $50/hr (specialist) | 4x |
| Admin / ops | $300/hr | $20/hr (VA) | 15x |
| Content editing | $300/hr | $30/hr (editor) | 10x |

**Hire in order of highest leverage (market rate vs. your rate).**

### The First 4 Hires (ACQ Sequence)

For most service businesses in the $100k–$1M/month range:

```
Hire 1 → VA / Operations (removes admin, scheduling, low-leverage tasks)
Hire 2 → Fulfillment specialist (removes you from delivery)
Hire 3 → Setter / SDR (removes you from lead qualification)
Hire 4 → Closer (removes you from sales calls)
```

After these 4: hire a COO/Integrator (removes you from management).

### Hire Profile Framework

For each hire, define:

```
HIRE PROFILE
========================
Role name:          [specific title]
Replacing you in:   [specific tasks / hours/week freed]
Lever ratio:        [your $/hr ÷ hire market rate]
Outcome owned:      [one measurable metric this person owns]
Hiring criteria:    [3 must-haves — not nice-to-haves]
Compensation:       [base + variable structure]
Onboarding:         [first 30 days — what does winning look like?]
Success at 90 days: [specific, measurable outcome]
========================
```

### Output: Hiring Action Plan

```
HIRING ACTION PLAN
============================
CURRENT BOTTLENECK ROLE:  [role to hire first]
LEVER RATIO:              [X]x
TASKS FREED:              [list]
HOURS FREED/WEEK:         [number]
REVENUE VALUE OF TIME:    $[X]/week unlocked
HIRE PROFILE:             [full profile above]
SOURCING STRATEGY:        [where to find them — community / referral / platform]
============================
```

**Deep dive:** `references/hiring-blueprint.md`

---

## Workflow 4: Systems & Automation Builder {#wf4}

**Source:** ACQ Systems Framework

### The Systemization Rule

> "If you do it twice, document it. If you document it, delegate it. If you delegate it, automate it."

### 3-Tier Decision Framework

Before building any system, classify the task:

| Tier | Type | Action |
|---|---|---|
| Tier 1 | High-judgment, high-value | Keep with founder — do NOT systemize |
| Tier 2 | Repeatable with clear rules | Systemize → SOP → Delegate |
| Tier 3 | Fully rule-based, no judgment | Systemize → Automate → Remove from team |

### SOP Construction Formula

Every SOP must include:

```
SOP TEMPLATE
========================
Process name:       [what this does]
Trigger:            [what starts this process]
Owner:              [who is responsible]
Frequency:          [how often / under what conditions]
Inputs:             [what they need to start]
Steps:
  1. [Action] → [Tool/Platform] → [Expected output]
  2. ...
  N. [Last step: quality check or delivery]
Output:             [what gets produced]
Success criteria:   [how you know it was done right]
Escalation:         [what to do if something goes wrong]
========================
```

### Automation Tier List

| Tool Type | Best For | Examples |
|---|---|---|
| CRM + pipeline | Lead tracking, follow-up | HubSpot, GoHighLevel, Salesforce |
| Scheduling | Call booking, reminders | Calendly, Acuity |
| Email sequences | Nurture, onboarding, follow-up | ActiveCampaign, ConvertKit |
| Workflow automation | Cross-app triggers | Zapier, Make (Integromat) |
| AI agents | Content, research, support | Claude, GPT-4o, n8n |
| Payments + contracts | Revenue collection | Stripe, PandaDoc |

### Automation Priority Scoring

Score each process 1–5 on:
- **Frequency** (how often does it happen?)
- **Time cost** (how long does it take each time?)
- **Error rate** (how often do humans get it wrong?)
- **Human judgment required** (low = good automation candidate)

Highest-scoring processes = automate first.

### Output: Systems Build Plan

```
SYSTEMS BUILD PLAN
============================
PROCESS:            [name]
TIER:               [1 / 2 / 3]
PRIORITY SCORE:     [X]/20
CURRENT STATE:      [how it's done now]
TARGET STATE:       [how it runs after systemization]
SOP:                [link or embedded SOP]
AUTOMATION:         [tool + trigger + action]
OWNER AFTER BUILD:  [who runs this going forward]
BUILD TIME:         [estimated hours]
ROI:                [hours/week saved × weeks/year × hourly rate]
============================
```

**Deep dive:** `references/automation-playbook.md`
