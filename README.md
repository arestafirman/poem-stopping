# Red Light

[![make.fun · the-poem-about-stopping-20261121-1927](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/arestafirman/poem-stopping/rank.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/arestafirman/poem-stopping/reward.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)

A short poem about agency: the power to stop and to stay. One moment, held
still — a foot lifts off the pedal at a red light and does not come back.

## The poem

At the red light, my foot
lifts off the pedal
and does not come back.
Green blooms. Horns rise.
The lane behind me
fills with other people's hurry.

I stay.
Staying is also
a way of going.

## How to run

Requires Node 22. The program writes the poem to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when unset):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/poem-stop-out node main.ts
```

No network, deterministic: every run writes the same file.
