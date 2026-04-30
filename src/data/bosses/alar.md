---
slug: alar
order: 1
raid: tk
name: Al'ar
tagline: "Fönix-guðinn — Phoenix God"
portrait: "/images/bosses/portraits/alar.jpg"
difficulty: 3
stats:
  - { k: HP, v: "~3.5M" }
  - { k: Tegund, v: "Elemental" }
  - { k: Fasar, v: "2" }
  - { k: Tankar, v: "3" }
  - { k: Resistance, v: "Engin" }
  - { k: Bardagatími, v: "~7 mín" }
tldr:
  - "Allir hoppa <b>NIÐUR</b> á Flame Quills <em>og</em> þegar hann deyr í Fasa 1"
  - "Paladin tekur Embers og dregur þá frá raidinu áður en þeir springa"
  - "Spreada á Dive Bomb"
mechanics:
  - role: raid
    name: Flame Quills
    text: "Al'ar flýgur upp í miðjuna og rignir eldi yfir alla platformana. Hlauptu í miðjuna — öruggi staðurinn er undir honum."
  - role: adds
    name: Ember Adds
    text: "Springa þegar þeir deyja og gera mikinn eldskaða. Off-tankur safnar þeim og dregur frá raidinu fyrir kill."
  - role: tank
    name: Melt Armor (Fasi 2)
    text: "Stakkast á tankinn á meðan Al'ar er á jörðinni, tank swap."
  - role: raid
    name: Dive Bomb (Fasi 2)
    text: "Stór skaði sem dreifist á alla — Spreada"
phases:
  - num: "Fasi 1"
    name: "100% → fyrsta dauða"
    text: |
      Al'ar lendir á platform næst honum við pull og fer svo random á næstu — <em>annaðhvort til vinstri, til hægri, eða beint yfir í hina hliðina á herberginu</em> (1↔4, 2↔5, 3↔6). Tveir platformutankar skiptast og fylgja honum: annar er þar sem Al'ar er nú, hinn þarf að vera tilbúinn að bregðast við hvaða af þremur átunum sem er. Þegar Al'ar flýgur, swappar þú. DPS fylgir honum. Þriðji tankurinn (Ember-tank, oftast paladin) heldur sig nálægt og er tilbúinn að grípa Embers strax og þeir spawna.

      Auk platform-flutningsins getur Al'ar líka flogið upp í miðjuna og castað <em>Flame Quills</em> — þá rignir eldi yfir alla platformana, og <b>allur raidinn verður að hoppa niður</b> til að forðast skaðann. Eftir Flame Quills lendir hann svo á platformu 2 eða 5.

      Á 0% HP í Fasa 1 <em>springur Al'ar á platformunni</em> með stóru AoE — <b>allir melee verða að hoppa niður áður en hann deyr</b>, annars deyja þeir í explosion-inu. Eftir það fellur hann og Fasi 2 byrjar.
  - num: "Fasi 2"
    name: "Eftir endurupprisu"
    text: "Al'ar er á jörðinni allan tímann. Tankurinn heldur honum í miðjunni. Embers spawnast reglulega — annar tank tekur þá og dregur úr raidinu áður en þeir springa. Allir létt spreada fyrir Dive Bomb. Burn niður þangað til hann er dauður."
keyPoints:
  - "Þrír tankar nauðsynlegir — 2 fyrir platform-skipti í Fasa 1, + 1 á Embers. Í Fasa 2 swappa tankar á Melt Armor stacks."
  - "Healers þurfa að gripa Dive Bomb skaða með cooldowns"
  - "Forðastu eldsprengju á jörðinni eftir Phoenix kill"
tactics:
  - "<b>Platform-flutningur:</b> random — vinstri, hægri, eða beint yfir (1↔4, 2↔5, 3↔6). Sjá kort hér að ofan."
  - "<b>Allir melee hoppa niður</b> áður en hann deyr í Fasa 1 — Al'ar <em>springur</em> á platformunni þegar hann fellur, og melee á sömu platformu deyja."
  - "Fyrir <b>Flame Quill:</b> allir hoppa niður — hann ætti svo að lenda á platform 2 eða 5."
  - "<b>Paladin tank</b> pickar upp Embers; ef tankinn höndlar marga adds eru þeir geymdir fyrir P2 transition."
  - "<b>Fasi 2:</b> spreada út, tankar taunta á debuffum, paladin tankar adds sem koma úr Dive Bomb."
  - "<b>Dive Bomb</b> — (Post-nerf)Þá spreada allir. <s>(Pre-Nerf) Þá hugga og spreada svo ASAP. Healthstone á fyrsta, snake trap á öll næstu.</s>"
  - "<b>PTR observation:</b> hann fer 1 til vinstri eða 1 til hægri; ef hann fer akkúrat hinum megin þá spawnar hann adds."
  - "<em>Hlaupa úr eldi ASAP, please.</em>"
images:
  - src: "/images/diagrams/alar-platforms.png"
    alt: "Al'ar herbergið með númeruðum platformum 1–6"
    caption: "<b>Platform layout:</b> Al'ar lendir á platform næst honum i pulli og fer svo random — annaðhvort til vinstri, til hægri, eða beint yfir í hina hliðina (1↔4, 2↔5, 3↔6)."
---

Endurfæðing er uppáhaldshobbí Al’ars — sem þýðir að Hitaveitan þarf að leggja hann að velli tvisvar sama kvöldið. Hann birtist af handahófi á sex mismunandi stöðum og springur þegar hann hrynur í Fasa 1. Allir melee sem ná ekki að hoppa niður í tæka tíð fá svo óvænta kennslu í lóðréttri hreyfingu.
