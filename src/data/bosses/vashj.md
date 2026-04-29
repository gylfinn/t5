---
slug: vashj
order: 10
raid: ssc
name: Lady Vashj
tocLabel: Vashj
tagline: "Sjávarnornin — Lokaboss og Gatekeeper"
portrait: "/images/bosses/portraits/vashj.jpg"
difficulty: 5
stats:
  - { k: HP, v: "~4.5M" }
  - { k: Tegund, v: "Naga" }
  - { k: Fasar, v: "3" }
  - { k: Tankar, v: "2-3" }
  - { k: Resistance, v: "Engin" }
  - { k: Bardagatími, v: "10-12 mín" }
mechanics:
  - role: tank
    name: Shock Blast (P1)
    text: "~5k frost skaði + interrupt + 2 sek stun. MÁ ekki taka með litlu HP."
  - role: move
    name: Static Charge (P1)
    text: "4 random raid members fá lightning DoT. Spread out."
  - role: adds
    label: P2
    name: Tainted Cores
    text: "Spawnast í kringum Vashj. Þú þarft að GRIPA og kasta upp á platform til að brjóta skjöldinn."
  - role: adds
    label: P2
    name: Tainted Elementals
    text: "4 spawnast á hringnum. Drepa hvern og einn."
  - role: adds
    label: P2
    name: Coilfang Striders
    text: "Hlaupa að Vashj. <em>MÁ EKKI ná henni</em> eða hún heals fullt. Kite-a þá."
  - role: raid
    label: P3
    name: Poison Bolt Volley
    text: "AoE shadow skaði á alla."
phases:
  - num: "Phase 1"
    name: "100% → 70%"
    text: "Tankurinn heldur Vashj. Forðastu Shock Blast — pre-shield ef hægt. Static Charge: spread out. Entangled players: dispel ef hægt. Burn niður á 70%."
  - num: "Phase 2"
    name: "70% → 30% — CHAOS"
    text: |
      Vashj er IMMUNE. Skiptu raidinu í teams:

      <b>Team A/B/C/D:</b> Hver á einum quadrant af herberginu, drepa Tainted Elemental sem spawnar þar.<br><b>Strider Team:</b> 2-3 hunters/mages kite Striders frá Vashj.<br><b>Core Throwers:</b> 2-3 manns sem grípa Tainted Cores og kasta upp á platform.<br><b>Sporebat killers:</b> Ranged DPS focus á flying adds.

      Ef einhver gerir mistakes (Strider nær Vashj, Core er ekki kastaður í tíma) — það er wipe.
    image:
      src: "/images/diagrams/vashj-p2.png"
      alt: "Vashj Phase 2 — quadrant map with kiting paths and pylons"
      caption: "<b>Phase 2 layout:</b> 4 áreas, 4 pylons, Guardian tanking spot í miðjunni og Strider kiting path út fyrir."
  - num: "Phase 3"
    name: "30% → 0%"
    text: "Vashj er aftur attackable. Healers full focus. Burn niður. Sporebats og Elementals eru enn að spawna en raidið ætti að vera nógu sterkt núna. Bloodlust hér."
keyPoints:
  - "Phase 2 krefst margra nátta æfingar — gerðu ekki ráð fyrir kill á fyrstu nótt"
  - "Voice communication á Discord/Vent skiptir öllu — required"
  - "Þrjú teymi MEGA mistakes drepa raid: Striders, Cores, Elementals"
  - "Hunters með Aspect of the Cheetah og Frost Trap = besti Strider kiters"
  - "Save Bloodlust á Phase 3"
tactics:
  - "<b>Tailor net</b> — engineering nets eru essential fyrir kite teams."
  - "<b>Blessing of Freedom rotation</b> á main tank í last phase (Phase 3)."
  - "<b>Number 1, 2, og 3 prio</b> er að transitiona í last phase á réttum tíma — þ.e. <em>rétt áður en næsti Strider/add spawnar</em>."
  - "<b>Tainted Core macro</b> fyrir core throwers (þrjú línum límdu inn í eina makró):"
  - "<code>/use Tainted Core</code>"
  - "<code>/y &lt;------- TAINTED CORE TO: %t ! ! !</code>"
  - "<code>/s &lt;------- TAINTED CORE TO: %t ! ! !</code>"
  - "<code>/script SendChatMessage(\"!!! YOU HAVE THE CORE !!!\", \"WHISPER\", nil, UnitName(\"target\"));</code>"
---

Lokaboss SSC og einn af þremur gatekeeper bossum (með Kael'thas) sem opna Hyjal og Black Temple. Þrír fasar með shielded phase, kiting og elementals. <em>Phase 2 er fasinn sem drepur guildi.</em>
