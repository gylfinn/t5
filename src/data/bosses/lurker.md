---
slug: lurker
order: 6
raid: ssc
name: The Lurker Below
tocLabel: Lurker
tagline: "Veiðiboss — Cast bobber to start"
portrait: "/images/bosses/portraits/lurker.jpg"
difficulty: 2
stats:
  - { k: HP, v: "~3M" }
  - { k: Tegund, v: "Beast" }
  - { k: Fasar, v: "2 (skipta)" }
  - { k: Tankar, v: "2" }
  - { k: Trigger, v: "Veiðing í polli" }
  - { k: Bardagatími, v: "~7 mín" }
tldr:
  - "Spout = <b>STÖKKVA Í VATNIÐ</b> (eða hlaupa 380° ef þér finnst það skemmtilegra)"
  - "Whirl kemur eftir Spout — bíða í vatninu áður en þú klifrar upp"
  - "Submerge: tankar grípa adds á þremur platformum"
mechanics:
  - role: move
    name: Spout
    text: "Risastór spóla af vatni sem snýst um herbergið. <em>HOPPAÐU Í VATNIÐ</em> til að forðast."
  - role: raid
    name: Whirl
    text: "AoE skaði á alla í melee með knockback."
  - role: raid
    name: Geyser
    text: "Random target, 10 yard-a skaði og knockback."
  - role: adds
    name: Submerge (90 sek)
    text: "Lurker leggur sig og 3 hópar af adds spawnast (Coilfang Ambushers og Guardians)."
phases:
  - num: "Pull"
    name: "Veiðin"
    text: "Einhver veiðir í miðjupollinum, rest fær sér einn ískaldan á meðan. Þetta tekur 10 sek til 30min (random) — Lurker birtist svo úr vatninu."
  - num: "Phase 1"
    name: "Lurker á yfirborðinu"
    text: "Þegar Spout byrjar — STÖKKVA Í VATNIÐ. Þegar Spout er búið, klifra aftur upp."
    image:
      src: "/images/diagrams/lurker-positioning.png"
      alt: "Lurker positioning — tank/heal spots, sheep marker, kiting paths"
      caption: "<b>Phase 2 setup:</b> tanks á <b>X</b> adds, melee fer saman á þá. CC-a einn add á hverjum ytri-platform, drepa hinn, svo drepa cc-aða addinn."
  - num: "Phase 2"
    name: "Submerge"
    text: "Lurker leggur sig. Adds spawnast á þremur platformum. tanks skipta sér. Drepið alla adds áður en Lurker birtist aftur."
keyPoints:
  - "Spout = kafa eða hlaupa"
  - "Sá sem veiðir á að vera einhver með veiðiskill"
  - "Muna að taka svo af sér veiðistöngina þegar Lurker mætir."
tactics:
  - "<b>CC-a vinstri add</b>, drepa hægri svo vinstri, hjálpa svo með tank-add."
  - "<b>Spoutið er ca 375 gráður</b> — engin örugg position á platformunum, þú VERÐUR að stökkva."
  - "<b>Melee fer á tank-adds 1 í einu.</b>"
  - "<b>Eftir hvert einasta Spout</b> kemur Whirlwind — melee bíða alltaf eftir því áður en þeir klifra upp."
---

Bardaginn hefst þegar einhver úr Hitaveitunni veiðir í pollinum eins og þetta sé helgarferð á Þingvöllum. Lurker birtist þegar honum hentar.
