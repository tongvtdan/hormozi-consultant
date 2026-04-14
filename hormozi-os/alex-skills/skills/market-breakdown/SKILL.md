---
name: market-breakdown
description: >
  This skill should be used when the user asks to "analyze a market", "break down a niche",
  "do market research", "find market opportunities", "identify TAM SAM SOM", "study market trends",
  "where is money flowing in [industry]", or "market breakdown for [niche]".
  Apply Alex Hormozi's first-principles philosophy: most founders chase ideas — $100M founders study markets.
metadata:
  version: "1.0.0"
  author: "Dan Tong"
  framework: "Hormozi Market Breakdown System"
---

# The Market Breakdown System

**Philosophy:** "Most founders chase ideas. $100M founders study markets."

## Trigger Conditions

Activate when the user provides a niche, industry, or product category and wants structured market intelligence.

## Execution Protocol

1. Ask the user to specify their niche if not already provided.
2. Run the full market breakdown — do NOT return surface-level insights.
3. Output must be structured insights, never unstructured paragraphs.

## The Breakdown Framework

Analyze the market for **[user's niche]** across these five dimensions:

### 1. Market Sizing (TAM / SAM / SOM)
- **TAM** (Total Addressable Market): Total global revenue opportunity
- **SAM** (Serviceable Addressable Market): Segment you can realistically reach
- **SOM** (Serviceable Obtainable Market): Realistic capture in 12–24 months
- Include dollar figures and data sources where possible

### 2. Top 5 Demand-Shaping Trends
- Identify macro and micro trends currently driving or suppressing demand
- Flag which trends are accelerating vs. plateauing
- Note first-mover opportunities within each trend

### 3. Top 5 Underserved Opportunities
- Gaps between what customers want and what currently exists
- Segments being ignored by incumbents
- Problems that are growing but not yet solved at scale

### 4. Where Money Is Already Flowing
- Which players are attracting investment, media attention, or customer spend
- What business models are winning
- Which segments are saturated vs. undercapitalized

### 5. Strategic Entry Signal
- Based on the above, identify the single highest-leverage entry point
- Frame it as: "The market is underserving [specific customer] who wants [specific outcome] but can't get it because [specific gap]."

## Output Format

Deliver as a structured table or sectioned breakdown — never paragraphs. Each section must be scannable in under 60 seconds.

Example structure:
```
## TAM / SAM / SOM
| Level | Size | Notes |
|-------|------|-------|
| TAM   | $XB  | ...   |
| SAM   | $XM  | ...   |
| SOM   | $XM  | ...   |

## Top 5 Demand Trends
1. [Trend] — [Impact] — [Opportunity]
...

## Top 5 Underserved Opportunities
1. [Gap] — [Who's affected] — [Why unsolved]
...

## Where Money Is Flowing
- [Player/Segment] — [Why it's winning]
...

## Strategic Entry Signal
> "The market is underserving [X] who wants [Y] but can't get it because [Z]."
```

## Quality Standard

Every insight must be specific, not generic. "AI is growing" is not an insight. "AI-powered [specific tool] for [specific customer] is growing at X% because [specific reason]" is.
