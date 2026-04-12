---
name: hormozi-offers
version: 1.0.0
description: >
  Apply Alex Hormozi's $100M Offers framework to design, score, and improve any offer.
  Trigger when the user asks to: score an offer, improve an offer, build a Grand Slam Offer,
  create an irresistible offer, design a guarantee, price an offer, name an offer, build a
  proof stack, increase conversions, stack bonuses, apply the Value Equation, or use the
  Delivery Cube. Also trigger on: "make this irresistible", "why isn't my offer converting",
  "how should I price this", "create a guarantee for my offer", "what should I name this",
  "nobody believes my claims", "help me prove my results", "build me an offer from scratch".
sources:
  - "$100M Offers — Alex Hormozi (Acquisition.com Volume I)"
  - "$100M Proof Checklist — Alex Hormozi (2024)"
  - "100M Offers Course Checklists (7 checklists)"
---

# Hormozi Offers — Skill v1.0

> "Make people an offer so good they would feel stupid saying no." — Travis Jones (cited by Hormozi)
> "An offer is the thing you say to someone to get them to give you money."

This skill operationalizes the complete $100M Offers framework into 4 executable workflows.
Use in conjunction with **hormozi-leads** (traffic), **hormozi-scale** (growth), and **hormozi-money** (monetization).

---

## Workflow Selection

| Intent | Workflow |
|---|---|
| "Is my offer good?" / "Why isn't this converting?" | → [Workflow 1: Value Equation Scorer](#wf1) |
| "Build me an offer" / "Make this irresistible" | → [Workflow 2: Grand Slam Offer Builder](#wf2) |
| "What should I name this?" / "Make the name convert" | → [Workflow 3: MAGIC Naming Engine](#wf3) |
| "Make my claims believable" / "Build credibility" | → [Workflow 4: Proof Stack Builder](#wf4) |

**For new launches:** chain 2 → 3 → 4 → then hand off to hormozi-leads for acquisition.

---

## Workflow 1: Value Equation Scorer {#wf1}

**Source:** $100M Offers, Chapter 6

### The Formula (Verbatim)

```
Value = (Dream Outcome × Perceived Likelihood of Achievement)
        ÷ (Time Delay × Effort & Sacrifice)
```

| Component | Measures | Direction | Scale |
|---|---|---|---|
| Dream Outcome | Desirability of promised transformation | MAXIMIZE | 1–100 |
| Perceived Likelihood | Believability that THIS person will succeed | MAXIMIZE | 1–100 |
| Time Delay | Wait until first meaningful result | MINIMIZE | 0.01–1.0 |
| Effort & Sacrifice | Customer work, change, or loss required | MINIMIZE | 0.01–1.0 |

**Perfect = 1,000,000.** Denominator components (Time/Effort) have multiplied impact — fixing them is usually 2–5x more powerful than improving the numerator.

### Scoring Tiers

| Score | Rating | Decision |
|---|---|---|
| 1,000,000+ | 🏆 Grand Slam | Scale spend immediately |
| 500k–999k | ⭐⭐⭐ Elite | Minor tweaks, then scale |
| 100k–499k | ⭐⭐ Strong | 1–2 improvements needed |
| 20k–99k | ⭐ Decent | Viable but leaving money on table |
| 5k–19k | ⚠️ Weak | Rework before any marketing spend |
| < 5k | 🚨 Broken | DO NOT run ads. Rebuild the offer. |

### The 4 Fastest Levers

1. **Unconditional guarantee** → maximum Likelihood lift (removes all purchase risk)
2. **Done-for-you element** → crushes Effort score (denominator = multiplied impact)
3. **7-day quick win deliverable** → crushes Time score (denominator = multiplied impact)
4. **Niche the ICP 2 levels** → lifts Dream score (specificity = believability)

### Output: Hormozi Offer Score Report

```
═══════════════════════════════════════
   HORMOZI OFFER SCORE REPORT v1.0
   Source: $100M Offers, Chapter 6
═══════════════════════════════════════
OVERALL SCORE:  [X]
RATING:         [emoji + tier label]
VS PERFECT:     [X]%

── COMPONENT BREAKDOWN ─────────────
Dream Outcome:        [X]/100
Perceived Likelihood: [X]/100
Time Delay:           [X] (lower = better)
Effort & Sacrifice:   [X] (lower = better)

── DENOMINATOR ALERT ───────────────
[Flag if Time > 0.3 or Effort > 0.3 — MULTIPLIED priority]

── WEAKNESSES (priority order) ─────
1. [Component]: [issue] → FIX: [specific action]
2. [Component]: [issue] → FIX: [specific action]

── IMPROVEMENT SCENARIOS ───────────
• [Change] → projected score: [X] (+[delta])

── BOTTOM LINE ─────────────────────
[Single highest-leverage action to take today]
═══════════════════════════════════════
```

**Deep dive:** `references/value-equation.md` — 10 scored examples across niches.

---

## Workflow 2: Grand Slam Offer Builder {#wf2}

**Source:** $100M Offers, Chapters 8–16 + 7 Course Checklists

### Definition (verbatim from book)

> "An offer you present to the marketplace that cannot be compared to any other product or service available, combining an attractive promotion, an unmatchable value proposition, a premium price, and an unbeatable guarantee with a money model that allows you to get paid to get new customers."

### The Full 8-Layer Stack

**Layer 1 — Market & Niche Selection** *(Checklist I)*

Four non-negotiables. All must score ≥ 7/10:
- **Massive Pain** — "The pain is the pitch." Proportional pain = proportional price
- **Purchasing Power** — Can they afford premium? (The unemployed resume counter-example)
- **Easy to Target** — Are they gathered? (associations, communities, job titles, events)
- **Growing Market** — Tailwinds amplify everything; headwinds kill even good offers

Niche down **3–4 levels**. Same content at Level 4 niche = 100x price of Level 0:
> Health → Weight Loss → Post-Partum → Keto Without Meal Prep for Breastfeeding Moms

**Layer 2 — Dream Outcome**
- "From [painful current state] to [vivid future state] in [specific timeframe]"
- Add downstream benefits: "...which means [next benefit], which means [identity shift]"
- Specificity increases Dream score: "23 lbs in 6 weeks" > "lose weight"

**Layer 3 — Problem → Solution Matrix** *(Checklist V)*
- List EVERY obstacle before, during, and after the goal
- For each: what makes it faster? Easier? More enjoyable? More believable?
- This list becomes your deliverable architecture

**Layer 4 — Delivery Cube** *(Checklist V — 6 dimensions)*

| Dimension | Options | Highest Value |
|---|---|---|
| Group ratio | 1-on-1 · Small group · One-to-many | 1-on-1 |
| Effort level | DIY · DWY · **DFY** | DFY (max impact) |
| Support type | SMS · Chat · Email · Phone · Zoom | Dedicated/live |
| Consumption | Live · Recorded · Written · Audio · Video | Live |
| Speed | 24/7 · Business hours · Scheduled | 24/7 |
| 10x/1/10th | What at 10x price? What at 1/10th with MORE value? | Use as design test |

DFY is the single highest-leverage Delivery Cube choice — it collapses Effort to minimum.

**Layer 5 — Trim & Stack** *(Checklist VI)*
- Remove: high-cost + low perceived value items
- Keep: low-cost + high perceived value items
- Format as a value table — every line item gets a standalone dollar value

**Layer 6 — Pricing Architecture** *(Checklist III)*
- **Value Anchor** = sum of all standalone values (state this first)
- **Actual Price** = minimum 10x below stated value
- **Rule:** Be more expensive than everyone by enough to cause a pause
- "Higher prices get people better results (and are therefore ethical)"

**Layer 7 — Bonus Stack** *(Checklist IX — "The Sizzle")*
- Present AFTER price is stated — never before
- Each bonus solves a perceived remaining obstacle
- Every bonus gets: (a) why it solves a problem, (b) what it is, (c) what it does for them, (d) how it makes things faster/easier
- Always ascribe a price and justify it
- **Stack bonuses, never discounts** — discounts signal low value; bonuses amplify it
- Tools & checklists > additional trainings (lower effort = higher Value Equation score)

**Layer 8 — Risk Reversal** *(Checklist X)*

| Guarantee Type | Best Used When |
|---|---|
| Unconditional | Maximum trust needed; high-confidence offer |
| Conditional | Can specify completion criteria; keeps skin in game |
| Outsized Refund (2–3x) | Category disruptor; extreme confidence in results |
| Service Guarantee | Keep working free until result; recurring programs |
| Performance / Revshare | B2B; align incentives with client outcome |
| Anti-Guarantee | "All sales final" — exploding opportunity, high trust |
| First Outcome Guarantee | Cover ancillary costs until first win |
| Delayed Second Payment | No billing until first result achieved |

**Match guarantee terms to your program's activation points** — the actions that actually drive success.

**Layer 8B — Scarcity & Urgency** *(Checklists VII–VIII — must be REAL)*

Scarcity: client cap · cohort cap · weekly cap (all real constraints)
Urgency: cohort start date · seasonal window · bonus expiry · exploding opportunity

> **Manufactured scarcity destroys trust permanently.** Never fake it.

### Output Format

Deliver the full landing page architecture:
1. **Headline** (MAGIC formula — from Workflow 3)
2. **Dream outcome statement** (from/to/timeframe)
3. **Benefit bullets** (one per obstacle from the Problem→Solution Matrix)
4. **Value stack table** (all deliverables + standalone values + total)
5. **Price reveal** (value anchor → price → savings statement)
6. **Bonus stack** (each bonus with name, value, and benefit)
7. **Guarantee copy** (chosen type + exact wording)
8. **Scarcity/urgency element**
9. **Single CTA**

**Deep dive:** `references/grand-slam-stack.md` — 5 complete worked offers.

---

## Workflow 3: MAGIC Naming Engine {#wf3}

**Source:** $100M Offers, Checklist XI — "Product Naming"

### The MAGIC Formula

```
M — Make A Magnetic Reason Why
A — Announce Your Avatar
G — Give Them a Goal
I — Indicate a Time Interval
C — Complete with a Container Word
```

**Example breakdown:** "Free 6-Week Lean Challenge for Busy Moms"
- M = Free (magnetic reason — zero cost barrier)
- A = Busy Moms (avatar — specific, self-identifying)
- G = Lean (goal — aspirational but concrete)
- I = 6-Week (time interval — specific, bounded)
- C = Challenge (container word — frames the experience)

### Container Word Library
`Challenge · Program · Blueprint · System · Formula · Method · Framework · Accelerator · Sprint · Bootcamp · Academy · Workshop · Masterclass · Playbook · Protocol · Roadmap · Course · Cohort · Experience`

### Magnetic Reason Examples
`Free · New · Proven · Secret · Exclusive · Private · Guaranteed · Breakthrough · Limited · Insider`

### Refresh Order (hardest → easiest — work in reverse)
Monetization structure → Enhancer → Duration → Headline → Body copy → Creative

### Output
Generate 5 MAGIC-named variants + top recommendation with reasoning.

---

## Workflow 4: Proof Stack Builder {#wf4}

**Source:** $100M Proof Checklist — Alex Hormozi (2024)

> "Everyone can make the same promise, but no one can have the same proof."

### The 13-Axis Proof Hierarchy

Rate current proof on each axis. Higher position = more persuasive:

| Axis | Most Persuasive → Least |
|---|---|
| Format | In-person > Virtual > Screenshot |
| Timing | Live > Recorded |
| Processing | Raw > Produced/Edited |
| Method | Show > Tell |
| Source | Others > You |
| Relevance | Identical ICP > Generic |
| Specificity | Named/personal > Anonymous |
| Magnitude | Big results > Small results |
| Recency | Newer > Older |
| Volume | More proof > Less proof |
| Validation | Third-party verified > Unverified |
| Quantification | With specific numbers > Without |
| Accessibility | Metaphors/analogies > Jargon |

### Output

For each claim that needs proving:
1. **Claim statement** — what must be believed
2. **Current proof rating** — score on each relevant axis
3. **Top 3 gaps** — highest-leverage axes you're missing
4. **Proof acquisition plan** — what to capture, how, from whom, by when
5. **Assembled proof sequence** — ordered for maximum credibility impact

**Deep dive:** `references/proof-hierarchy.md` — full axis explanations + acquisition tactics.

---

## Output Principles (All Workflows)

1. **Specific over vague** — "14 days" not "quickly"; "92% success rate" not "most clients"
2. **Numbers everywhere** — quantify every claim; numbers = implicit proof
3. **Before/after contrast** — painful current state → vivid transformed future
4. **Visible value stack** — line-item every deliverable with standalone dollar value
5. **One CTA** — never two options at the close
6. **Lead dream, close guarantee** — emotion opens, logic justifies, fear stops, guarantee removes
7. **Bonuses not discounts** — discounts signal desperation; bonuses signal abundance
8. **Pain is the pitch** — articulate their pain accurately and they almost always buy
