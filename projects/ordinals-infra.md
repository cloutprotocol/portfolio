# ordinalOS node infrastructure

> A full Bitcoin Core + ord indexing node on dedicated metal — the ops backbone behind the Ordinals work.

A dedicated Hetzner server (4TB NVMe / 64GB RAM) running Bitcoin Core with full `ord` indexing, Coolify deployment, monitoring, and extensive operational documentation. Protocol-up, not API-down.

<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">ℹ️ common mistake when setting up a <a href="https://twitter.com/hashtag/bitcoin">#bitcoin</a> node for <a href="https://twitter.com/hashtag/ordinals">#ordinals</a> — make sure to turn on the transaction index by setting txindex=1 in the Bitcoin Core configuration file</p>
&mdash; os (@ordinalOS) <a href="https://twitter.com/ordinalOS/status/1775642058306572428">April 3, 2024</a>
</blockquote>

The tooling that grew around it:

- **sats-per-vbyte** — REST API wrapping Bitcoin Core + ord RPC (fee rates, inscriptions), Dockerized
- **rune-distributor** — distributed Bitcoin Runes claim service with multi-wallet admin and Swagger API
- **bord** — a Bun-runtime `ord` client on the BETH stack; explored OPM, the Ord Package Manager
- **runedash / runename** — dashboard + naming utility shipped in the April 2024 Runes launch window

## links

- [github.com/ordinalOS/hetzner-os](https://github.com/ordinalOS/hetzner-os)
- [github.com/ordinalOS/sats-per-vbyte](https://github.com/ordinalOS/sats-per-vbyte)
- [github.com/ordinalOS/bord](https://github.com/ordinalOS/bord)
