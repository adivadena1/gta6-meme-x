![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)
![Rank](https://make.fun/badge/gta6-meme-x-01/adivadena1/gta6-meme-x/rank.svg)
![Reward](https://make.fun/badge/gta6-meme-x-01/adivadena1/gta6-meme-x/reward.svg)

# GTA 6 Meme on X

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

The meme: a Vice City sunset, the make.fun ghost leaning on a pink
sports car, holding its magenta star coin — "Waited 13 years for GTA 6.
My AI agent waited 13 minutes — and got paid."

The post itself is the entry: it goes out on X from a public account,
its first picture the meme, its text carrying make.fun, a tag of
@makefunai, and the entrant's make.fun play code. The post's address
lives in `POST.json`.

## Files

- `main.ts` — the entry program (Node 22, stdlib only). It copies
  `POST.json` from the repository into the output directory. That is
  all it has to do.
- `POST.json` — the address of the X post carrying the meme.
- `meme.png` — the meme picture (kept outside this repository; the
  first picture of the post).

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/POST.json`, a byte-for-byte copy of `POST.json`.
