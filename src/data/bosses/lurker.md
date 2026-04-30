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
  - "Spout = <b>STÖKKVA Í VATNIÐ</b>. Engin undantekning. (eða hlaupa 380° ef þér finnst það skemmtilegra)"
  - "Whirl kemur eftir Spout — bíða í vatninu áður en þú klifrar upp"
  - "Submerge: tankar grípa adds á þremur platformum"
mechanics:
  - role: move
    name: Spout
    text: "Risastór spóla af vatni sem snýst um herbergið. <em>HOPPAÐU Í VATNIÐ</em> til að forðast. One-shot annars."
  - role: raid
    name: Whirl
    text: "AoE skaði á alla nálæga með knockback."
  - role: raid
    name: Geyser
    text: "Random target, mikill skaði og knockback."
  - role: adds
    name: Submerge (90 sek)
    text: "Lurker leggur sig og 3 hópar af adds spawnast (Coilfang Ambushers og Guardians)."
phases:
  - num: "Pull"
    name: "Veiðing"
    text: "Einhver veiðir í miðjupollinum, rest fær sér einn ískaldan á meðan. Þetta tekur 10-30 sek (random) — Lurker birtist svo úr vatninu."
  - num: "Phase 1"
    name: "Lurker á yfirborði"
    text: "Tankurinn stendur á aðalplatformunni. Melee dpsar. Ranged stendur á hliðar-platformunum. Þegar Spout byrjar — STÖKKVA Í VATNIÐ. Þegar Spout er búinn, klifruðu upp aftur."
    image:
      src: "/images/diagrams/lurker-positioning.png"
      alt: "Lurker positioning — tank/heal spots, sheep marker, kiting paths"
      caption: "<b>Phase 1 setup:</b> tank á aðalplatformi með heal teams sitthvorum megin. Mages sheepa adds í horninu. Death Coil punktur fyrir warlocks."
  - num: "Phase 2"
    name: "Submerge"
    text: "Lurker leggur sig. Adds spawnast á þremur platformum. Off-tank og main tank skipta sér. Healers fylgja tönkum. Drepið alla adds áður en Lurker birtist aftur."
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

Bardaginn hefst þegar einhver úr Hitaveitunni veiðir í pollinum eins og þetta sé helgarferð á Þingvöll. Lurker birtist þegar honum hentar, gerir Spout sem nær einhvern veginn 375 gráðum af 360 mögulegum, og refsar öllum sem treystu platformnum sínum.
