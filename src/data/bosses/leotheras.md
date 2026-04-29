---
slug: leotheras
order: 7
raid: ssc
name: Leotheras the Blind
tocLabel: Leotheras
tagline: "Demon/Elf hybrid — Inner Demons"
portrait: "/images/bosses/portraits/leotheras.jpg"
difficulty: 4
stats:
  - { k: HP, v: "~2.5M" }
  - { k: Tegund, v: "Demon/Elf" }
  - { k: Fasar, v: "2 (skipta)" }
  - { k: Tankar, v: "Warrior + Warlock" }
  - { k: Resistance, v: "Engin" }
  - { k: Bardagatími, v: "~8 mín" }
mechanics:
  - role: move
    name: Whirlwind (Elf)
    text: "Whirlwindar í 10 sek og hreyfir sig random. Hlauptu frá honum."
  - role: raid
    name: Chaos Blast (Demon)
    text: "Casttast á random target, ~5k shadow skaði."
  - role: adds
    name: Inner Demon
    text: "5 random raid members fá Insidious Whisper. Hver klónast í demon sem þú þarft að drepa á 60 sek annars MC."
phases:
  - num: "Phase 1"
    name: "Elf form"
    text: "Warrior-tankur tekur Leotheras með Defensive Stance. Hann gerir Whirlwind á random tímum — allir hlaupa BURT. Eftir 60 sek breytist hann í Demon Form."
  - num: "Phase 2"
    name: "Demon form"
    text: "Warlock-tank (já, warlock með Soul Link og Voidwalker) tekur Demon-form Leotheras. Hann gefur Chaos Blast skaða og 5 manns fá Insidious Whisper. Hver og einn sem fær whisper þarf að DPSa eigin Inner Demon niður á 60 sek. Skiptir aftur í Elf form eftir tíma."
  - num: "Phase 3"
    name: "15% — Final form"
    text: "Á 15% kemur Final Form (mixed) — burn niður með Bloodlust."
keyPoints:
  - "Warlock með Soul Link er kleinpunktur fyrir Phase 2"
  - "Inner Demons skiptast á alla — allir verða að geta DPSað eigin demon"
  - "Tank swap milli phases er nauðsyn"
  - "Whirlwind = hlaupa eða dauður"
tactics:
  - "<b>THREAT DROP</b> eftir hvert einasta Whirlwind — tankur verður að taunta strax aftur."
  - "<b>THREAT DROP</b> þegar hann fer í Demon phase."
  - "<b>THREAT DROP</b> þegar hann fer í Human phase aftur."
  - "<b>Random fólk fær Shadow-Demon</b> — aðeins manneskjan með drauginn á sér getur drepið hann."
  - "<b>Ekki standa nálægt lock-tank</b> í Demon phase (Chaos Blast splash)."
---

Þessi gerir mismunandi hluti eftir form. Skiptist í Elf-form og Demon-form. Krefst <em>warlock-tank</em> sem er sjaldan séð í raidum.
