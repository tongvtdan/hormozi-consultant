# Hormozi Consultant

**A complete AI skill system built from Alex Hormozi's $100M frameworks — deployable on Claude, ChatGPT, Gemini, Qwen, and any OpenAI-compatible LLM.**

---

## What's In This Folder

This workspace contains everything needed to run the Hormozi Offer OS as an AI consultant — source materials, Claude plugin, ChatGPT system prompts, Gemini Gems config, and universal LLM support.

---

## Structure

```
hormozi-consultant/
├── README.md                          ← You are here
├── Documents/                         ← Skill files + reference docs (quick access)
│   ├── SKILL.md                       ← v2.0 skill brain (all 7 workflows)
│   ├── value-equation-deep-dive.md    ← 10 scored examples
│   ├── grand-slam-offer-examples.md   ← 5 complete Grand Slam Offer builds
│   ├── lead-gen-playbook.md           ← Lead magnet + Core Four + outreach scripts
│   ├── market-analysis-templates.md   ← 8 research templates (ICP, TAM, Thiel)
│   ├── offer-scorer.js                ← Programmatic Value Equation calculator
│   └── books/                         ← Source PDFs
│       ├── 100M Offers How To Make Offers So Good...pdf
│       ├── 100M Leads How to Get Strangers To Want To Buy...pdf
│       ├── 100M Proof Checklist.pdf
│       ├── ACQ Closer Handbook.pdf
│       └── 100M Offers Course/ (7 checklists)
│           ├── 1-Pick-Your-Niche-Checklist.pdf
│           ├── 2-Pricing-Value-Checklist.pdf
│           ├── 3-Offer+Creation+Checklist.pdf
│           ├── 4-Bonus-Creation-Checklist.pdf
│           ├── 5-Unbeatable-Guarantee-Checklist.pdf
│           ├── 6-Scarcity-Urgency-Checklist.pdf
│           └── 7-Product-Naming-Checklist.pdf
└── hormozi-offer-os/                  ← Full plugin repo (installable)
    ├── README.md                      ← Plugin install instructions
    ├── INSTALL.md                     ← Detailed setup guide
    ├── .claude-plugin/
    │   └── marketplace.json           ← Claude marketplace metadata
    ├── hormozi-offer-os/              ← Claude plugin package
    │   ├── .claude-plugin/plugin.json ← Plugin manifest v2.0.0
    │   ├── skills/offer-os/SKILL.md   ← Full 7-workflow skill
    │   ├── skills/offer-os/references/← 4 deep-dive reference docs
    │   └── commands/                  ← 7 slash commands
    ├── chatgpt/                       ← ChatGPT Custom GPT setup
    ├── gemini/                        ← Gemini Gems setup
    └── universal/                     ← Qwen/Llama/Mistral/DeepSeek setup
```

---

## 7 Workflows (Quick Reference)

| Workflow | Trigger |
|---|---|
| 1. Value Equation Scorer | "Score my offer" / "Why isn't this converting?" |
| 2. Grand Slam Offer Builder | "Build me an offer" / "Make this irresistible" |
| 3. Lead Magnet Generator | "Get me more leads" / "Build a lead gen system" |
| 4. Hooks & Headline Engine | "Write hooks" / "Ad copy" / "Content ideas" |
| 5. Market Breakdown System | "Analyze this market" / "Validate my idea" |
| 6. Scale OS | "How do I scale?" / "I'm the bottleneck" |
| 7. Proof Stack Builder | "Build credibility" / "Make my claims believable" |

---

## Five Laws (Non-Negotiable)

1. **Offer beats marketing** — 22.4x better ROAS documented for a Grand Slam Offer vs. commodity
2. **Value = (Dream × Likelihood) / (Time × Effort)** — The equation governs everything
3. **Starving crowd > offer strength > persuasion skills** — Market first, always
4. **Niche down 3–4 levels** — Same content at 4 niche levels = 100x price difference
5. **Risk reversal unlocks buying** — Whoever absorbs the risk controls the transaction

---

## Sources

All content built from primary sources:
- **$100M Offers** — Alex Hormozi (Acquisition.com Volume I)
- **$100M Leads** — Alex Hormozi (Acquisition.com Volume II)
- **$100M Proof Checklist** — Alex Hormozi (2024)
- **ACQ Closer Handbook** — Alex Hormozi
- **100M Offers Course** — 7 checklists

---

## Install the Claude Plugin

```bash
# From this folder
claude plugin install ./hormozi-offer-os

# From GitHub
claude plugin install https://github.com/tongvtdan/hormozi-offer-os
```

See `hormozi-offer-os/INSTALL.md` for full setup instructions for Claude, ChatGPT, Gemini, and universal LLMs.

---

*Version 2.0.0 — Built by Dan Tong. HCMC → Global.*
