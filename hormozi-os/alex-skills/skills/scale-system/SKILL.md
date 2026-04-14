---
name: scale-system
description: >
  This skill should be used when the user asks to "scale my business", "build a scale plan",
  "what to automate first", "create a hiring roadmap", "how to delegate properly",
  "what systems do I need to build", "what bottlenecks will appear as I grow",
  "scale to $1M/month", "scale to 7 figures", or "execution roadmap for scaling [business]".
  Apply Hormozi's law: most people hustle — founders build systems.
metadata:
  version: "1.0.0"
  author: "Dan Tong"
  framework: "Hormozi Scale System"
---

# The Scale System

**Philosophy:** "Most people hustle. Founders build systems."

## Trigger Conditions

Activate when the user has an operating business and needs a concrete plan to scale it — covering automation, delegation, systems, hiring, and bottleneck anticipation.

## Execution Protocol

1. Confirm the business model, current revenue stage, and team size if not specified.
2. Identify what to automate first.
3. Define what to delegate and to whom.
4. Design the core systems that need to be built.
5. Build the hiring roadmap by stage.
6. Anticipate the bottlenecks that will emerge at each growth level.
7. Output as an execution roadmap — sequenced by priority.

## The Scale Architecture

### Layer 1: Automation Priorities

Automate in this order (highest ROI first):
1. **Repetitive data tasks**: Reporting, invoicing, scheduling, data entry
2. **Customer communication**: Follow-ups, onboarding emails, reminders, status updates
3. **Lead qualification**: Initial screening, intake forms, scoring
4. **Content distribution**: Repurposing, scheduling, cross-posting
5. **Internal operations**: Approvals, notifications, handoffs between teams

For each automation candidate, evaluate:
- How many hours/week does this consume?
- Is the logic consistent enough to automate reliably?
- What tool solves this? (Zapier / Make / CRM / AI agent)

### Layer 2: Delegation Framework

**Delegate by value per hour:**

| Task Category              | Founder Should | Delegate To             |
|---------------------------|---------------|-------------------------|
| Vision / strategy / GTM   | Own           | No one                  |
| Sales (closing)            | Own initially | Trained closer at scale |
| Content / thought leadership| Own          | Repurposing assistant   |
| Operations / delivery      | Oversee       | Ops manager             |
| Admin / scheduling / tools | Never own     | VA immediately          |
| Finance / books            | Review        | Bookkeeper / CFO        |

**Delegation test**: If someone else can do it at 80% your quality, delegate it.

### Layer 3: Core Systems to Build

Build these systems in order of revenue impact:

1. **Lead Generation System**: Repeatable, documented channel + cadence + tracking
2. **Sales System**: Scripted process, CRM, pipeline stages, follow-up sequences
3. **Onboarding System**: Standard client/customer onboarding, checklist, welcome sequence
4. **Delivery System**: SOPs for fulfillment, quality checkpoints, client communication
5. **Retention System**: Check-ins, upsell triggers, NPS tracking, referral ask
6. **Reporting System**: Weekly KPI dashboard, owner review cadence

For each system, define: Owner / Tools / SOP location / Review frequency.

### Layer 4: Hiring Roadmap

Hire in this sequence based on revenue stage:

| Revenue Stage    | First Hire           | Why                                        |
|-----------------|---------------------|--------------------------------------------|
| $0–$10K/mo      | VA / Ops assistant  | Free founder from admin                    |
| $10K–$50K/mo    | Delivery specialist | Free founder from fulfillment              |
| $50K–$150K/mo   | Sales rep / closer  | Free founder from all sales calls          |
| $150K–$500K/mo  | Ops manager         | Systems owner so founder can go wide       |
| $500K+/mo       | Functional leads    | Finance, Marketing, Product heads          |

**Hiring principle**: Hire for the next stage, not the current one.

### Layer 5: Bottleneck Anticipation

Every growth stage breaks something. Anticipate and pre-solve:

| Growth Stage      | What Breaks                        | The Fix                              |
|------------------|-----------------------------------|--------------------------------------|
| 0→$10K/mo        | Founder does everything            | First VA hire + basic SOPs           |
| $10K→$50K/mo     | Delivery quality drops with volume | Delivery SOP + QA checklist          |
| $50K→$150K/mo    | Sales closes plateau               | Sales script + second closer         |
| $150K→$500K/mo   | Cash flow gets tight               | Revenue cycle optimization           |
| $500K→$1M+/mo    | Culture/communication breaks       | Management layer + team rituals      |

## Output Format

```
## SCALE ROADMAP FOR [BUSINESS]

### 1. Automate First (Ranked by ROI)
[3–5 specific automations with tool recommendations]

### 2. Delegation Plan
[Table: Task → Delegate To → Timeline]

### 3. Systems to Build (Priority Order)
[6 systems with owner, tools, next action]

### 4. Hiring Roadmap
[Stage-based table]

### 5. Bottlenecks to Prepare For
[Current stage + next 2 stages — what will break and how to prevent it]

### The Single Highest-Leverage Move Right Now
"Based on your current stage, the move that unlocks the next level is: [specific action]"
```

## Quality Standard

The roadmap must be stage-appropriate. A $5K/month business doesn't need a VP of Sales. A $500K/month business can't afford not to have one. Every recommendation must match the user's specific revenue stage, team size, and business model.
