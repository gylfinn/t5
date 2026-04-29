---
slug: solarian
order: 3
raid: tk
name: High Astromancer Solarian
tocLabel: Solarian
tagline: "Stjörnufræðingur Sólarprinsins"
portrait: "/images/bosses/portraits/solarian.jpg"
difficulty: 3
stats:
  - { k: HP, v: "~1.5M + adds" }
  - { k: Tegund, v: "Blood Elf" }
  - { k: Fasar, v: "3" }
  - { k: Tankar, v: "2" }
  - { k: Resistance, v: "Engin" }
  - { k: Bardagatími, v: "~6 mín" }
mechanics:
  - role: move
    name: Wrath of the Astromancer
    text: "DoT á random target, springur eftir 6 sek og veldur AoE skaða. Sá sem fær þetta MÁ hlaupa frá raidinu strax."
  - role: raid
    name: Arcane Missiles
    text: "Random target, mikill arcane skaði."
  - role: tank
    name: Disarm
    text: "Tankurinn missir vopn í 10 sek."
  - role: adds
    name: Solarium Agents (Phase 1)
    text: "3 adds spawnast reglulega: priestar mind controla, warlockar summona Voidwalkers."
  - role: interrupt
    name: Mind Control
    text: "frá Priest adds — verður að interrupt-a strax."
phases:
  - num: "Fasi 1"
    name: "100% → 20%"
    text: "Tankurinn heldur Solarian. Off-tank tekur Solarium Agents um leið og þeir spawnast. Kill order: Priestar fyrst (interrupt Mind Control), svo Warlockar. Wrath of the Astromancer markar — sá sem er markaður hleypur ÚT úr raidinu strax."
  - num: "Fasi 2"
    name: "Split phase"
    text: "Solarian hverfur og þrír klón birtast. Aðeins eitt þeirra er alvöru — það hefur health bar fyrir ofan höfuðið. DPS hleypur að réttu og burnir niður."
  - num: "Fasi 3"
    name: "Burn — Voidwalker form"
    text: |
      Hún birtist aftur og enrage-ast. Mikill skaði á tankinn og raidið. Cooldowns út, burn niður.

      <em>Á 20% breytist Solarian í Voidwalker form og þarf þá að tanka eins og venjulegur tank-swap target.</em> Ármann tauntar í 20%.
keyPoints:
  - "Wrath markari þarf að hlaupa strax — staðsetning skiptir öllu"
  - "Off-tank verður að vera tilbúinn í Phase 1 fyrir Solarium Agents"
  - "Decursive eða svipaður addon hjálpar healers að sjá Wrath strax"
  - "Save Bloodlust/Heroism í Phase 3"
tactics:
  - "<b>Wrath debuff</b> — ef þú færð það, ferðu til resistance tanksins."
  - "Assigna healera á að <b>target-of-target heala</b> resistance tankana — ekkert aggro fyrr en sub-20%."
  - "<b>Droppa Frost Traps</b> niður fyrir add phase. Paladin pickar þá upp og blastað."
  - "<b>Add waves:</b> spawna 2 prestar — nukea hægri, HoJ stunna vinstri, kicka heals."
  - "<b>Soulstonea</b> resistance tankana — líklegt að þeir deyi ef þeir fá Arcane Missiles á sig."
  - "Geyma <b>Combat Res</b> á resistance tankana líka."
---

Þriggja-fasa fight með sterkri trash-líkri Phase 1, teleport mechanic í Phase 2 og burn í Phase 3.
