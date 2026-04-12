# Installation Guide — Hormozi-OS

## Option 1 — Claude (Cowork / Claude Code)

### Install all 4 plugins at once
```bash
claude marketplace install tongvtdan/hormozi-os
```

### Install individual plugins
```bash
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-offers
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-leads
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-scale
claude plugin install https://github.com/tongvtdan/hormozi-os/tree/main/hormozi-money
```

### Available commands after install

| Plugin | Commands |
|---|---|
| hormozi-offers | `/score-offer`, `/build-offer`, `/name-offer`, `/build-proof` |
| hormozi-leads | `/gen-leads`, `/build-magnet`, `/break-market`, `/write-hooks` |
| hormozi-scale | `/scale-audit`, `/bottleneck-finder`, `/hire-next`, `/build-systems` |
| hormozi-money | `/model-picker`, `/price-architect`, `/ltv-optimizer`, `/more-better-new` |

---

## Option 2 — ChatGPT Custom GPTs

Each plugin has a `chatgpt/` folder:

1. Open [platform.openai.com/gpts](https://platform.openai.com/gpts)
2. Click **Create a GPT**
3. Go to the **Configure** tab
4. Open the plugin folder (e.g., `hormozi-offers/chatgpt/`)
5. Copy the full content of `system-prompt.md`
6. Paste into the **Instructions** field
7. Add conversation starters from `gpt-config.json`
8. Name the GPT (e.g., "Hormozi Offers GPT")
9. Click **Save**

Repeat for each plugin you want as a separate GPT.

---

## Option 3 — Gemini Gems

Each plugin has a `gemini/` folder:

1. Open [gemini.google.com](https://gemini.google.com)
2. Click **Gems** in the sidebar
3. Click **New Gem**
4. Open the plugin folder (e.g., `hormozi-leads/gemini/`)
5. Copy the content of `system-prompt.md`
6. Paste into the Gem instructions
7. Name the Gem (e.g., "Hormozi Leads")
8. Click **Save**

---

## Option 4 — Universal (OpenAI API / Ollama / Groq / Mistral / any compatible LLM)

Each plugin has a `universal/` folder with `system-prompt.md` and `llm-config.json`.

### Python (OpenAI SDK)
```python
import openai

# Load the system prompt
with open("hormozi-offers/universal/system-prompt.md", "r") as f:
    system_prompt = f.read()

client = openai.OpenAI(api_key="YOUR_API_KEY")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": "Build a Grand Slam Offer for my B2B lead generation agency..."}
    ],
    temperature=0.7,
    max_tokens=4096
)

print(response.choices[0].message.content)
```

### Ollama (local models)
```bash
# Set the system prompt as a Modelfile
cat hormozi-offers/universal/system-prompt.md > /tmp/hormozi_system.txt

ollama run llama3 "$(cat /tmp/hormozi_system.txt)

USER: Build a Grand Slam Offer for..."
```

### LangChain
```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage

with open("hormozi-scale/universal/system-prompt.md") as f:
    system = f.read()

llm = ChatOpenAI(model="gpt-4o", temperature=0.7)
messages = [
    SystemMessage(content=system),
    HumanMessage(content="Run a scale audit on my coaching business...")
]
response = llm.invoke(messages)
```

---

## Option 5 — Direct File Use (any interface)

1. Clone or download the repo:
```bash
git clone https://github.com/tongvtdan/hormozi-os.git
```

2. Open the `SKILL.md` for any plugin to read the full framework
3. Use any AI interface (Claude.ai, ChatGPT, Gemini, etc.)
4. Paste the system prompt as your first message or as a context file
5. Use the workflow templates and output formats directly

---

## Minimum Requirements

- Any modern LLM (GPT-4, Claude 3+, Gemini 1.5 Pro, Llama 3 70B+, Mistral Large, etc.)
- No API keys required for direct file use
- No external dependencies

---

## Verification

After installing, test with:

**hormozi-offers:** `/score-offer my coaching program costs $3,000 and targets B2B founders`
**hormozi-leads:** `/gen-leads B2B agency, 3 months in, primary channel is warm outreach`
**hormozi-scale:** `/scale-audit service business at $30k/month, solo founder, 6 clients`
**hormozi-money:** `/more-better-new I'm at $25k/month with inconsistent lead volume`
