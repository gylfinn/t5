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
  - "Paladin tekur phoenix adds og dregur þá frá raidinu áður en þeir springa"
  - "Spreada á Dive Bomb í Fasa 2"
mechanics:
  - role: raid
    name: Flame Quills
    text: "Al'ar flýgur upp í miðjuna og rignir eldi yfir alla platformana. Allir hoppa niður."
  - role: adds
    name: Ember Adds
    text: "Springa þegar þeir deyja og gera mikinn eldskaða. Off-tank safnar þeim og dregur frá raidinu fyrir kill."
  - role: tank
    name: Melt Armor (Fasi 2)
    text: "Stakkast á tankinn á meðan Al'ar er á jörðinni, tank swap."
  - role: raid
    name: Dive Bomb (Fasi 2)
    text: "Al'ar flýgur uppí loft og targetar 1 leikmann og gerir skaða i kringum hann — Spreada"
phases:
  - num: "Fasi 1"
    name: "100% → fyrsti dauði"
    text: |
      Al'ar lendir á platform næst honum við pull og fer svo random — <em>annaðhvort til vinstri, til hægri, eða beint yfir í hina hliðina á herberginu</em> (1↔4, 2↔5, 3↔6). Það þarf tvo tanks uppi: annar tankar hann, hinn þarf að vera hinum megin tilbúinn að grípa hann.  Þriðji tankurinn (Ember-tank) er niðri og tekur adds þegar þeir spawna.

      Auk platform-flutningsins getur Al'ar líka flogið upp í miðjuna og castað <em>Flame Quills</em> — þá rignir eldi yfir alla platformana, og <b>allir sem eru uppi þurfa að horfa niður</b> til að forðast skaðann. Eftir Flame Quills lendir hann svo á platformu 2 eða 5. 
      Shadowfiend er clutch til að stoppa aoe dmg á meðan tank hleypur aftur upp.

      Þegar Al'ar fer í 0% HP þá springur hann, þannig í svona 5% hoppa melee niður áður en hann springur og casters klára hann. Svo byrjar fasi 2
  - num: "Fasi 2"
    name: "Eftir endurupprisuna"
    text: "Al'ar spawnar niðri. Tankurinn heldur honum í miðjunni. Embers spawnast reglulega — Add tank tekur þá og dregur úr raidinu áður en þeir springa. Allir létt spreada fyrir Dive Bomb. Burn niður þangað til hann er dauður."
keyPoints:
  - "Þrír tankar nauðsynlegir — 2 fyrir platform-skipti í Fasa 1, + 1 á Embers. Í Fasa 2 swappa tankar á Melt Armor stacks."
  - "Hoppa niður áður en boss deyr í fasa 1 og fyrir Flame Quills"
  - "Forðast eld"
tactics:
  - "<b>Platform-flutningur:</b> random — vinstri, hægri, eða beint yfir (1↔4, 2↔5, 3↔6). Sjá kort hér að ofan."
  - "<b>Allir melee hoppa niður</b> áður en hann deyr í Fasa 1."
  - "Fyrir <b>Flame Quills:</b> allir hoppa niður — hann ætti svo að lenda á platform 2 eða 5."
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
