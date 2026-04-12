# Automation Playbook — Reference
**Source: ACQ Systems Framework — Acquisition.com**

> "If you do it twice, document it. If you document it, delegate it. If you delegate it, automate it."
> "A system that runs without you is an asset. A business that requires you is a job."

---

## The 3-Tier Systemization Framework

### Tier 1 — Founder-Only (Do NOT systemize or delegate)
- High-judgment, high-stakes, irreplaceable decisions
- Offer design and pricing
- Key partner relationships
- Strategic pivots
- M&A negotiations

**Rule:** If you systemize a Tier 1 task, you remove the human judgment that makes it valuable.

### Tier 2 — Document + Delegate (SOP → Human)
- Repeatable tasks with clear rules and occasional judgment
- Sales calls (until closer is trained)
- Client onboarding
- Content review
- Weekly reporting

**Rule:** Document first. Delegate only after the SOP is proven.

### Tier 3 — Document + Automate (SOP → Machine)
- Fully rule-based, zero judgment required
- Lead routing and CRM updates
- Email sequences (nurture, follow-up, onboarding)
- Calendar scheduling and reminders
- Invoice generation and payment collection
- Social media scheduling
- Reporting dashboards

**Rule:** Automate what can be defined by if/then logic. Any task with "it depends" requires a human.

---

## The SOP Builder (Full Template)

```
SOP: [Process Name]
Version: 1.0 | Owner: [Name] | Last Updated: [Date]
========================

TRIGGER:
  What starts this process?
  [specific event, time, or input that kicks it off]

FREQUENCY:
  [Daily / Weekly / Per new client / Per specific trigger]

INPUTS REQUIRED:
  - [Item 1: tool, document, data, or access required]
  - [Item 2]
  - [Item N]

TOOLS USED:
  - [Tool name + link + what it's used for]

STEPS:
  1. [Action verb] → [What to do] → [Where to do it] → [Expected output]
  2. [Action verb] → [What to do] → [Where to do it] → [Expected output]
  3. ...
  N. [Final step] → [Delivery or quality check]

QUALITY CHECKLIST:
  □ [Specific thing to verify before marking done]
  □ [Specific thing to verify]
  □ [Specific thing to verify]

OUTPUT:
  [What gets produced and where it goes]

SUCCESS CRITERIA:
  [How you know this was done correctly — measurable]

IF SOMETHING GOES WRONG:
  [Who to contact / what to do / how to escalate]

TIME BUDGET:
  [Expected minutes/hours this process takes]
========================
```

---

## Automation Stack by Business Type

### Service Business / Agency

| Process | Tool | Trigger | Action |
|---|---|---|---|
| New lead → CRM | GoHighLevel / HubSpot | Form submission or DM | Create contact, tag ICP, assign to pipeline stage |
| Lead books call | Calendly | Calendar booking | Confirm email + reminder sequence |
| No-show follow-up | Zapier + email | Missed call tag | 3-touch re-book sequence |
| Client onboarded | GoHighLevel | Payment received | Welcome email + onboarding checklist + intro call invite |
| Weekly check-in | Recurring calendar | Day/time trigger | Send status update template to client |
| Invoice + payment | Stripe + Zapier | Contract signed | Auto-invoice generation + payment link |
| Contract sent | PandaDoc + Zapier | Stage change in CRM | Send contract → notify team on sign |
| Review request | Email automation | Day 30 of engagement | NPS + review request |

---

### SaaS / Subscription

| Process | Tool | Trigger | Action |
|---|---|---|---|
| Free trial signup | Intercom / Drip | Sign-up event | Onboarding email sequence (Day 1/3/7/14) |
| Feature not used | Mixpanel + email | User hasn't used X by Day 7 | "Here's how to use [feature]" email |
| Trial expiry | CRM automation | Day 14 | Conversion email + offer + urgency |
| Payment failed | Stripe + Zapier | Declined card | Dunning email sequence |
| Churn risk | Mixpanel + Intercom | Low usage score | Proactive CSM outreach |
| Annual renewal | CRM | 30 days before renewal | Renewal reminder + value recap |

---

### Coaching / Education

| Process | Tool | Trigger | Action |
|---|---|---|---|
| Lead magnet download | ConvertKit + Zapier | Opt-in | Welcome sequence (5-email nurture) |
| Webinar registration | Zoom + ConvertKit | Registration | Confirmation + reminder (48hr + 1hr) |
| Webinar attendance | Zapier | Attended | Hot lead tag + closer outreach |
| Webinar no-show | Zapier | Did not attend | Replay link + re-registration offer |
| Purchase made | Stripe + Teachable | Payment | Course access + onboarding sequence |
| Module completed | Teachable | Module completion | Congratulations + next step prompt |
| Community invite | Circle / Skool | Purchase | Auto-invite to community |

---

## Automation Priority Matrix

Score each process (1–5 on each axis):

| Axis | 1 | 3 | 5 |
|---|---|---|---|
| **Frequency** | < monthly | Weekly | Daily |
| **Time cost** | < 5 min | 30 min | > 1 hour |
| **Error risk** | Low | Medium | High (human mistakes common) |
| **Judgment needed** | High (complex) | Medium | Low (rule-based) |

**Priority score = Frequency + Time + Error Risk + (5 − Judgment)**

Highest score = automate first.

**Example:**
- Lead follow-up email (Frequency: 5, Time: 3, Error: 4, Judgment: 1) → Score = 5+3+4+4 = 16 → Automate immediately

---

## The "Hire or Automate" Decision Tree

```
Is this task rule-based (can you write if/then logic for it)?
  YES → Can current tools handle it?
        YES → Automate it. Cost: $0–$200/month in tools.
        NO  → Build the automation (Zapier/Make). Cost: $100–$500 setup.
  NO  → Does it require human judgment?
        YES → Is it below your hourly rate?
              YES → Hire a human. (Delegate)
              NO  → Keep doing it yourself. (For now)
        NO  → Break it into rule-based steps, then automate.
```

---

## Tool Stack Reference

### CRM & Pipeline
- **GoHighLevel** — best for service businesses and agencies; built-in automations
- **HubSpot** — strong for B2B; best-in-class reporting
- **Salesforce** — enterprise; complex; powerful
- **Notion + Zapier** — scrappy setup for <$50k/month businesses

### Marketing Automation
- **ConvertKit** — best for creators, coaches, and course businesses
- **ActiveCampaign** — strong behavioral triggers; good for complex sequences
- **Drip** — e-commerce and SaaS
- **GoHighLevel** — all-in-one for agencies

### Workflow Automation (no-code)
- **Zapier** — largest app library; best for simple triggers
- **Make (Integromat)** — more powerful; better for multi-step complex flows
- **n8n** — open source; self-hosted; most powerful for technical teams

### Scheduling
- **Calendly** — industry standard; Salesforce + HubSpot integrations
- **Acuity** — more customizable; great for service businesses

### Contracts & Payments
- **PandaDoc** — best for proposals + e-signatures
- **Stripe** — payments + subscriptions + invoicing
- **DocuSign** — enterprise e-signatures

### Analytics & Reporting
- **Google Looker Studio** — free; connect all data sources
- **Databox** — real-time KPI dashboards
- **Mixpanel** — product analytics (SaaS)

---

## The Weekly Systems Review

Run every Monday (15 minutes):

1. Which processes broke or caused errors last week?
2. Which tasks are you still doing that should be delegated or automated?
3. Are all KPIs tracked automatically or does someone have to manually compile data?
4. What's the #1 system that would free the most founder time this week?

**Compound effect:** Fixing 1 system per week = 52 systems improved per year = a business that runs without you.
