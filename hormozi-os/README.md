# Hormozi-OS

> "The four frameworks that built a $200M+ acquisition empire — packaged as installable AI skills for every major LLM."

**Hormozi-OS** is an open-source mono-repo of four independently installable AI plugins that operationalize Alex Hormozi's complete business-building system:

| Plugin | Framework | What It Does |
|---|---|---|
| [`hormozi-offers`](./hormozi-offers) | $100M Offers | Score, build, name, and proof-stack Grand Slam Offers |
| [`hormozi-leads`](./hormozi-leads) | $100M Leads | Build lead gen systems, lead magnets, market analyses, and hooks |
| [`hormozi-scale`](./hormozi-scale) | ACQ Scale | Audit bottlenecks, calculate LTV:CAC, hire correctly, build systems |
| [`hormozi-money`](./hormozi-money) | $100M Money Models | Select revenue models, architect pricing, optimize LTV, apply More/Better/New |

Each plugin works independently. Chain them for a complete acquisition OS:
```
Market → Offer → Leads → Scale → Money → Repeat
```

---

## Quick Install

### Claude (Cowork / Claude Code)

```bash
# Install individual plugins
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-offers
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-leads
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-scale
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-money
```

Or use the marketplace to install all four:
```bash
claude marketplace install tongvtdan/hormozi-os
```

### ChatGPT (Custom GPTs)

Each plugin includes a `chatgpt/` folder with:
- `system-prompt.md` — paste into the GPT instructions field
- `gpt-config.json` — model settings and conversation starters

1. Open [platform.openai.com/gpts](https://platform.openai.com/gpts)
2. Create a new GPT
3. Paste the contents of `system-prompt.md` into the Instructions field
4. Add the conversation starters from `gpt-config.json`

### Gemini Gems

Each plugin includes a `gemini/` folder with:
- `system-prompt.md` — paste into the Gem instructions field
- `gem-config.json` — configuration settings

1. Open [gemini.google.com](https://gemini.google.com)
2. Create a new Gem
3. Paste the contents of `system-prompt.md` into the instructions

### Universal (OpenAI-compatible API, Ollama, Groq, Mistral, etc.)

Each plugin includes a `universal/` folder with:
- `system-prompt.md` — use as the system message
- `llm-config.json` — suggested parameters

```python
import openai

with open("hormozi-offers/universal/system-prompt.md") as f:
    system_prompt = f.read()

response = openai.chat.completions.create(
    model="gpt-4o",  # or any compatible model
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": "Build a Grand Slam Offer for my B2B agency..."}
    ]
)
```

---

## Plugin Summaries

### hormozi-offers

**Source:** $100M Offers — Alex Hormozi

**4 Workflows:**
- Value Equation Scorer → calculate and improve your offer's score (target: 1,000,000)
- Grand Slam Offer Builder → 8-layer system: Market → Dream → Problem/Solution → Delivery Cube → Trim & Stack → Pricing → Bonuses → Risk Reversal
- MAGIC Naming Engine → generate 5 MAGIC names per offer
- Proof Stack Builder → 13-axis proof hierarchy scoring

**Commands:** `/score-offer` · `/build-offer` · `/name-offer` · `/build-proof`

---

### hormozi-leads

**Source:** $100M Leads — Alex Hormozi

**4 Workflows:**
- Lead Gen System Builder → Core Four channels (Warm → Content → Cold → Paid) in mandatory sequence
- Lead Magnet Designer → 7-step framework + 6 formats + MAGIC naming
- Market Breakdown System → Starving Crowd 4-criteria scoring + Niche Ladder
- Hooks & Headline Engine → 7 hook templates + headline formula + emotional triggers

**Commands:** `/gen-leads` · `/build-magnet` · `/break-market` · `/write-hooks`

---

### hormozi-scale

**Source:** ACQ Scaling Framework — Acquisition.com

**4 Workflows:**
- Scale Readiness Audit → More/Better/New phase diagnosis + LTV:CAC check + 30-day plan
- Bottleneck Elimination System → 5 constraint types + exploit-before-elevate method
- Hiring Blueprint → Value-per-hour matrix + ACQ First 4 Hires sequence + full hire profile
- Systems & Automation Builder → SOP template + automation tier list + ROI calculator

**Commands:** `/scale-audit` · `/bottleneck-finder` · `/hire-next` · `/build-systems`

---

### hormozi-money

**Source:** $100M Money Models / $100M Offers — Alex Hormozi

**4 Workflows:**
- Revenue Model Selector → 4 models scored + monetization stack designed
- Pricing Architecture → 4-tier ladder + value anchor + payment structures
- LTV Maximizer → 5 levers scored + top 3 actions + projected LTV:CAC
- More/Better/New Engine → phase diagnosis + single recommended action + what to avoid

**Commands:** `/model-picker` · `/price-architect` · `/ltv-optimizer` · `/more-better-new`

---

## Plugin Chaining Guide

**Starting from scratch:**
```
1. break-market    → identify your starving crowd
2. build-offer     → build your Grand Slam Offer
3. name-offer      → name it with MAGIC
4. build-magnet    → design the lead magnet
5. gen-leads       → build the lead gen system
6. write-hooks     → create hooks for content + ads
7. scale-audit     → audit scale readiness at $10k+/month
8. ltv-optimizer   → maximize revenue per customer
9. more-better-new → make the right next growth move
```

**Already have clients, want to scale:**
```
1. scale-audit     → diagnose the constraint
2. bottleneck-finder → eliminate the top bottleneck
3. ltv-optimizer   → maximize what you have
4. hire-next       → hire to remove the bottleneck
5. build-systems   → automate what's working
```

---

## Project Structure

```
hormozi-os/
├── README.md
├── INSTALL.md
├── LICENSE
├── .gitignore
├── .claude-plugin/
│   └── marketplace.json
│
├── hormozi-offers/
│   ├── .claude-plugin/plugin.json
│   ├── skills/offers/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── value-equation.md
│   │       ├── grand-slam-stack.md
│   │       ├── delivery-cube.md
│   │       └── proof-hierarchy.md
│   ├── commands/
│   │   ├── score-offer.md
│   │   ├── build-offer.md
│   │   ├── name-offer.md
│   │   └── build-proof.md
│   ├── chatgpt/
│   ├── gemini/
│   └── universal/
│
├── hormozi-leads/
│   ├── .claude-plugin/plugin.json
│   ├── skills/leads/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── core-four-channels.md
│   │       ├── lead-magnet-library.md
│   │       ├── outreach-scripts.md
│   │       └── content-machine.md
│   ├── commands/
│   │   ├── gen-leads.md
│   │   ├── build-magnet.md
│   │   ├── break-market.md
│   │   └── write-hooks.md
│   ├── chatgpt/
│   ├── gemini/
│   └── universal/
│
├── hormozi-scale/
│   ├── .claude-plugin/plugin.json
│   ├── skills/scale/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── scale-sequence.md
│   │       ├── ltv-cac-models.md
│   │       ├── hiring-blueprint.md
│   │       └── automation-playbook.md
│   ├── commands/
│   │   ├── scale-audit.md
│   │   ├── bottleneck-finder.md
│   │   ├── hire-next.md
│   │   └── build-systems.md
│   ├── chatgpt/
│   ├── gemini/
│   └── universal/
│
└── hormozi-money/
    ├── .claude-plugin/plugin.json
    ├── skills/money/
    │   ├── SKILL.md
    │   └── references/
    │       ├── four-models.md
    │       ├── pricing-architecture.md
    │       ├── ltv-maximizer.md
    │       └── more-better-new.md
    ├── commands/
    │   ├── model-picker.md
    │   ├── price-architect.md
    │   ├── ltv-optimizer.md
    │   └── more-better-new.md
    ├── chatgpt/
    ├── gemini/
    └── universal/
```

---

## Sources

- *$100M Offers* — Alex Hormozi (Acquisition.com Volume I)
- *$100M Leads* — Alex Hormozi (Acquisition.com Volume II)
- ACQ Closer Handbook — Alex Hormozi
- ACQ Scaling Framework — Acquisition.com (internal)
- [acquisition.com](https://www.acquisition.com)

---

## License

MIT — free to use, fork, and build upon. Attribution appreciated.

---

## Contributing

Pull requests welcome. If you've built additional workflows, reference files, or LLM configs for other platforms (Mistral, Claude.ai, Perplexity, etc.), open a PR.

Maintained by [Dan Tong](https://github.com/tongvtdan) — [tongvtdan@gmail.com](mailto:tongvtdan@gmail.com)
