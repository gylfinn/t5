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
tldr:
  - "Fasi 2: <em>Enchanted Elementals</em> mega EKKI ná Vashj — gefa Surge buff (+5% dmg, stackast)"
  - "Tainted Core throwers koma kjarnanum að öllum 4 <em>Shield Generators</em> til að taka skjöldinn niður"
  - "Fasi 3 byrjar með <b>threat wipe</b> — drepa adds fyrst, MT byggir threat upp"
mechanics:
  - role: tank
    name: Shock Blast (Fasi 1)
    text: "Nature dmg + 2 sek stun á threat target. <em>Grounding Totem</em> blockar þetta."
  - role: move
    name: Static Charge (Fasi 1)
    text: "Random target fær lightning debuff — 2k Nature skaði á alla innan 5 yarda. Hlauptu ÚT úr raidinu."
  - role: dispel
    name: Entangle (Fasi 1)
    text: "Root + DoT á alla innan 15 yarda af Vashj. Druid tank getur Shapeshiftað til að fjarlægja"
  - role: adds
    label: Fasi 2
    name: Enchanted Elementals
    text: "Hlaupa beint að Vashj. <b>Mega EKKI ná henni</b> — gefa Surge buff (+5% dmg, stackast)."
  - role: adds
    label: Fasi 2
    name: Tainted Elementals + Cores
    text: "Despawnast eftir 15 sek. Drepa hratt — droppa <em>Tainted Core</em> sem þarf til að taka niður Shield Generator. Sá sem heldur core er rootaður — kasta milli folks þangað til einhver er við generator."
  - role: adds
    label: Fasi 2
    name: Coilfang Striders
    text: "Mind Blast + <b>Panic</b> (fearar melee á range). <em>Ranged-tanked</em> — Warlock með Searing Pain eða Ele Shaman með Frost Shock. Melee ALDREI nálægt."
  - role: adds
    label: Fasi 2
    name: Coilfang Elites
    text: "<b>Cleave</b> + Hamstring. Melee target. Tank heldur þeim við miðjuna og snýr frá."
  - role: dispel
    label: Fasi 3
    name: Persuasion
    text: "(Pre-nerf Ability)<s>MC á random raid member, +999% dmg, 20 sek. Cannot CC — <b>tankar taunta</b> MC'aðan félaga (annars one-shottar healer).</s>"
  - role: adds
    label: Fasi 3
    name: Toxic Sporebats
    text: "Spawna stöðugt í Fasa 3, dropa poison clouds á jörðina. Raned focusa þá — annars fyllist herbergið smám saman af eitri (\"enrage\")."
phases:
  - num: "Fasi 1"
    name: "100% → 70%"
    text: |
      Spreada hringinn fyrirpull. 
      
      <em>Static Charge</em>: hlauptu ÚT úr raidinu strax. 

      <em>Shock Blast:</em> <b>Grounding Totem</b> blockar. 
      
      <em>Entangle:</em> Druid Shapeshift.

      <b>Öll cooldowns</b> hér — geymdu Bloodlust fyrir Fasa 3. Healers passa mana frá byrjun (Super Mana Pot + Dark Rune snemma og oft) — fightinn er langur.
  - num: "Fasi 2"
    name: "Vashj IMMUNE — Shield Generators"
    text: |
      Í 70% verður Vashj immune og 4 Shield Generators virkjast. <b>Eina leiðin að taka skjöldinn niður</b> er að einhver með <em>Tainted Core</em> klikkar á generator.

      <b>Kill assignments:</b><br>• <em>Ranged</em> → Enchanted Elementals (mega ekki ná Vashj)<br>• <em>Ranged</em> → Coilfang Striders (Warlock-tank Searing Pain, Shaman Frost Shock)<br>• <em>Melee</em> → Coilfang Elites (aftan á, forðast Cleave)<br>• <em>Tainted Core team</em> → grípa cores frá Tainted Elementals, kasta milli folks (player A lootar, B tekur við á tröppunum, C deliverar að generator)

      Tainted Core rootar. Ef Tainted Core gaurinn deyr → core hverfur, bíða eftir næsta Tainted Elemental.
    image:
      src: "/images/diagrams/vashj-p2.png"
      alt: "Vashj Phase 2 — quadrant map with kiting paths and pylons"
      caption: "<b>Phase 2 layout:</b> 4 areas, 4 pylons, Add tanking spot í miðjunni og Strider kiting path út fyrir."
  - num: "Fasi 3"
    name: "Eftir 4. generator 50% → 0%"
    text: |
      Þegar 4. Shield Generator fer niður endar Fasi 2 — Vashj <b>wipear allt threat</b>. Reyna að Line of Sighta þegar hún aktíveitast(Hún átti það til að 1shotta random raiders).

      <b>Drepa restina af adds fyrst</b> — gefur MT tíma til að byggja threat. Sporebats spawna núna og dropa poison clouds; Ranged drepa þá strax annars fyllist herbergið af eitri.

      <b>Bloodlust HÉR</b> Burn frá 50% → 0% áður en herbergið verður óhæft.
keyPoints:
  - "<em>Enchanted Elementals</em> mega aldrei ná Vashj"
  - "Fasi 3 byrjar með <b>threat wipe</b> — drepa adds fyrst, MT byggir upp"
  - "Geyma Bloodlust fyrir Fasa 3"
roleTips:
  - role: tank
    tips:
      - "Tank heldur Coilfang Elites frá raidi (Cleave)"
      - "<s><b>Taunta</b> Persuasion-MC'aða raid members — annars one-shotta þeir healers (+999% dmg)</s>"
      - "MT við Vashj þegar 4. generator fer niður — proximity threat byggist upp; raid drepur adds fyrst"
  - role: melee
    tips:
      - "Static Charge á þér? Hlauptu ÚT úr melee-pakkanum strax"
      - "Fasi 2: aftan á Coilfang Elites alltaf (Cleave); ALDREI nálægt Striders (Panic fearar)"
  - role: ranged
    tips:
      - "Static Charge á þér? Hlauptu frá öðrum"
      - "Fasi 2: focus á Coilfang Striders fyrst; bara færa á Elites ef Striders eru dauðir og engir Elementals uppi"
  - role: heal
    tips:
      - "Spreada healers jafnt um herbergið — skaði kemur úr öllum áttum"
      - "Static Charge á þér? Hlauptu frá öðrum"
      - "<em>Mana management</em> frá byrjun — Super Mana Pot + Dark Rune snemma og oft"
tactics:
  - "<b>Tailor net</b> — Tailoring nets eru góð til að slowea Strider."
  - "<b>Mikilvægt</b> er að transitiona í last phase á réttum tíma — þ.e. <em>rétt áður en næsti Strider/add spawnar</em>."
  - "<b>Tainted Core macro</b>:"
  - "<code>/use Tainted Core</code>"
  - "<code>/y &lt;------- TAINTED CORE TO: %t ! ! !</code>"
  - "<code>/s &lt;------- TAINTED CORE TO: %t ! ! !</code>"
  - "<code>/script SendChatMessage(\"!!! YOU HAVE THE CORE !!!\", \"WHISPER\", nil, UnitName(\"target\"));</code>"
---

Lady Vashj er gjöf Sólarprinsins til Illidans og versta martröð Hitaveitunnar. Þrír fasar, fimm hlutverk, og einn Enchanted Elemental sem nær henni þýðir að allar 25 sálir fara aftur upp á yfirborð og byrja að nýju.
