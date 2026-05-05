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
  - "Geyma <b>Bloodlust</b> fyrir Fasa 3(Allir Advisors í einu) (ekki Fasa 4!)"
  - "MT á <em>Phaseshift Bulwark</em>; melee á <em>Infinity Blade</em>; healers á <em>Cosmic Infuser</em>; casters á <em>Staff of Disintegration</em>"
mechanics:
  - role: adds
    name: Advisors (Fasi 1)
    text: "Thaladred (Fixate, kitea), Sanguinar (Fear, tankaður við vegg til vinstri), Capernian (Conflag/Fireball, lock-tankaður til hægri), Telonicus (Bombs, tankaður á sama stað og Sanguinar)."
  - role: adds
    name: Legendary Weapons (Fasi 2)
    text: "7 vopn ráðast á raidið. Hunters tanka Netherstrand Longbow til hægri (snýr frá raidi). Warrior/Druid tankar Devastation (Whirlwind one-shottar). Paladin AoE-tankar restina. Allir loota það vopn sem hentar þeirra hlutverki."
  - role: interrupt
    name: Fireball (Fasi 4)
    text: "One-Shot"
  - role: tank
    name: Shock Barrier + Pyroblast (Fasi 4)
    text: "Kael fær 10 sek absorb skjöld (interrupt-immune), svo Pyroblastar hann (~50k Fire). MT notar <em>Phaseshift Bulwark</em> á fyrsta Pyroblast eða raidið kickar það þegar skjöldurinn er farinn"
  - role: move
    name: Arcane Disruption (Fasi 4)
    text: "AoE disorient á tank og hann missir threat, eftir Pyroblast-cycle. Trick: <em>Staff of Disintegration</em> use effect immunear það."
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
    name: "Advisors (Einn í einu)"
    text: |
      Drepa í röðinni: Thaladred → Sanguinar → Capernian → Telonicus.

      <b>Staðsetning skiptir öllu</b> — advisors rísa upp aftur í Fasa 3 nákvæmlega þar sem þeir dóu. Sanguinar er tankaður upp við vegg til vinstri, Capernian lock-tankaður þar sem hann spawnar til hægri, off-tank til að soaka conflag af lock, Telonicus stackaður á Sanguinar. Thaladred deyr þar sem hann fellur (kitea aftast í herbergið).

      Melee má EKKI fara á Capernian, ekki mælt með að fara á Thaladred — Fixate one-shottar og Conflag líka.
  - num: "Fasi 2"
    name: "Legendary Weapons"
    text: |
      7 vopn spawna og ráðast á raidið: Cosmic Infuser, Devastation, Infinity Blade, Phaseshift Bulwark, Staff of Disintegration, Warp Slicer, Netherstrand Longbow.

      Hunters tanka Netherstrand Longbow til hægri (snýr frá raidi — Multi-Shot getur one-shottað clothies). Warrior/Druid tankar Devastation (Whirlwind one-shottar). Paladin AoE-tankar restina.

      Focus order: Staff/Bow fyrst → Cosmic Infuser → restin → Phaseshift Bulwark síðast (en samt áður en Fasi 3 endar — MT þarf hann). Allir loota það vopn sem hentar þeirra hlutverki: <em>melee → Infinity Blade</em>, <em>healers → Cosmic Infuser</em>, <em>MT → Phaseshift Bulwark</em>, <em>casters → Staff of Disintegration</em>.
  - num: "Fasi 3"
    name: "Advisors 2: Electric Boogaloo (Allir í einu)"
    text: |
      2 mín eftir að vopnin spawna, rísa allir 4 advisors upp samtímis. Tank á Sanguinar og Telonicus, 3rd tank sokar conflag af Capernian, healers pre-assignaðir á hvern tank.

      <b>Focus order:</b> Melee focusar <em>Lord Sanguinar</em> (Tremor Totem niður fyrir Fear); ranged focusar <em>Thaladred</em>. Þegar Thaladred deyr færist ranged á <em>Capernian</em>; þegar Sanguinar deyr færist melee á <em>Telonicus</em>.

      <b>Bloodlust HÉR </b> P3 er  chaotic-asti partur fightsins og BL hjálpar að komast í gegn.
  - num: "Fasi 4"
    name: "Kael 100% → 50%"
    text: |
      Kael birtist loksins. Passa að hafa caster með staf nálægt main tank, brenna niður Shock Barrier, Interrupta Pyroblast.

      Phoenix: off-tank pickar, dregur frá; egg drepið á 15 sek.

      Mind Control: melee með Infinity Blade dispel-ar (weapon-based ability, ekki auto-attack).

      Hlaupa úr Flamestrike

  - num: "Fasi 5"
    name: "True Power — Gravity Lapse"
    text: |
      Hann hættir að gera Pyroblast og Mind Control en gerir í staðinn <b>Gravity Lapse</b>:

      Þá fljúga allir, það þarf að spreada létt, dodgea Nether Vapor(svört ský), ekki snerta jörðina. 

      Hann er með stóran absorb shield meðan <b>Gravity Lapse</b> er í gangi.
keyPoints:
  - "Ekki sofna, 15min fight"
roleTips:
  - role: tank
    tips:
      - "Færa Sanguinar/Telonicus að<em>veggnum til vinstri</em> í Fasa 1 — stjórnar spawn-stað fyrir Fasa 3"
      - "Halda <b>Devastation</b> úr Whirlwind range en í Aoe range (Whirlwind one-shottar)"
      - "<b>Phaseshift Bulwark</b> á MT á <em>fyrsta</em> Pyroblast — 100k absorb, 30 sek CD"
      - "Off-tank á Phoenix hleypur burt áður en Phoenix deyr — springur með stóru Fire AoE"
  - role: melee
    tips:
      - "Allir taka <em>Infinity Blade</em> — slá MC'aðan félaga til að dispel-a (<b>weapon-based ability, Hamstring etc.</b>, ekki auto-attack)"
      - "Passa sig á Thaladred og Capernian í Fasa 1 — Fixate/Conflag drepa þig"
      - "Phoenix Egg drepið á 15 sek annars full respawn"
      - "Interrupt Pyroblast <em>í hvert einasta sinn</em>; Shock Barrier — burn fast og kicka Pyroblast"
  - role: ranged
    tips:
      - "<b>Max range</b> frá Thaladred og Capernian í Fasa 1 — bara 1 lock í Capernian Fireball range"
      - "Hunters focusa Netherstrand Longbow og snúa honum frá raidi (Multi-Shot)"
      - "Phoenix Egg drepið á 15 sek annars full respawn"
      - "Interrupt Pyroblast (Mage CS, Shaman Earth Shock)"
  - role: heal
    tips:
      - "<b>Max range</b> frá Thaladred og Capernian í Fasa 1"
      - "Allir taka <em>Cosmic Infuser</em> í Fasa 2 — heals gefa –50% Fire/Shadow á targeti"
      - "Pre-assigna healing assignments fyrir Fasa 3 — annars chaos"
tactics:
  - "<b>Thaladred (Warrior):</b> targetar random gaur og eltir hann — þarf að kitea. Tímea kill svo hann deyi ca aftast í herberginu. Kiteaður upp og niður allt herbergið."
  - "<b>Sanguinar (Paladin):</b> AoE Fear MAX RANGE — TREMOR! Fearar þegar hann spawnar — out-rangea og MD-a á tank. Tankaður vinstra megin við entrance frá Solarian."
  - "<b>Capernian (Mage):</b> tankaður af lock. Enginn má vera nálægt henni. MAX RANGE. Enginn melee fer á hana, Hunters passa pet. Castar Conflag á random target innan 30 yarda — líklegt að það þurfi tank til að vera alltaf næstur henni til að soaka conflag af lock-tank."
  - "<b>Telonicus (Hunter):</b> setur Remote Toy á random target, stunnar randomly í 60 sek. Castar bomb á targetið sitt — tank verður að læra að hlaupa í einhvern hring til að dodgea það. Melee þarf að passa sig."
  - "<b>Vopnin (Phase 2):</b> Exin tekin út en samt í range við AoE. Melee focusa og interrupta Cosmic Infuser. Svo er allt hitt AoE-að, focusað Cosmic Infuser. Hunters tanka og drepa bogann (pet mega ekki fara á bogann) — þeir standa til hægri frá raidinu."
  - "<b>Allir Advisors í einu (P3):</b> melee á Sanguinar svo Telonicus; ranged á Thaladred svo Capernian."
---

Kael'thas safnaði sjö legendary weapons til að bjarga blóðálfunum — svo mætti Hitaveitan, tók þau af honum og notaði þau gegn honum. Fimm fasar, tólf til fimmtán mínútur.
