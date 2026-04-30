---
slug: kael
order: 4
raid: tk
name: Kael'thas Sunstrider
tocLabel: Kael
tagline: "Sólarprinsinn — Lokaboss The Eye"
portrait: "/images/bosses/portraits/kaelthas.jpg"
difficulty: 5
stats:
  - { k: HP, v: "~3M + advisors" }
  - { k: Tegund, v: "Blood Elf" }
  - { k: Fasar, v: "5" }
  - { k: Tankar, v: "3+" }
  - { k: Resistance, v: "Engin" }
  - { k: Bardagatími, v: "12-15 mín" }
tldr:
  - "Drepa advisors í röð: Thaladred → Sanguinar → Capernian → Telonicus"
  - "Save <b>Bloodlust í Fasa 3</b> (ekki Fasa 4!) — MC'd shaman eyðileggur cooldown"
  - "MT á <em>Phaseshift Bulwark</em>; melee á <em>Infinity Blade</em>; healers á <em>Cosmic Infuser</em>"
mechanics:
  - role: adds
    name: Advisors (Fasi 1)
    text: "Thaladred (Fixate, kitea), Sanguinar (Fear, tankaður á vegg), Capernian (Conflag/Fireball, lock-tankaður max range aftan í herbergi), Telonicus (Bombs, tankaður á gagnstæðum vegg). Drepa í þeirri röð."
  - role: adds
    name: Legendary Weapons (Fasi 2)
    text: "7 vopn ráðast á raidið. Hunters tanka Netherstrand Longbow (snýr frá raidi). Warrior/Druid tankar Devastation (Whirlwind one-shottar). Paladin AoE-tankar restina. Allir loota það vopn sem hentar þeirra hlutverki."
  - role: interrupt
    name: Fireball (Fasi 4)
    text: "Hreinn Fireball — one-shottar þann sem hann lendir á. <b>MÁ aldrei klárast</b> — kick rotation pre-skipuð (Mage, Rogue, Warrior, Shaman)."
  - role: tank
    name: Shock Barrier + Pyroblast (Fasi 4)
    text: "Kael fær 10 sek absorb skjöld (interrupt-immune), svo 3× Pyroblast (~50k Fire). MT notar <em>Phaseshift Bulwark</em> á fyrsta Pyroblast; raid burnir skjöldinn til að kicka annan."
  - role: move
    name: Arcane Disruption (Fasi 4)
    text: "AoE disorient á allt raidið eftir Pyroblast-cycle. Trick: <em>Staff of Disintegration</em> use effect immunear það."
  - role: dispel
    name: Mind Control (Fasi 4)
    text: "Margir raid members MC'd. Melee með <em>Infinity Blade</em> dispel-ar"
  - role: adds
    name: Phoenix + Egg (Fasi 4)
    text: "Shaman kitear eða Off-tank pickar Phoenix og dregur frá. Phoenix deyr sjálfur á Hellfire — off-tank hleypur burt áður en hann springur. Spawnar svo <b>Egg</b>; allir DPSa eggið á 15 sek annars respawnar Phoenix í fullu HP."
  - role: move
    name: Flame Strike (Fasi 4)
    text: "AoE undir folki á jörðinni — hlaupa út."
  - role: move
    name: "Gravity Lapse + Netherbeam (Fasi 5)"
    text: "Allir lyftast upp og fljúga í 30 sek. <b>Spreada í lofti</b> — Netherbeam bouncar milli folks og <em>tvöfaldar skaðann</em> á hverri bouncing. Forðastu Nether Vapor (svört ský sem minnka max HP). Ekki snerta jörðina — kastast aftur upp með skaða."
phases:
  - num: "Fasi 1"
    name: "Advisors (settir lausir í röð)"
    text: |
      Drepa í röðinni: Thaladred → Sanguinar → Capernian → Telonicus.

      <b>Staðsetning skiptir öllu</b> — advisors rísa upp aftur í Fasa 3 nákvæmlega þar sem þeir dóu. Sanguinar er tankaður upp við vegg til vinstri, Capernian lock-tankaður þar sem hann spawnar til hægri, off-tank til að soaka conflag af lock, Telonicus stackaður á Sanguinar. Thaladred deyr þar sem hann fellur (kitea aftast í herbergið).

      Melee má EKKI fara á Capernian, ekki mælt með að fara á Thaladred — Fixate one-shottar og Conflag líka.
  - num: "Fasi 2"
    name: "Legendary Weapons"
    text: |
      7 vopn spawna og ráðast á raidið: Cosmic Infuser, Devastation, Infinity Blade, Phaseshift Bulwark, Staff of Disintegration, Warp Slicer, Netherstrand Longbow.

      Hunters tanka Netherstrand Longbow til hægri (snýr frá raidi — Multi-Shot one-shottar annars). Warrior/Druid tankar Devastation (Whirlwind one-shottar). Paladin AoE-tankar restina.

      Focus order: Staff/Bow fyrst → Cosmic Infuser → restin → Phaseshift Bulwark síðast (en samt áður en Fasi 3 endar — MT þarf hann). Allir loota það vopn sem hentar þeirra hlutverki: <em>melee → Infinity Blade</em>, <em>healers → Cosmic Infuser</em>, <em>MT → Phaseshift Bulwark</em>.
  - num: "Fasi 3"
    name: "Advisors spawna allir í einu"
    text: |
      2 mín eftir vopn rísa allir 4 advisors upp samtímis á þeirra dauðastað. Tankar í position fyrirfram, healers pre-assignaðir á hvern tank.

      <b>Focus order:</b> Melee focusar <em>Lord Sanguinar</em> (Tremor Totem niður fyrir Fear); ranged focusar <em>Thaladred</em>. Þegar Thaladred deyr færist ranged á <em>Capernian</em>; þegar Sanguinar deyr færist melee á <em>Telonicus</em>.

      <b>Bloodlust HÉR — ekki seinna.</b> Ef Shaman fer í MC í Fasa 4 og ýtir á BL er hún töpuð. P3 er líka chaotic-asti partur fightsins og BL hjálpar að komast í gegn.

      Cosmic Infuser hjá healers gerir P3 viðráðanlegt (–50% Fire/Shadow á heal-targeti). Phaseshift Bulwark á MT verður að vera klár áður en Fasi 4 byrjar.
  - num: "Fasi 4"
    name: "Kael 100% → 50%"
    text: |
      Kael birtist sjálfur. Pyroblast-cycle: Shock Barrier (10 sek absorb) → 3× Pyroblast → Arcane Disruption. MT notar <em>Phaseshift Bulwark</em> á fyrsta Pyroblast; raid burnir skjöldinn til að kicka annan.

      Fireball þarf <em>alltaf</em> að interrupt-a — kick rotation. Phoenix: off-tank pickar, dregur frá; egg drepið á 15 sek. Mind Control: melee með Infinity Blade dispel-ar (weapon-based ability, ekki auto-attack); restin CC-ar á meðan.

      Trick: ef Arcane Disruption kemur, hoppa í Flame Strike til að brjóta disorient.
  - num: "Fasi 5"
    name: "True Power — Gravity Lapse"
    text: |
      Á Kael 50% lyftist allt raidið og fær 30 sek af flugi. Phoenixar evade-a á meðan — ignore-a þá.

      <b>Spreada í lofti</b> — Netherbeam bouncar milli folks og tvöfaldar skaðann á hverri bouncing. Forðastu Nether Vapor (svört ský). <em>Snertu ekki jörðina</em> — kastast aftur upp með skaða. Þegar lapse endar dettur þú niður — ekki fljúga of hátt eða dauður af falli.

      Cycle endurtekur sig þangað til Kael er dauður.
keyPoints:
  - "Ekki sofna, 15min fight"
roleTips:
  - role: tank
    tips:
      - "Færa Sanguinar/Telonicus að<em>veggnum til vinstri</em> í Fasa 1 — stjórnar spawn-stað fyrir Fasa 3"
      - "MT heldur Devastation þungt í Fasa 2 og dregur frá raidi (Whirlwind one-shottar)"
      - "<b>Phaseshift Bulwark</b> á MT á <em>fyrsta</em> Pyroblast — 100k absorb, 30 sek CD"
      - "Off-tank á Phoenix hleypur burt áður en hann deyr — springur með stóru Fire AoE"
  - role: melee
    tips:
      - "Allir taka <em>Infinity Blade</em> — slá MC'aðan félaga til að dispel-a (<b>weapon-based ability, Hamstring etc.</b>, ekki auto-attack)"
      - "Passa sig á Thaladred og Capernian í Fasa 1 — Fixate/Conflag drepa þig"
      - "Phoenix Egg drepið á 15 sek annars full respawn"
      - "Interrupt Fireball <em>í hvert einasta sinn</em>; Shock Barrier — burn fast og kicka Pyroblast"
  - role: ranged
    tips:
      - "<b>Max range</b> frá Thaladred og Capernian í Fasa 1 — bara 1 lock í Capernian Fireball range"
      - "Hunters focusa Netherstrand Longbow og snúa honum frá raidi (Multi-Shot)"
      - "Phoenix Egg drepið á 15 sek annars full respawn"
      - "Interrupt Fireball (Mage CS, Shaman Wind Shock); Shock Barrier — burn og kicka Pyroblast"
  - role: heal
    tips:
      - "<b>Max range</b> frá Thaladred og Capernian í Fasa 1"
      - "Allir taka <em>Cosmic Infuser</em> í Fasa 2 — heals gefa –50% Fire/Shadow á targeti"
      - "Pre-skipa healing assignments fyrir Fasa 3 — annars chaos"
tactics:
  - "<b>Thaladred (Warrior):</b> targetar random gaur og eltir hann — þarf að kitea. Tímea kill svo hann deyi ca aftast í herberginu. Kiteaður upp og niður allt herbergið."
  - "<b>Sanguinar (Paladin):</b> AoE Fear MAX RANGE — TREMOR! Fearar þegar hann spawnar — out-rangea og MD-a á tank. Tankaður vinstra megin við entrance frá Solarian."
  - "<b>Capernian (Mage):</b> tankaður af lock. Enginn má vera nálægt henni. MAX RANGE. Healers vera í max range við lock-tankinn. Enginn melee fer á hana. Castar Conflag á random target innan 30 yarda — líklegt að það þurfi tank til að vera alltaf næstur henni til að soaka conflag af lock-tank."
  - "<b>Telonicus (Hunter):</b> setur Remote Toy á random target, stunnar randomly í 60 sek. Castar bomb á targetið sitt — tank verður að læra að hlaupa í einhvern hring til að dodgea það. Melee þarf að passa sig."
  - "<b>Vopnin (Phase 2):</b> Exin tekin út en samt í range við AoE. Melee focusa og interrupta Cosmic Infuser. Svo er allt hitt AoE-að, focusað Cosmic Infuser. Hunters tanka og drepa bogann (pet mega ekki fara á bogann) — þeir standa til hægri frá raidinu."
  - "<b>Vopn pickup:</b> Warrior tekur Exina (spawnar fremst og í miðjunni). Druid tekur Dagger."
  - "<b>Allir Advisors í einu (P3):</b> melee á Sanguinar; annars Thaladred > Capernian > Telonicus."
---

Kael'thas safnaði sjö legendary weapons til að bjarga blóðálfunum — svo mætti Hitaveitan, tók þau af honum og notaði þau gegn honum á sömu nótt. Fimm fasar, tólf til fimmtán mínútur, og einn missaður Pyroblast-interrupt þýðir wipe og sálarkönnun fram á sunnudag.
