---
slug: karathress
order: 8
raid: ssc
name: Fathom-Lord Karathress
tocLabel: Karathress
tagline: "Council fight — Naga lord og 3 advisors"
portrait: "/images/bosses/portraits/karathress.jpg"
difficulty: 3
stats:
  - { k: HP, v: "~2M + 3×1.5M" }
  - { k: Tegund, v: "Naga (Council)" }
  - { k: Fasar, v: "4 (kill order)" }
  - { k: Tankar, v: "4" }
  - { k: Resistance, v: "Engin" }
  - { k: Bardagatími, v: "~8 mín" }
tldr:
  - "Kill order: Tidalvess → Sharkkis → Caribdis → Karathress"
  - "<em>Caribdis-team</em>: 1 tank + 1 shaman healer (Earth Shock) + 1 rogue (Kick) í horni — interrupta öll heals"
  - "Karathress <b>má ekki</b> fara undir 75% á meðan adds eru lifandi — annars stack-ar enrage úr hófi"
  - "Drepa Spitfire Totem ASAP"
mechanicsHeading: "The Council"
mechanics:
  - role: adds
    label: Hunter
    name: Sharkkis
    text: "Pet (hyena), Multi-Shot, Hurl. Drepa pet fyrst eða CC."
  - role: adds
    label: Shaman
    name: Tidalvess
    text: "Frost Shock, Earthbind og Spitfire totems. Eyðið totems strax."
  - role: adds
    label: Priest
    name: Caribdis
    text: "<em>Heals Karathress!</em> Tidal Surge (knockback), Water Bolt. Interrupts MUST."
  - role: tank
    label: Boss
    name: Karathress
    text: "Cataclysmic Bolt, Sear Nova. Enrage-ast eftir hvern látinn advisor."
phases:
  - num: "Setup"
    name: "Caribdis-team í horn"
    text: |
      Þriggja-manna team isolerar Caribdis (Priest) í horninu á herberginu frá raid member (getur þá ekki stunnað raidið):

      • <b>1 tank</b> tekur Caribdis<br>• <b>1 shaman healer</b> með <em>Earth Shock</em> bindað til að interrupt-a heals<br>• <b>1 rogue</b> með <em>Kick</em> bindað sem aukainterrupt

      Þetta team heldur Caribdis lifandi en lokaðri af allan fightinn þangað til komið er að henni í kill order.
  - num: "Phase 1"
    name: "Focus Tidalvess (Shaman)"
    text: "Restin af raidinu stackar Karathress, Tidalvess og Sharkkis saman. Paladin tank tekur alla nema bossinn sjálfan. <em>DPS focus á Tidalvess</em> — totems verða að deyja constantly (Spitfire/Earthbind/Frost Shock)"
  - num: "Phase 2"
    name: "Focus Sharkkis (Hunter)"
    text: "Tidalvess dauður. Restin færist á Sharkkis. <b>Karathress má EKKI fara undir 75% á meðan adds eru lifandi</b> — ef hann nálgast 75%, melee stoppar DPS á boss þangað til adds deyja, annars stackast enrage úr hófi."
  - num: "Phase 3"
    name: "Focus Caribdis (Priest)"
    text: "Tidalvess og Sharkkis dauðir. Allt raidið (nema nokkrir til að drepa Spitfire Totem af boss) fara í hornið til Caribdis-team og burnar hana niður. Caribdis-team hefur haldið henni öruggri allan tímann og heldur áfram að interrupt-a þangað til hún deyr."
  - num: "Phase 4"
    name: "Karathress einn — Enrage"
    text: "Allir advisors dauðir. Drepa Boss, heala tank."
keyPoints:
  - "Kill order: <b>Tidalvess → Sharkkis → Caribdis → Karathress</b>"
  - "<em>Caribdis-team</em>: 1 tank + 1 shaman healer (Earth Shock) + 1 rogue (Kick) í horni"
  - "Karathress má EKKI fara undir 75% á meðan adds eru lifandi"
  - "Bloodlust á Phase 4"
tactics:
  - "<b>Curse of Tongues á Priest</b> 100% — locki dútlar þetta."
  - "<b>Cleava hunter-pet</b> Sharkkis."
  - "<b>Þegar Shaman deyr</b> þá verða melee á boss, rest á hina adds (totem-killing)."
  - "<b>Ef bossinn fer nálægt 75%</b> þá þarf melee að stoppa DPS þangað til allir adds deyja — annars enrage stack úr hófi."
---

Karathress og þrír ráðgjafar hans halda fjölskyldufund sem Hitaveitan truflar með Cleave og Curse of Tongues. Drepur Shaman, svo Hunter, svo Priest — eins og að loka fyrir hitann í einu hverfi í senn þangað til Karathress sjálfur gefst upp og fer að enrage-ast einn í myrkrinu.
