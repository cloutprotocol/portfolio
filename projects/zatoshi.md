# Zatoshi — Zerdinals on Zcash

> Ordinals-style inscriptions on Zcash, built from the protocol up: indexer → marketplace → wallet → 10k collection.

![zatoshi.market](media/zatoshi-market.png)
*zatoshi.market — Zcash Inscription Marketplace, with the ZGODS drop*

Nobody had inscriptions on Zcash, so the entire stack had to exist first:

- **zord** — a Rust indexer for Zcash ordinals ("Zats") following `ord` conventions, with first-class **ZRC-20** and **ZNS** name support, web UI, and documented APIs
- **zatoshi.market** — privacy-focused marketplace for discovering, trading, and minting, with a signature retro-dither Three.js UI; bip32/39, bitcoinjs-lib, bitcore-lib-zcash, noble crypto client-side
- **zatoshi.wallet** — Chrome-extension wallet, shared wallet-core libs in a Turborepo
- **zgods** — WebGL CRT-television interface for the ZERDINALS 10k inscription set

![zord repo](media/zord-repo.png)
*zord — rare and exotic zats, in Rust*

## links

- [zatoshi.market](https://zatoshi.market)
- [github.com/zatoshilabs/zord](https://github.com/zatoshilabs/zord)
- [github.com/cloutprotocol/zatoshi.market](https://github.com/cloutprotocol/zatoshi.market)
