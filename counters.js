const counters = [
    {
        titulo: "Absolute A-Force",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "Y" },
            { counter: "Absolute A-Force", rating: 2, observacao: "Y" },
            { counter: "Gamma + Mephisto (no She-Hulk)", rating: 3, observacao: "Y" },
            { counter: "Knowhere + Odin + Apocalypse (no Star-Lord (Annihilation) and Thor (Infinity War))", rating: 3, observacao: "Y" },
            { counter: "Gamma + Apocalypse + Morgan Le Fay (no She-Hulk and Abomination)", rating: 3, observacao: "Y" },
            { counter: "Cabal + Mephisto + Ares", rating: -2, observacao: "Y" },
            { counter: "Astral", rating: -3, observacao: "Y" }
        ]
    },
    {
        titulo: "Abosolute A-Force + Professor Xavier + Knull",
        subtitulo: [
            { counter: "Liberty + Quasar (no War Machine)", rating: 2, observacao: "Y" }
        ]
    },
    {
        titulo: "Absolute A-Force + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull + Mephisto (no Venom and Gwenom)", rating: 3, observacao: "Y" },
            { counter: "Absolute A-Force", rating: 2, observacao: "Y" },
            { counter: "Cabal + Mephisto + Ultimus", rating: 2, observacao: "Y" },
            { counter: "Liberty", rating: 2, observacao: "Y" },
            { counter: "Absolute A-Force + Black Knight + Super Skrull", rating: 1, observacao: "Y" }
        ]
    },
    {
        titulo: "Absolute A-Force + Super Skrull + Dormammu",
        subtitulo: [
            { counter: "Brimstone", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Knull + Mephisto (no Venom and Gwenom)", rating: 3, observacao: "Y" },
            { counter: "Liberty", rating: 2, observacao: "Y" },
            { counter: "Cabal + Mephisto + Ultimus", rating: 2, observacao: "Y" },
            { counter: "Secret Warrior", rating: 1, observacao: "N" },
            { counter: "Absolute A-Force", rating: 1, observacao: "Y" },
            { counter: "Absolute A-Force + Black Knight + Super Skrull", rating: 1, observacao: "Y" }
        ]
    },
    {
        titulo: "Absolute A-Force + Odin",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull + Mephisto (no Venom and Gwenom)", rating: 3, observacao: "Y" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 2, observacao: "Y" }
        ]
    },
    {
        titulo: "Absolute A-Force + Mephisto + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Knull", rating: 2, observacao: "Y" },
            { counter: "Liberty + Mephisto", rating: 1, observacao: "Y" },
            { counter: "Secret Warrior", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Absolute A-Force + Odin + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 2, observacao: "Y" },
            { counter: "Mephisto + Ares + Ultimus + Apocalypse + Scarlet Witch (Zombie)", rating: 1, observacao: "Y" },
            { counter: "Undying + Odin", rating: 0, observacao: "N" },
            { counter: "Liberty", rating: 0, observacao: "Y" },
            { counter: "Cabal + Apocalypse + Ultimus", rating: 0, observacao: "Y" },
            { counter: "Quasar + Phoenix Force + Scientist Supreme + Nimrod", rating: 1, observacao: "Y" }
        ]
    },
    {
        titulo: "Absolute A-Force + Mephisto + Black Knight",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Orchis + Quasar (no Omega Sentinel)", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Kahhori + Ms. Marvel (Classic) + Knull + Mephisto + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Knull + Ultimus", rating: 2, observacao: "Y" }
        ]
    },
    {
        titulo: "Kahhori + Ms. Marvel (Classic) + Nightcrawler + Mephisto + Thanos (Endgame)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Quasar (no War Machine)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Kahhori + Ms. Marvel (Classic) + Medusa/Super Skrull + Mephisto + Thanos (Endgame)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Knull (no War Machine)", rating: 2, observacao: "Y" },
            { counter: "Absolute A-Force + Mephisto + Knull (no Ironheart and Wasp)", rating: 1, observacao: "Y" }
        ]
    },
    {
        titulo: "Kahhori + Ms. Marvel (Classic) + Spider-Man (Pavitr) + Red Goblin + Carnage",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: -2, observacao: "Y" },
            { counter: "Undying + Mephisto", rating: 2, observacao: "Y" },
            { counter: "Absolute A-Force", rating: -2, observacao: "Y" }
        ]
    },
    {
        titulo: "Kahhori + Ms. Marvel (Classic) + Odin + Knull + Dormammu",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 1, observacao: "Y" },
            { counter: "Cabal + Ultimus + Odin", rating: 2, observacao: "Y" }
        ]
    },
    {
        titulo: "Accursed",
        subtitulo: [
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Underworld", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: 2, observacao: "N" },
            { counter: "Superior Six + Vulture (no Spider Slayer)", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Nightstalker", rating: 1, observacao: "N" },
            { counter: "Illuminati", rating: 1, observacao: "N" },
            { counter: "Cabal + Songbird + Nova", rating: 1, observacao: "N" },
            { counter: "Cabal + Kang + Apocalypse", rating: 1, observacao: "N" },
            { counter: "Orchis", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Accursed + Cosmic Ghost Rider",
        subtitulo: [
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Accursed + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Alpha Flight",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "Y" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "Y" },
            { counter: "Liberty", rating: 3, observacao: "Y" },
            { counter: "Absolute A-Force + Nico Minoru (no Ironheart)", rating: 2, observacao: "N" },
            { counter: "A-Force + Apocalypse (no Captain Marvel)", rating: 2, observacao: "N" },
            { counter: "Illuminati with Captain Britain", rating: 2, observacao: "Y" },
            { counter: "4 Out Of Time (no Black Knight)", rating: 2, observacao: "Y" },
            { counter: "Knowhere + Apocalypse (no Star-Lord Annihilation or Thor Infinity War)", rating: 1, observacao: "Y" },
            { counter: "Gamma + Apocalypse (no Abomination)", rating: -1, observacao: "Y" },
            { counter: "Vigilante", rating: 1, observacao: "Y" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Alpha Flight + Odin",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 1, observacao: "Y" },
            { counter: "Absolute A-Force + Nico Minoru (no Ironheart)", rating: 1, observacao: "N" },
            { counter: "Thunderbolts", rating: 1, observacao: "Y" }
        ]
    },
    {
        titulo: "Alpha Flight + Mephisto + America Chavez",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull + Scarlet Witch (Zombie) (no Venom and Gwenom)", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Phoenix Force duo + Apocalypse + Thanos (Endgame) + Emma Frost (X-Men)", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Alpha Flight + Mephisto + Ares",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Knull + Undying", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull + Scarlet Witch (Zombie) (no Venom and Gwenom)", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" },
            { counter: "Mercs for Money + Odin (no Deathpool)", rating: 2, observacao: "N" },
            { counter: "Nightstalker + Odin (no Moonknight)", rating: 0, observacao: "N" },
            { counter: "Secret Warrior", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Alpha Flight + Mephisto + Shadow King",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Alpha Flight + Ares + America Chavez",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Alpha Flight + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Secret Defenders + Apocalypse", rating: 2, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Super Skrull", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Ares + Red Hulk", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 2, observacao: "N" },
            { counter: "Mirror Match", rating: 2, observacao: "N" },
            { counter: "Weapon X", rating: 2, observacao: "N" },
            { counter: "Cabal + 2", rating: 2, observacao: "N" },
            { counter: "Superior 6 + Emma Frost", rating: 2, observacao: "N" },
            { counter: "Nightstalker", rating: 1, observacao: "N" },
            { counter: "Out of Time", rating: 1, observacao: "N" },
            { counter: "Gamma", rating: 1, observacao: "N" },
            { counter: "Illuminati", rating: 1, observacao: "N" },
            { counter: "Knowhere", rating: 1, observacao: "N" },
            { counter: "A-Force", rating: 0, observacao: "N" },
            { counter: "Underworld", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Starjammer + Odin (no Havok)", rating: 2, observacao: "N" },
            { counter: "Absolute A-Force", rating: 1, observacao: "N" },
            { counter: "Secret Warrior", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Odin + Professor Xavier",
        subtitulo: [
            { counter: "Quasar + Ares + Mephisto + Phoenix Force (Quasar needs to have his Awakened Ultimate)", rating: 3, observacao: "Y" },
            { counter: "Quasar + Ares + Odin + Havok + Storm (Quasar needs to have his Awakened Ultimate)", rating: 3, observacao: "Y" },
            { counter: "Quasar + Jean Grey + Storm + Apocalypse + Songbird (Quasar needs to have his Awakened Ultimate)", rating: 3, observacao: "N" },
            { counter: "Quasar + Jean Grey + Storm + Professor Xavier + Songbird (Quasar needs to have his Awakened Ultimate)", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force + Professor Xavier + Knull", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "3 New Annihilator + Odin + Ares",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "3 New Absolute A-Force + Apocalypse + Red Hulk", rating: 2, observacao: "Y" },
            { counter: "Liberty", rating: 2, observacao: "Y" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 2, observacao: "Y" },
            { counter: "Nightstalker + Mephisto (no Moon Knight)", rating: -2, observacao: "Y" },
            { counter: "Orchis + Mephisto (no Omega Sentinel", rating: -2, observacao: "Y" },
            { counter: "Undying + Odin", rating: 3, observacao: "Y" }
        ]
    },
    {
        titulo: "Annihilator + Knull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "Y" },
            { counter: "Mercs For Money + Ares (no Deathpool)", rating: 3, observacao: "Y" },
            { counter: "Super Skrull + Odin + Doctor Doom + Phoenix Force Duo", rating: 2, observacao: "Y" },
            { counter: "Thunderbolt", rating: 2, observacao: "Y" },
            { counter: "Secret Warrior", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Mephisto + Knull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Quasar + Apocalypse + Red Hulk + Void Knight + Brawn", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Odin + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Odin + Knull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Quasar + Ares + Undying (no Juggernaut (Zombie)) (Quasar needs to have his Awakened Ultimate)", rating: 3, observacao: "N" },
            { counter: "Quasar + Ares + Jean Grey + Storm + Havok", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force + Quasar (no Wasp)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Odin + Emma Frost (X-Men)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Quasar", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Annihilator + Kahhori + Ironheart",
        subtitulo: [
            { counter: "Mighty Avengers", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Gorr + Gladiator + Thanos (Endgame) + Odin + Moondragon",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 2, observacao: "Y" },
            { counter: "Absolute A-Force", rating: 2, observacao: "Y" },
            { counter: "Nightstalker + Mephisto (no Moon Knight", rating: -1, observacao: "Y" },
            { counter: "Orchis + Mephisto (no Omega Sentinel)", rating: -2, observacao: "Y" }
        ]
    },
    {
        titulo: "Gorr + Thanos (Endgame) + Knull + Odin + Super Skrull",
        subtitulo: [
            { counter: "Liberty + Professor Xavier", rating: 2, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Quasar + Scientist Supreme + Nimrod + Phoenix Force", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Gorr + Thanos (Endgame) + Knull + Mephisto + Ares",
        subtitulo: [
            { counter: "Quasar + Super Skrull + Thanos (Endgame) + Kahhori + Oath", rating: -2, observacao: "N" },
            { counter: "Absolute A-Force + Knull + Quasar (no Wasp and Ironheart)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Astral",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Undying + Ares (start with Scarlet Witch Zombie’s Basic)", rating: 3, observacao: "N" },
            { counter: "Undying + Phoenix Force Duo (without Scarlet Witch (Zombie))", rating: 3, observacao: "Y" },
            { counter: "Mercs For Money + Apocalypse", rating: 3, observacao: "N" },
            { counter: "Cabal + Kang + Apocalypse", rating: 3, observacao: "Y" },
            { counter: "Quasar + Apocalypse + Red Hulk + Void Knight + Brawn", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Liberty (Stun Strange with Peggy, focus on Shadow King)", rating: 1, observacao: "N" },
            { counter: "Absolute A-Force (full focus on Strange)", rating: 1, observacao: "N" },
            { counter: "Mighty Avenger", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Astral + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Knull + Undying", rating: 2, observacao: "N" },
            { counter: "Quasar + Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: -3, observacao: "N" },
            { counter: "Mighty Avengers", rating: -3, observacao: "N" },
            { counter: "Quasar + Apocalypse + Red Hulk + Void Knight + Brawn", rating: 3, observacao: "N" },
            { counter: "Liberty + Odin", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Astral + Mephisto + Thanos (Endgame) (no Shadow King and Emma Frost (X-Men))",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Astral + Cosmic Ghost Rider",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 3, observacao: "Y" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 2, observacao: "N" },
            { counter: "Absolute A-Force", rating: 1, observacao: "Y" },
            { counter: "Mercs for Money + Apocalypse", rating: 3, observacao: "Y" },
            { counter: "Liberty", rating: 2, observacao: "Y" },
            { counter: "Mephisto + Nightstalker / Orchis", rating: 2, observacao: "Y" },
            { counter: "Quasar + Apocalypse + Red Hulk + Void Knight + Brawn", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Astral + Odin",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty + Mephisto", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 1, observacao: "N" },
            { counter: "Quasar + Ares + Storm + Jean Grey + Havok", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Astral + Black Cat",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Astral + Blue Marvel",
        subtitulo: [
            { counter: "Brimstone + Guardian (no Elsa Bloodstone)", rating: 1, observacao: "N" },
            { counter: "Secret Warrior", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Black Order",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "New Avengers", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 1, observacao: "N" },
            { counter: "Deathseed", rating: 1, observacao: "N" },
            { counter: "Underworld", rating: 1, observacao: "N" },
            { counter: "Eternals + 3", rating: 3, observacao: "N" },
            { counter: "Darkhold", rating: 3, observacao: "N" },
            { counter: "Unlimited X-Men", rating: 2, observacao: "N" },
            { counter: "Infinity Watch", rating: 1, observacao: "N" },
            { counter: "A-Force", rating: 3, observacao: "N" },
            { counter: "Black Order", rating: 2, observacao: "N" },
            { counter: "Undying trio", rating: 3, observacao: "N" },
            { counter: "Annihilators", rating: 3, observacao: "N" },
            { counter: "Nightstalkers", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Brimstone",
        subtitulo: [
            { counter: "Brimstone + Emma Frost (no Elsa Bloodstone)", rating: 3, observacao: "N" },
            { counter: "Winter Guard", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Emma Frost", rating: -2, observacao: "N" },
            { counter: "Emma Frost + Emma Frost (X-Men) + Storm + Jean Grey + Ares", rating: -3, observacao: "N" },
            { counter: "Emma Frost + Black Cat + Scarlet Witch (Zombie) + Havok + Songbird", rating: -2, observacao: "N" },
            { counter: "Emma Frost + Emma Frost (X-Men) + Havok + Storm + Black Cat", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Brimstone + Apocalypse",
        subtitulo: [
            { counter: "Winter Guard", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Professor Xavier", rating: -3, observacao: "N" },
            { counter: "Annihilator + Quasar + Odin", rating: -3, observacao: "N" },
            { counter: "Annihilator + Professor Xavier + Emma Forst (X-Men)", rating: -3, observacao: "N" },
            { counter: "Astral + Professor Xavier (no Moondragon)", rating: -3, observacao: "N" },
            { counter: "Phoenix Force + Knull + Black Cat + Quasar", rating: -3, observacao: "N" },
            { counter: "Secret Warriors + Scarlet Witch (Zombie) / Quasar (no Domino)", rating: -2, observacao: "N" },
            { counter: "Scarlet Witch (Zombie) + Yo-Yo (Raider) + Black Widow (Striker) + Guardian + Black Cat", rating: -2, observacao: "N" },
            { counter: "Vigilante", rating: -1, observacao: "Y" }
        ]
    },
    {
        titulo: "Cabal + Kang + 1",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Superior Six", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 2, observacao: "N" },
            { counter: "A-Force", rating: 2, observacao: "N" },
            { counter: "Undying", rating: 2, observacao: "N" },
            { counter: "New Avengers", rating: 2, observacao: "N" },
            { counter: "X-Treme X-Men", rating: 2, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 2, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Tangled+Eternals", rating: 1, observacao: "N" },
            { counter: "Hive-Mind", rating: 1, observacao: "N" },
            { counter: "Underworld", rating: 1, observacao: "N" },
            { counter: "Darkhold", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Cabal + Black Knight + Doom",
        subtitulo: [
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Weapon X + Ares (no Sabretooth and Wolverine)", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Cabal + Kang + Ultimus",
        subtitulo: [
            { counter: "Cabal + Kang + Emma Frost", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Cabal + Phoenix Force",
        subtitulo: [
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Secret Warriors", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Champion",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 2, observacao: "N" },
            { counter: "Immortal Weapon", rating: 1, observacao: "N" },
            { counter: "Nightstalker", rating: 1, observacao: "N" },
            { counter: "Orchis", rating: 1, observacao: "N" },
            { counter: "Vigilante", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Daring Warrior",
        subtitulo: [
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Mercs for Money + Taskmaster", rating: 3, observacao: "N" },
            { counter: "Nightstalker", rating: 3, observacao: "N" },
            { counter: "Orchis", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Mercs for Money + Scarlet Witch (Zombie) (no Deathpool)", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Emma Frost (no The Thing)", rating: 3, observacao: "N" },
            { counter: "Ares + Scarlet Witch (Zombie) + Black Cat + Emma Frost (X-Men) + Storm", rating: -2, observacao: "N" },
            { counter: "Quasar + Thunderbolt (no Taskmaster)", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Professor Xavier",
        subtitulo: [
            { counter: "Brimstone + Black Cat", rating: 2, observacao: "Y" },
            { counter: "Fantastic Four (MCU) + Mephisto + Emma Frost", rating: 2, observacao: "N" },
            { counter: "Liberty + Quasar", rating: 1, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Professor Xavier + Emma Frost (no The Thing and Mr. Fantastic (MCU))", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Professor Xavier + Nightcrawler",
        subtitulo: [
            { counter: "Quasar + Mephisto + Ares + Storm + Black Cat", rating: 3, observacao: "Y" },
            { counter: "Quasar + Black Panther (Shuri) + Ares + Storm + Songbird", rating: 2, observacao: "Y" },
            { counter: "Brimstone", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Professor Xavier + Blue Marvel",
        subtitulo: [
            { counter: "Professor Xavier + Quasar + Shadow King + Blue Marvel + Dormammu", rating: 3, observacao: "N" },
            { counter: "Brimstone + Apocalypse (no Elsa Bloodstone)", rating: 2, observacao: "N" },
            { counter: "Professor Xavier + Quasar + Yo-Yo + Black Widow + Guardian", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Professor Xavier + Odin",
        subtitulo: [
            { counter: "Quasar + Ares + Black Cat + Songbird + Havok or Mephisto if punch up is huge", rating: 2, observacao: "Y" },
            { counter: "Fantastic Four (MCU) + Professor Xavier + Black Cat", rating: 1, observacao: "Y" },
            { counter: "Fantastic Four (MCU) + Quasar (no The Thing)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Professor Xavier + Mephisto",
        subtitulo: [
            { counter: "Fantstic Four (MCU) + Professor Xavier + Emma Frost", rating: 3, observacao: "N" },
            { counter: "Liberty + Quasar", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Professor Xavier + Emma Frost",
        subtitulo: [
            { counter: "Brimstone + Apocalypse (no Elsa Bloodstone)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Mephisto + Thanos (Endgame)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Quasar + Black Cat + Songbird + Ares + Apocalypse", rating: 2, observacao: "Y" },
            { counter: "Mercs for Money + Knull + Sasquatch, or any other pre-Taunt (no Deathpool and Daken)", rating: 3, observacao: "Y" },
            { counter: "Undying", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Odin + Nightcrawler (no Invisible Woman (MCU) and The Thing)",
        subtitulo: [
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Ares + Black Cat (no Mister Fantastic (MCU) and The Thing)", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Fantastic Four (MCU) + Odin",
        subtitulo: [
            { counter: "Undying", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Gamma",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Secret Defenders", rating: 3, observacao: "N" },
            { counter: "Undying Trio", rating: 3, observacao: "N" },
            { counter: "New Avengers", rating: 3, observacao: "N" },
            { counter: "Superior/Sinister Six (Doc Oc, Green Goblin (Classic), Vulture, Rhino, Mysterio)", rating: 3, observacao: "N" },
            { counter: "A-Force", rating: 1, observacao: "N" },
            { counter: "GAMMA Team", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Hellfire Club",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Defender (Stun Sebastian with Black Cat’s Special)", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Illuminati", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Underworld + Kestrel (no Nobu)", rating: 3, observacao: "N" },
            { counter: "Green Goblin (Classic) + Lizard + Kraven + Vulture + Shocker", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Green Goblin (Classic) + Vulture", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Quasar + 4 (Orchis or Nightstalker or Knowhere or Vigilante or Thunderbolt…)", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Kull (start with Knull’s Ultimate)", rating: 2, observacao: "N" },
            { counter: "Astral", rating: -3, observacao: "N" },
            { counter: "Nightstalker + Ares", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "New Avengers", rating: 3, observacao: "N" },
            { counter: "Underworld", rating: 3, observacao: "N" },
            { counter: "Nightstalkers", rating: 2, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "A-Force", rating: 2, observacao: "N" },
            { counter: "Weapon X", rating: 2, observacao: "N" },
            { counter: "X-Treme X-Men", rating: 2, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Secret Warriors", rating: 2, observacao: "N" },
            { counter: "Tangled Web + 3", rating: -1, observacao: "N" },
            { counter: "Eternals + Emma Frost + Loki +1", rating: -2, observacao: "N" },
            { counter: "Darkhold", rating: -2, observacao: "N" },
            { counter: "War Dogs", rating: -2, observacao: "N" },
            { counter: "Death Seed", rating: -3, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Annihilators", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying + Odin", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 2, observacao: "N" },
            { counter: "Secret Warriors", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: 3, observacao: "N" },
            { counter: "New Avengers", rating: 1, observacao: "N" },
            { counter: "Secret Warriors", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind + Knull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 1, observacao: "N" },
            { counter: "Liberty", rating: 1, observacao: "N" },
            { counter: "Undying + Apocalypse", rating: 1, observacao: "N" },
            { counter: "Underworld", rating: 2, observacao: "N" },
            { counter: "Mercs For Money", rating: -2, observacao: "N" },
            { counter: "Secret Warriors", rating: -2, observacao: "N" },
            { counter: "Nightstalkers", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind + Knull + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 1, observacao: "N" },
            { counter: "Undying + Apocalypse", rating: 1, observacao: "N" },
            { counter: "Secret Warriors", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind + Knull + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 1, observacao: "N" },
            { counter: "Absolute A-Force (focus on Knull from start)", rating: 1, observacao: "N" },
            { counter: "Mighty Avengers + Knull (no Vision", rating: 1, observacao: "N" },
            { counter: "Mighty Avengers + Odin (no Vision", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Hive-Mind + Ares",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Weapon X + Ares (no Lady Deathstrike)", rating: 1, observacao: "N" },
            { counter: "Thunderbolt", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Illuminati (without Captain Britain)",
        subtitulo: [
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Superior Six with Vulture", rating: 3, observacao: "N" },
            { counter: "Undying + 2", rating: 3, observacao: "N" },
            { counter: "A-Force", rating: 3, observacao: "N" },
            { counter: "Skrull +2 Villain +2 Heroes", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "Secret Defenders", rating: 3, observacao: "N" },
            { counter: "X-treme X-Men + Rogue", rating: 2, observacao: "N" },
            { counter: "New Avenger", rating: 2, observacao: "N" },
            { counter: "Apocalypse + 4", rating: 3, observacao: "N" },
            { counter: "Annihilators", rating: 2, observacao: "N" },
            { counter: "Nightstalkers", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Illuminati (with Captain Britain)",
        subtitulo: [
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Astral", rating: 2, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Gamma (catch Hank Pym with Red Hulk Special, and stun him with Abomination Ultimate after)", rating: 2, observacao: "N" },
            { counter: "Superior Six with Vulture", rating: 3, observacao: "N" },
            { counter: "A-Force", rating: 2, observacao: "N" },
            { counter: "Skrull +2 Villain +2 Heroes", rating: 2, observacao: "N" },
            { counter: "Apocalypse + 4", rating: 2, observacao: "N" },
            { counter: "Secter Defenders", rating: 2, observacao: "N" },
            { counter: "Starjammer + Ares (no Havok)", rating: -2, observacao: "N" },
            { counter: "Mighty Avengers", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Illuminati + Thanos (Endgame)",
        subtitulo: [
            { counter: "Fantastic Four (MCU)", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Immortal Weapon",
        subtitulo: [
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" },
            { counter: "Absolute A-Force", rating: 2, observacao: "N" },
            { counter: "Ares + Orchis/Nightstalker/Thunderbolt/Insidious SIx/Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: 1, observacao: "N" },
            { counter: "Mighty Avenger", rating: 1, observacao: "N" },
            { counter: "Hive-MInd + Knull + Gorr", rating: 1, observacao: "N" },
            { counter: "Astral", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Immortal Weapon + Odin",
        subtitulo: [
            { counter: "Undying", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Immortal Weapon + Professor Xavier",
        subtitulo: [
            { counter: "Quasar + Ares + Mephisto + Storm + Black Cat", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Immortal X-Men",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Superior Six with Vulture and Mysterio", rating: 3, observacao: "N" },
            { counter: "Nightstalker", rating: 3, observacao: "N" },
            { counter: "Odin/Mephisto + 4", rating: 3, observacao: "N" },
            { counter: "Skrull +2 Villain +2 Heroes", rating: 3, observacao: "N" },
            { counter: "New Avengers", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 3, observacao: "N" },
            { counter: "Secret Defenders", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Immortal X-Men + Black Knight + Nightcrawler",
        subtitulo: [
            { counter: "Thunderbolt", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Infestation",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 2, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior + Ares (no Yo-Yo)", rating: 3, observacao: "N" },
            { counter: "Sinister/Superior Six (Green Goblin (Classic), Kraven, Doctor Octopus, Vulture, Mysterio)", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)(Stun Big Time with The Thing’s Ultimate)", rating: 3, observacao: "N" },
            { counter: "New Avengers (Stun Big Time with The Thing’s Ultimate)", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Knowhere (Stun Big Time with Nova’s Special)", rating: 2, observacao: "N" },
            { counter: "Ares + Orchis or Nightstalker or Immortal X-Men", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 2, observacao: "N" },
            { counter: "Astral", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Insidious Six + Vulture + Shocker",
        subtitulo: [
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Underworld + Kestrel (no Nobu)", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Cabal + Kang + Super Skrull", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 2, observacao: "N" },
            { counter: "Absolute A-Force", rating: 1, observacao: "N" },
            { counter: "Mighty Avenger", rating: -1, observacao: "N" },
            { counter: "Orchis", rating: -2, observacao: "N" },
            { counter: "Nightstalker", rating: -2, observacao: "N" },
            { counter: "Thunderbolt", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Insidious Six + Vulture +Green Goblin (Classic)",
        subtitulo: [
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 2, observacao: "N" },
            { counter: "Orchis + Ares (no Omega Sentinel)", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 1, observacao: "N" },
            { counter: "Nightstalker", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Knowhere",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Knowhere", rating: 1, observacao: "N" },
            { counter: "New Avengers", rating: -1, observacao: "N" },
            { counter: "Secret Defenders(no Photon) + Apocalypse", rating: -2, observacao: "N" },
            { counter: "Black Order(drop Cull) + Apocalypse", rating: -2, observacao: "N" },
            { counter: "Gamma", rating: -3, observacao: "N" },
            { counter: "Illuminati with Captain Britain", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Liberty",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Mercs for Money + Nightcrawler + Dormammu (no Deathpool and Daken)", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Emma Frost (no The Thing)", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 2, observacao: "N" },
            { counter: "Liberty", rating: 1, observacao: "N" },
            { counter: "Absolute A-Force + Odin/Mephisto (no Wasp)", rating: 1, observacao: "N" },
            { counter: "Orchis + Odin/Mephisto (no Omega Sentinel)", rating: -1, observacao: "N" },
            { counter: "Nightstalker + Odin/Mephisto (no Moon Knight)", rating: -1, observacao: "N" },
            { counter: "Astral", rating: -3, observacao: "N" },
            { counter: "Annihilator + Phoenix Force (no Silver Surfer and Ultimus)", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Liberty + Professor X",
        subtitulo: [
            { counter: "Quasar + Apocalypse + Songbird + Jean Grey + Storm", rating: 2, observacao: "Y" }
        ]
    },
    {
        titulo: "Mercs For Money",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 2, observacao: "N" },
            { counter: "Undying + 1", rating: 2, observacao: "N" },
            { counter: "Underworld", rating: -2, observacao: "N" },
            { counter: "Liberty", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Mighty Avengers",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Superior Six with Vulture and Mysterio", rating: 3, observacao: "N" },
            { counter: "Nightstalkers", rating: 3, observacao: "N" },
            { counter: "Odin/Mephisto + 4", rating: 3, observacao: "N" },
            { counter: "Skrull +2 Villain +2 Heroes", rating: 3, observacao: "N" },
            { counter: "Apocalypse + 4", rating: 2, observacao: "N" },
            { counter: "Secret Defenders", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "New Mutant",
        subtitulo: [
            { counter: "Orchis", rating: 3, observacao: "N" },
            { counter: "Insidious SIx + Vulture + Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Immortal Weapon", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU", rating: 3, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Astral", rating: 0, observacao: "N" },
            { counter: "Nightstsalker", rating: -2, observacao: "N" },
            { counter: "Thunderbolt", rating: -3, observacao: "N" },
            { counter: "Vigilante", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "New Mutant + Odin + Nightcrawler",
        subtitulo: [
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "New Mutant + Super Skrull",
        subtitulo: [
            { counter: "Mercs for Money", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "New Avengers",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" },
            { counter: "Astral", rating: 2, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Mercs for Money", rating: 1, observacao: "N" },
            { counter: "New Avengers", rating: -1, observacao: "N" },
            { counter: "Thunderbolt", rating: -3, observacao: "N" },
            { counter: "Darkhold", rating: -3, observacao: "N" },
            { counter: "Gamma", rating: -3, observacao: "N" },
            { counter: "Infinity Watch", rating: -3, observacao: "N" },
            { counter: "X-Treme X-Men", rating: -3, observacao: "N" },
            { counter: "Illuminati", rating: 0, observacao: "N" },
            { counter: "Illuminati with Captain Britain", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "New Avengers + Apocalypse",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 2, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Gamma + Apoc", rating: 2, observacao: "N" },
            { counter: "New Avengers + Apoc", rating: 2, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Undying+Tangled+Apoc", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 1, observacao: "N" },
            { counter: "Undying trio + 2", rating: 3, observacao: "N" },
            { counter: "War Dogs", rating: 0, observacao: "N" }
        ]
    },
    {
        titulo: "Nightstalker",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Underworld + Daken (no Nobu)", rating: 3, observacao: "N" },
            { counter: "Out of Time", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "Secret Defenders", rating: 2, observacao: "N" },
            { counter: "Nightstalker", rating: 2, observacao: "N" },
            { counter: "Astral", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Thunderbolt", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Nightstalkers + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Orchis",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Out of Time", rating: 3, observacao: "N" },
            { counter: "Undying + 2", rating: 3, observacao: "N" },
            { counter: "Illuminati", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Secret Defenders + Apoc", rating: 2, observacao: "N" },
            { counter: "Super Skrull + 2 Hero + 2 Villain", rating: 2, observacao: "N" },
            { counter: "Orchis", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Orchis + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Nightstalker + Kestrel", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Orchis + Odin",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Undying + Odin", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Orchis + Mephisto",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Undying + Odin", rating: 3, observacao: "N" },
            { counter: "Spider-Weaver, Spider-Man (Noir), Kang, Emma Frost, Odin", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Orchis + Mephisto + Ares (no Lady Deathstrike and Omega Sentinel)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Undying + Odin", rating: 3, observacao: "N" },
            { counter: "Spider-Weaver, Spider-Man (Noir), Kang, Emma Frost, Odin", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Out Of Time (full)",
        subtitulo: [
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Undying + Apocalypse", rating: 3, observacao: "N" },
            { counter: "Astral (if Ancient One has lev 6 Passive)", rating: 3, observacao: "N" },
            { counter: "Knowhere + Apocalypse (instead of Star-Lord)", rating: 2, observacao: "N" },
            { counter: "3 Undying + Apocalypse", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Out Of Time", rating: -1, observacao: "N" },
            { counter: "Green Goblin (Classic), Doc Octopus, Kraven, Vulture, Mysterio", rating: -2, observacao: "N" },
            { counter: "X-Treme X-Men + Apocalypse", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Out of Time + Mephisto",
        subtitulo: [
            { counter: "Mercs for Money + Odin", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 2, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Black Knight + Mephisto + Doctor Doom + Super Skrull",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Scarlet Witch (Zombie) + Odin + 3 new Absolute A-Force", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Black Knight + Cosmic Ghost Rider + Gorr + Emma Frost",
        subtitulo: [
            { counter: "Brimstone + Apocalypse (no Elsa Bloodstone)", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull + Silver Sable (no Venom and Gvenom)", rating: 3, observacao: "N" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 2, observacao: "N" },
            { counter: "Ares + Mephisto + Black Knight + Phoenix Force", rating: 2, observacao: "N" },
            { counter: "Orchis + Ares + Silver Sable (no Sentinel and Omega Sentinel", rating: -2, observacao: "N" },
            { counter: "Nightstalker + Ares + Silver Sable (no Moon Knight and Agatha Harkness)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Black Knight + Cosmic Ghost Rider + Cable + Northstar",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Quasar + Ares + Jean Grey + Storm + Havok", rating: 2, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Odin (no The Thing)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Black Knight + Thanos (Endgame) + Nightcrawler + Ghost Rider (Robbie)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying + Apocalypse", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Knull + Super Skrull + Quicksilver + Gladiator",
        subtitulo: [
            { counter: "Undying + Odin + Ares (no Juggernaut (Zombie))", rating: 2, observacao: "N" },
            { counter: "Quasar + Jean Grey + Storm + Apocalypse + Songbird", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Knull + Super Skrull + Emma Frost (X-Men) + Gladiator",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Liberty + Quasar (no War Machine)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Knull + Black Knight + Black Cat + Thanos (Endgame)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Ares + Super Skrull + Gladiator + Emma Frost (X-Men)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: -2, observacao: "N" },
            { counter: "Undying + Quasar", rating: -2, observacao: "N" },
            { counter: "Liberty + Odin (no War Machine)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Odin + Gladiator + Thanos (Endgame) + Kahhori + Doctor Doom",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Liberty + Mephisto (no War Machine)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Phoenix Force + 2",
        subtitulo: [
        ]
    },
    {
        titulo: "Phoenix Force + Blastaar + Thunderstrike",
        subtitulo: [
            { counter: "Mighty Avenger", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Phoenix Force + Ares + The Leader",
        subtitulo: [
            { counter: "Secret Warrior", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Phoenix Force + Mephisto + Ares",
        subtitulo: [
            { counter: "Winter Guard", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Quasar + Ares + Havok + Storm + Jean Grey", rating: 3, observacao: "N" },
            { counter: "Nightstalker + Quasar + Ares", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force + Quasar + Shadow King", rating: 3, observacao: "N" },
            { counter: "Liberty + Odin", rating: 3, observacao: "N" },
            { counter: "Phoenix Force + Mephisto + Scarlet Witch (Zombie) / Quasar", rating: 3, observacao: "N" },
            { counter: "Mercs for Money + Quasar", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Phoenix Force + Gladiator + Thanos (Endgame)",
        subtitulo: [
            { counter: "Winter Guard", rating: 3, observacao: "N" },
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Ares", rating: 3, observacao: "N" },
            { counter: "Nightstalker + Ares (no Moon Knight)", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Knull + Ares + Void Knight + Carnage + Gorr / Red Goblin", rating: 3, observacao: "N" },
            { counter: "Apocalypse + Red Hulk + Havok + Songbird + Super Skrull", rating: 3, observacao: "N" },
            { counter: "Immortal Weapon", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Phoenix Force + Gladiator + Nightcrawler",
        subtitulo: [
            { counter: "Winter Guard", rating: 3, observacao: "N" },
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU)", rating: 3, observacao: "N" },
            { counter: "Insidious Six + Vulture + Ares", rating: 3, observacao: "N" },
            { counter: "Immortal Weapon", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Black Knight + Phoenix Force + Knull",
        subtitulo: [
            { counter: "Quasar + Ares + Storm + Shadow King + Emma Frost (X-Men)", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Black Knight + Void Knight + Emma Frost (X-Men) + Knull",
        subtitulo: [
            { counter: "Professor Xavier + Jean Grey + Storm + Emma Frost + Doctor Doom", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Songbird + Sasquatch + Thanos (Endgame) + Knull",
        subtitulo: [
            { counter: "Quasar + Storm + Jean Grey + Apocalypse + Songbird (Quasar needs to have his Awakened Ultimate)", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Odin + Knull + Emma Frost (X-Men) + Storm",
        subtitulo: [
            { counter: "Professor Xavier + Ares + Nightcrawler + Havok + Phoenix", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Odin + Knull + Black Knight + Songbird",
        subtitulo: [
            { counter: "Quasar + Mephisto + Phoenix Force + Havok", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Odin + Knull + Emma Frost (X-Men) + Songbird",
        subtitulo: [
            { counter: "Professor Xavier + Invisible Woman (MCU) + Human Torch + The Thing + Quasar", rating: 3, observacao: "N" },
            { counter: "Professor Xavier + Quasar + Jean Grey + Storm + Songbird (Quasar needs to have his Awakened Ultimate)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Odin + Knull + Lilandra + Gladiator",
        subtitulo: [
            { counter: "Professor Xavier + Quasar + Storm + Jean Grey + Havok", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Nightcrawler + Gorr + Lilandra + Sasquatch",
        subtitulo: [
            { counter: "Liberty + Mephisto (no War Machine)", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Professor Xavier + Black Knight + Dormammu + Shadow King + Emma Frost (X-Men)",
        subtitulo: [
            { counter: "Fantastic Four (MCU) + Black Cat + Ares", rating: 2, observacao: "Y" }
        ]
    },
    {
        titulo: "Professor Xavier + Knull + Nightcrawler + Shadow King + Emma Frost (X-Men)",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Quasar", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Retcon",
        subtitulo: [
            { counter: "Immortal Weapon + Professor Xavier", rating: 3, observacao: "N" },
            { counter: "Odin + Valkyrie + 3 Hero Asguardian (Beta Ray Bill preferably) Valkyrie should have Passive maxed", rating: 2, observacao: "N" },
            { counter: "Winter Guard + Emma Frost / Knull / Captain America", rating: -2, observacao: "N" },
            { counter: "Winter Guard", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Secret Warrior",
        subtitulo: [
            { counter: "Insidious SIx + Vulture = Green Goblin (Classic)", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 3, observacao: "N" },
            { counter: "Orchis", rating: 3, observacao: "N" },
            { counter: "Nightstalker", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Hell Fire Club", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Spider-Society",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Illuminati with Captain Britain", rating: 2, observacao: "N" },
            { counter: "Nico Minoru + Spider-Woman + Jessica Jones + Wasp + Ironheart", rating: 2, observacao: "N" },
            { counter: "Orchis", rating: 2, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Superior Six", rating: 1, observacao: "N" },
            { counter: "Gamma", rating: 1, observacao: "N" },
            { counter: "New Avengers", rating: 1, observacao: "N" },
            { counter: "Secret Defenders", rating: -1, observacao: "N" },
            { counter: "A-Force", rating: -1, observacao: "N" },
            { counter: "X-Treme X-Men", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Spider-Society + Mephisto",
        subtitulo: [
            { counter: "Green Goblin (Classic) + Doctor Octopus + Lizard + Vulture + Odin", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Starjammer",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Secret Warrior", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 2, observacao: "N" },
            { counter: "Mercs For Money", rating: 2, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Superior Six + Vulture", rating: 2, observacao: "N" },
            { counter: "Nightstalker", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Cabal + Kang + 1", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Starjammer + Cosmic Ghost Rider",
        subtitulo: [
            { counter: "Vigilante", rating: 2, observacao: "N" },
            { counter: "Insidious Six + Vulture + Green Goblin (Classic)", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Starjammer + Super Skrull",
        subtitulo: [
            { counter: "Mercs for Money", rating: 3, observacao: "N" }
        ]
    },
    {
        titulo: "Secret Defenders + Super Skrull (instead of Doctor Strange)",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Knowhere + Super Skrull (instead of Star-Lord)", rating: 3, observacao: "N" },
            { counter: "Undying + Apocalypse", rating: 3, observacao: "N" },
            { counter: "Black Knight, Captain Carter, Captain America, Doctor Doom +1", rating: 1, observacao: "N" },
            { counter: "Knowhere", rating: 1, observacao: "N" },
            { counter: "Gamma", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Knowhere + Super Skrull (instead of Star-Lord)",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Gamma + Super Skrull (instead of Abomination)", rating: 3, observacao: "N" },
            { counter: "Undying + Apocalypse", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Secret Defenders",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "New Avenger", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 2, observacao: "N" },
            { counter: "Underworld", rating: 2, observacao: "N" },
            { counter: "Apocalypse + Eternals + 2", rating: 2, observacao: "N" },
            { counter: "Apocalypse + Darkhold", rating: 2, observacao: "N" },
            { counter: "A-Force", rating: 2, observacao: "N" },
            { counter: "X-Treme X-Men", rating: -2, observacao: "N" },
            { counter: "Annihilators", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Secret Defenders + Mephisto + Odin",
        subtitulo: [
            { counter: "3 New Absolute A-Force + Kang + Odin (target Odin with Kahhori at start)", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "Superior Six (full)",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 2, observacao: "N" },
            { counter: "2 Tangled Web + 3 Undying", rating: 2, observacao: "N" },
            { counter: "New Avenger", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 1, observacao: "N" },
            { counter: "Nightstalkers", rating: 1, observacao: "N" },
            { counter: "War Dogs", rating: -3, observacao: "N" }
        ]
    },
    {
        titulo: "Sinister Six with Dr. Octopus",
        subtitulo: [
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "A-Force", rating: 3, observacao: "N" },
            { counter: "Undying trio", rating: 3, observacao: "N" },
            { counter: "Eternals", rating: 2, observacao: "N" },
            { counter: "Nightstalkers", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Tangled Web + Dormammu + America Chavez",
        subtitulo: [
            { counter: "A-Force + Dr. Doom", rating: 1, observacao: "N" },
            { counter: "Infinity Watch", rating: -1, observacao: "N" },
            { counter: "Undying + Tangled Web / New Warriors", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "Underworld", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Nightstalkers", rating: 2, observacao: "N" },
            { counter: "Apoc+QS/Kang+Eternals", rating: 2, observacao: "N" },
            { counter: "Dormhold", rating: 2, observacao: "N" },
            { counter: "Unlimited X-Men+Kang", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "Apoc+Deathseed", rating: 2, observacao: "N" },
            { counter: "Undying trio", rating: 3, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Annihilators", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Thunderbolt",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Undying", rating: 3, observacao: "N" },
            { counter: "Mighty Avenger", rating: 3, observacao: "N" },
            { counter: "Mercs for Money", rating: 3, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Immortal Weapon", rating: 2, observacao: "N" },
            { counter: "Vigilante", rating: -2, observacao: "N" },
            { counter: "Thunderbolt", rating: -2, observacao: "N" },
            { counter: "Knowhere", rating: -1, observacao: "N" }
        ]
    },
    {
        titulo: "Underworld",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Underworld", rating: 3, observacao: "N" },
            { counter: "Undying + 1", rating: 3, observacao: "N" },
            { counter: "Any Apocalypse team (hard counter)", rating: 3, observacao: "N" },
            { counter: "Annihilators", rating: 2, observacao: "N" },
            { counter: "A-Force + Kestrel", rating: 2, observacao: "N" },
            { counter: "Black Order", rating: 1, observacao: "N" },
            { counter: "Undying + Eternals", rating: 1, observacao: "N" },
            { counter: "Illuminati", rating: 1, observacao: "N" },
            { counter: "Infinity Watch", rating: -2, observacao: "N" }
        ]
    },
    {
        titulo: "Vigilante",
        subtitulo: [
            { counter: "Brimstone", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: 2, observacao: "Y" },
            { counter: "Vigilante", rating: 2, observacao: "Y" },
            { counter: "Nightstalker", rating: 1, observacao: "N" },
            { counter: "Quasar + Apocalypse + Red Hulk + Void Knight + Brawn", rating: 3, observacao: "N" },
            { counter: "Thunderbolt", rating: 0, observacao: "N" }
        ]
    },
    {
        titulo: "Weapon X",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Out Of Time", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Underworld", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Gamma", rating: 3, observacao: "N" },
            { counter: "New Avengers", rating: 3, observacao: "N" },
            { counter: "A-Force", rating: 2, observacao: "N" },
            { counter: "Secret Defenders", rating: 3, observacao: "N" },
            { counter: "Secret Defenders + 1", rating: 3, observacao: "N" },
            { counter: "Undying + Tangled Web", rating: 2, observacao: "N" },
            { counter: "Apocalypse + Eternals + 2", rating: 3, observacao: "N" },
            { counter: "Weapon X", rating: 1, observacao: "N" },
            { counter: "Darkhold/Dormhold", rating: 0, observacao: "N" },
            { counter: "Unlimited X-Men+Red Guardian/Drax", rating: 0, observacao: "N" },
            { counter: "Undying trio", rating: 3, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Winter Guard",
        subtitulo: [
            { counter: "Brimstone + Professor Xavier (no Elsa Bloodstone)", rating: 3, observacao: "N" },
            { counter: "Fantastic Four (MCU) + Professor Xavier + Shadow King", rating: 3, observacao: "N" },
            { counter: "Phoenix Force + Professor Xavier + Quasar", rating: 3, observacao: "N" },
            { counter: "Nightstalker + Professor Xavier + Quasar", rating: 3, observacao: "N" },
            { counter: "Winter Guard + Cable / Oath / Emma Frost (no Yelena Belova)", rating: 3, observacao: "N" },
            { counter: "Winter Guard", rating: 2, observacao: "N" }
        ]
    },
    {
        titulo: "Winter Guard + Emma Frost",
        subtitulo: [
            { counter: "Fantastic Four (MCU) + Professor Xavier + Apocalypse / Nightcrawler", rating: 3, observacao: "N" },
            { counter: "Phoenix Force + Professor Xavier + Quasar", rating: 3, observacao: "N" },
            { counter: "Nightstalker + Professor Xavier + Quasar", rating: 3, observacao: "N" },
            { counter: "Winter Guard + Apocalypse / Nightcrawler", rating: 2, observacao: "N" },
            { counter: "Winter Guard + Emma Frost", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "X-Treme X-Men",
        subtitulo: [
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Knowhere", rating: 3, observacao: "N" },
            { counter: "Astral", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: 3, observacao: "N" },
            { counter: "Hive-Mind + Knull (no Venom)", rating: 2, observacao: "N" },
            { counter: "Out Of Time", rating: 2, observacao: "N" },
            { counter: "Gamma", rating: 2, observacao: "N" },
            { counter: "New Avengers", rating: 2, observacao: "N" },
            { counter: "Secret Defenders", rating: 2, observacao: "N" },
            { counter: "Undying", rating: 2, observacao: "N" },
            { counter: "Green Goblin (Classic), Doc Oc, Vulture, Mysterio, +1", rating: 2, observacao: "N" },
            { counter: "Underworld", rating: 2, observacao: "N" },
            { counter: "Spider-Society", rating: 2, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Secret Defenders (without Photon)", rating: 1, observacao: "N" },
            { counter: "A-Force", rating: 1, observacao: "N" },
            { counter: "Weapon X", rating: 1, observacao: "N" },
            { counter: "Hive-Mind", rating: -1, observacao: "N" },
            { counter: "Illuminati", rating: 2, observacao: "N" },
            { counter: "Annihilators", rating: 1, observacao: "N" },
            { counter: "Accursed", rating: 1, observacao: "N" }
        ]
    },
    {
        titulo: "X-Treme X-Men + Phoenix Force Duo",
        subtitulo: [
            { counter: "Sinister Six + Vulture + Mysterio (no Spider-Slayer and Kraven or Lizard)", rating: 3, observacao: "N" },
            { counter: "Liberty", rating: 3, observacao: "N" },
            { counter: "Absolute A-Force", rating: 3, observacao: "N" },
            { counter: "Mercs For Money", rating: 3, observacao: "N" },
            { counter: "Mighty Avengers", rating: 3, observacao: "N" },
            { counter: "Hellfire Club", rating: 2, observacao: "N" },
            { counter: "Orchis", rating: -1, observacao: "N" }
        ]
    }
];
