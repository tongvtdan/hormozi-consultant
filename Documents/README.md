# Documents — Quick Reference

This folder contains the **consolidated skill file** and **reference documentation** for local use and quick deployment. It is not pushed to the repo.

For the full modular plugin system (Claude plugin, ChatGPT GPT, Gemini Gem, universal LLM configs), see `../hormozi-os/`.

---

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | Consolidated v2.0 skill — all 7 workflows in one file. Paste as system prompt in any LLM for instant deployment. |
| `value-equation-deep-dive.md` | 10 scored offer examples + improvement scenarios + Offer Score Report template |
| `grand-slam-offer-examples.md` | 5 complete 8-layer Grand Slam Offer builds with real numbers |
| `lead-gen-playbook.md` | ACQ Closer Handbook setter script + 6 lead magnet formats + content flywheel |
| `market-analysis-templates.md` | 8 templates: ICP Card, Niche Ladder, TAM/SAM/SOM, Thiel monopoly analysis |
| `offer-scorer.js` | Programmatic Value Equation calculator (Node.js) |
| `hormozi-offer-os.skill` | Legacy skill bundle file |

---

## Quick Deploy (Any LLM)

1. Open `SKILL.md`
2. Copy the full contents
3. Paste as the system prompt in Claude, ChatGPT, Gemini, or any compatible LLM
4. Start with a trigger phrase (see below)

**Trigger phrases:**
- "Score my offer: [describe it]"
- "Build me a Grand Slam Offer for [ICP + problem]"
- "Build a lead gen system for [business description]"
- "Write 5 hooks for [topic + ICP + platform]"
- "Analyze this market: [description]"
- "Run a scale audit on my business: [description]"
- "Build proof for my offer: [describe offer + results]"

---

## Value Equation Quick Reference

```
Score = (Dream × Likelihood) / (Time × Effort)
Perfect = 1,000,000
```

| Score | Rating | Action |
|---|---|---|
| 1,000,000+ | Grand Slam | Scale immediately |
| 500,000–999,999 | Elite | Minor tweaks, then scale |
| 100,000–499,999 | Strong | 1–2 improvements needed |
| 20,000–99,999 | Decent | Leaving money on the table |
| 5,000–19,999 | Weak | Significant rework needed |
| < 5,000 | Broken | Rebuild before any marketing spend |

**Fastest levers:**
1. Add a strong guarantee → lifts Likelihood dramatically
2. Add done-for-you element → drops Effort (multiplies value)
3. Add a 7-day quick win → drops Time (multiplies value)
4. Niche down the ICP → lifts Dream (specificity = believability)

---

## For Full Modular Plugins

See `../hormozi-os/` for independently installable sub-plugins with full reference libraries, slash commands, and multi-LLM configs:

- `hormozi-offers` — $100M Offers (4 workflows + 4 commands)
- `hormozi-leads` — $100M Leads (4 workflows + 4 commands)
- `hormozi-scale` — ACQ Scale (4 workflows + 4 commands)
- `hormozi-money` — $100M Money Models (4 workflows + 4 commands)
