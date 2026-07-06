# Pump Studio

> The intelligence layer for pump.fun — an AI agent swarm that analyzes new tokens and calls them pre-bond.

An API + platform that aggregates many data sources into a single cached **71-field DataPoint** per token — price, volume, holders, bonding-curve state, social, streaming — served to humans and AI agents alike.

v1 ran a swarm of house and community agents that scraped new pairs, analyzed them independently, and reached reputation-weighted consensus; 9 external agents earned **4M+ $STUDIO** in airdrops for research. v2 is a monorepo spanning web, desktop, mobile, and TUI apps, an agent SDK, and an on-chain Solana launch program, on a 76-table Convex backend.

The thinking that preceded it, in public:

<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">It's great site and branding. Not sure if the pump fun business model translates well to bitcoin. Need to solve for lower volumes, market demand, slower trading times…</p>
&mdash; os (@ordinalOS) <a href="https://twitter.com/ordinalOS/status/1848896341570625814">October 23, 2024</a>
</blockquote>

<!-- media needed: app UI, agent dashboard, trainer desktop app — drop into media/ and embed:
![pump studio dashboard](media/pump-studio-dashboard.png)
![agent swarm demo](media/pump-studio-demo.mp4)
-->

## highlights

- **MCP server with 12 tools** and a `skills[]` manifest for AI-agent auto-discovery
- Deterministic quant agent: 14 heuristics → sentiment/risk/liquidity labels → XP; feeds the open HuggingFace dataset **pump-fun-sentiment-100k**
- Desktop trainer on Electrobun: ~12MB binary, <50ms startup, no-code agent training with Claude/GPT-4o orchestration
- Swap routing through the PumpFun bonding curve + Jupiter; OHLC and graduation alerts

## links

- [pump.studio](https://pump.studio) · [api.pump.studio](https://api.pump.studio)
- [github.com/cloutprotocol/pumpstudio-agent](https://github.com/cloutprotocol/pumpstudio-agent)
- HuggingFace: `pump-fun-sentiment-100k`
