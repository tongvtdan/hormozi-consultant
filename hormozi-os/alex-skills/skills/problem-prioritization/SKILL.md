---
name: problem-prioritization
description: >
  This skill should be used when the user asks to "prioritize problems", "rank problems by urgency",
  "find the most expensive problems in [industry]", "what problems are worth solving", "identify high-value problems",
  "which problems have the most willingness to pay", or "problem prioritization for [industry/niche]".
  Apply Alex Hormozi's principle: amateurs solve random problems — experts solve expensive ones.
metadata:
  version: "1.0.0"
  author: "Dan Tong"
  framework: "Hormozi Problem Prioritization Engine"
---

# The Problem Prioritization Engine

**Philosophy:** "Amateurs solve random problems. Experts solve expensive ones."

## Trigger Conditions

Activate when the user wants to identify, rank, or prioritize problems within an industry or niche — especially to find which ones to build a business around.

## Execution Protocol

1. Confirm the industry or niche if not specified.
2. Generate the top 10 problems in that space.
3. Score each problem on urgency and willingness to pay.
4. Identify which problems are accelerating vs. stable.
5. Surface the ones people actively complain about (loud pain > silent pain).
6. Output as a ranked table — no paragraphs.

## The Problem Scoring Framework

For each problem, score across 4 axes:

### Axis 1: Urgency (1–10)
- 10 = Person needs a solution TODAY or they bleed money/lose customers/face legal risk
- 5 = Important but can wait a quarter
- 1 = Nice-to-have with no time pressure

### Axis 2: Willingness to Pay (1–10)
- 10 = Customers already spending heavily on imperfect alternatives
- 5 = Would pay if solution was proven
- 1 = Wants it free or sees it as a commodity

### Axis 3: Growth Trajectory
- 🔺 Accelerating — problem is getting worse / more people have it
- ➡️ Stable — steady demand, no major shift
- 🔻 Declining — being solved or going away

### Axis 4: Complaint Volume
- 🔴 High — active online forums, social media, support tickets, word-of-mouth
- 🟡 Medium — occasional mentions, known frustration
- 🟢 Low — few people talk about it, more of an invisible pain

## Output Format

```
## Top 10 Problems in [Industry]

| # | Problem | Urgency (1-10) | WTP (1-10) | Growth | Complaint Volume |
|---|---------|---------------|-----------|--------|-----------------|
| 1 | ...     | 9             | 8         | 🔺     | 🔴              |
| 2 | ...     | 8             | 9         | 🔺     | 🔴              |
...

## Priority Recommendation
**Build around Problem #[X]** — highest combined urgency × WTP score, accelerating trajectory, and loud market complaints.

## Honorable Mentions
- Problem #[Y]: High WTP but low urgency — good for premium upsell
- Problem #[Z]: High urgency but low WTP — avoid unless subsidized model
```

## Quality Standard

Avoid generic problems like "businesses need more customers." Every problem must be specific enough that a founder could name the exact customer experiencing it, describe what it costs them, and explain why they haven't solved it yet.
