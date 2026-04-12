# Hormozi Consultant

**A complete AI skill system built from Alex Hormozi's $100M frameworks — deployable on Claude, ChatGPT, Gemini, and any OpenAI-compatible LLM.**

---

## What's In This Repo

This workspace packages Alex Hormozi's business-building system into installable AI skills across four domains: Offers, Leads, Scale, and Money Models. Two deployment paths are available depending on your LLM setup.

---

## Structure

```
hormozi-consultant/
├── README.md                          ← You are here
├── Documents/                         ← Quick-reference skill files (local use)
│   ├── SKILL.md                       ← Consolidated v2.0 skill (7 workflows, single file)
│   ├── value-equation-deep-dive.md    ← 10 scored examples + improvement scenarios
│   ├── grand-slam-offer-examples.md   ← 5 complete Grand Slam Offer builds
│   ├── lead-gen-playbook.md           ← Lead magnet + Core Four + outreach scripts
│   ├── market-analysis-templates.md   ← 8 research templates (ICP, TAM, Thiel)
│   └── offer-scorer.js                ← Programmatic Value Equation calculator
└── hormozi-os/                        ← Modular plugin mono-repo (4 sub-plugins)
    ├── README.md                      ← Full install instructions
    ├── INSTALL.md                     ← Setup guide for all LLM platforms
    ├── LICENSE
    ├── .claude-plugin/
    │   └── marketplace.json           ← Claude marketplace metadata
    ├── hormozi-offers/                ← $100M Offers framework
    ├── hormozi-leads/                 ← $100M Leads framework
    ├── hormozi-scale/                 ← ACQ Scale framework
    └── hormozi-money/                 ← $100M Money Models framework
```

---

## Two Deployment Paths

### Path 1 — Quick Install (Single Consolidated Skill)

For direct Claude.ai use or any LLM interface — paste `Documents/SKILL.md` as your system prompt. Covers all 7 workflows in one file.

**7 Workflows:**

| Workflow                    | Trigger                                           |
| --------------------------- | ------------------------------------------------- |
| 1. Value Equation Scorer    | "Score my offer" / "Why isn't this converting?"   |
| 2. Grand Slam Offer Builder | "Build me an offer" / "Make this irresistible"    |
| 3. Lead Magnet Generator    | "Get me more leads" / "Build a lead gen system"   |
| 4. Hooks & Headline Engine  | "Write hooks" / "Ad copy" / "Content ideas"       |
| 5. Market Breakdown System  | "Analyze this market" / "Validate my idea"        |
| 6. Scale OS                 | "How do I scale?" / "I'm the bottleneck"          |
| 7. Proof Stack Builder      | "Build credibility" / "Make my claims believable" |

### Path 2 — Modular Plugins (Recommended)

Install individual plugins for each domain. Each plugin includes Claude skill, ChatGPT GPT config, Gemini Gem config, and universal LLM system prompt.

| Plugin           | Framework    | Commands                                                                     |
| ---------------- | ------------ | ---------------------------------------------------------------------------- |
| `hormozi-offers` | $100M Offers | `/score-offer` · `/build-offer` · `/name-offer` · `/build-proof`             |
| `hormozi-leads`  | $100M Leads  | `/gen-leads` · `/build-magnet` · `/break-market` · `/write-hooks`            |
| `hormozi-scale`  | ACQ Scale    | `/scale-audit` · `/bottleneck-finder` · `/hire-next` · `/build-systems`      |
| `hormozi-money`  | $100M Money  | `/model-picker` · `/price-architect` · `/ltv-optimizer` · `/more-better-new` |

```bash
# Install all 4 plugins at once
claude marketplace install tongvtdan/hormozi-os

# Or install individually
claude plugin install ./hormozi-os/hormozi-offers
claude plugin install ./hormozi-os/hormozi-leads
claude plugin install ./hormozi-os/hormozi-scale
claude plugin install ./hormozi-os/hormozi-money
```

See `hormozi-os/INSTALL.md` for full setup instructions for Claude, ChatGPT, Gemini, and universal LLMs.

---

## Five Laws (Non-Negotiable)

1. **Offer beats marketing** — 22.4x better ROAS documented for a Grand Slam Offer vs. commodity
2. **Value = (Dream × Likelihood) / (Time × Effort)** — The equation governs everything
3. **Starving crowd > offer strength > persuasion skills** — Market first, always
4. **Niche down 3–4 levels** — Same content at 4 niche levels = 100x price difference
5. **Risk reversal unlocks buying** — Whoever absorbs the risk controls the transaction

---

## Sources

- **Hormozi and Acquisition** — Acquisition.com

---

*Version 2.0.0 — Built by Dan Tong. HCMC → Global.*
