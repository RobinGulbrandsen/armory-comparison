angular.module( 'app.search', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'search', {
    url: '/search',
    views: {
      "main": {
        controller: 'searchCtrl',
        templateUrl: 'search/search.tpl.html'
      }
    }
  });
})

.controller( 'searchCtrl', function HomeController( $scope ) {

  $scope.regions = [
    {name:'eu'},
    {name:'us'}
  ];

  $scope.classes = [
    {name:'Warrior', id:1},
    {name:'Paladin', id:2},
    {name:'Hunter', id:3},
    {name:'Rogue', id:4},
    {name:'Priest', id:5},
    {name:'Death Knight', id:6},
    {name:'Shaman', id:7},
    {name:'Mage', id:8},
    {name:'Warlock', id:9},
    {name:'Monk', id:10},
    {name:'Druid', id:11}
  ];

  $scope.members = [
        {
            "character": {
                "name": "Bigblack",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 10150,
                "thumbnail": "internal-record-3674/224/93965024-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Hubgale",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 9,
                "gender": 0,
                "level": 100,
                "achievementPoints": 12715,
                "thumbnail": "internal-record-3674/15/93981199-avatar.jpg",
                "spec": {
                    "name": "Combat",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-combat",
                    "icon": "ability_backstab",
                    "description": "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Circeline",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 1,
                "level": 100,
                "achievementPoints": 12240,
                "thumbnail": "internal-record-3674/148/94012820-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Dv",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 1,
                "level": 100,
                "achievementPoints": 9225,
                "thumbnail": "internal-record-3674/254/94017790-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Urtroar",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 9225,
                "thumbnail": "internal-record-3674/124/94017916-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Bubroid",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 85,
                "achievementPoints": 11760,
                "thumbnail": "internal-record-3674/118/94018166-avatar.jpg",
                "spec": {
                    "name": "Combat",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-combat",
                    "icon": "ability_backstab",
                    "description": "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Exogenesis",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 100,
                "achievementPoints": 12300,
                "thumbnail": "internal-record-3674/160/94018208-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-paladin-holy",
                    "icon": "spell_holy_holybolt",
                    "description": "Invokes the power of the Light to protect and to heal.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 1
        },
        {
            "character": {
                "name": "Peaceduke",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11855,
                "thumbnail": "internal-record-3674/202/94018250-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Ebalda",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 10,
                "gender": 1,
                "level": 1,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/69/94018373-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Namoo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 91,
                "achievementPoints": 11085,
                "thumbnail": "internal-record-3674/10/94025226-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Eranie",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 10240,
                "thumbnail": "internal-record-3674/228/94025444-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Garonja",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 1,
                "level": 100,
                "achievementPoints": 17440,
                "thumbnail": "internal-record-3674/131/94038659-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Siepher",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 10695,
                "thumbnail": "internal-record-3674/228/94048484-avatar.jpg",
                "spec": {
                    "name": "Affliction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-affliction",
                    "icon": "spell_shadow_deathcoil",
                    "description": "A master of shadow magic who specializes in drains and damage-over-time spells.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Mahere",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16230,
                "thumbnail": "internal-record-3674/103/94053223-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Lugnir",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11430,
                "thumbnail": "internal-record-3674/27/94059803-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Selfless",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11220,
                "thumbnail": "internal-record-3674/190/94059966-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Takeno",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 0,
                "level": 47,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/25/94060057-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Elesmer",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 86,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/74/94060106-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Aurias",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 85,
                "achievementPoints": 11175,
                "thumbnail": "internal-record-3674/126/94060158-avatar.jpg",
                "spec": {
                    "name": "Arcane",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-arcane",
                    "icon": "spell_holy_magicalsentry",
                    "description": "Manipulate the arcane, destroying enemies with overwhelming power.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Fuzukeru",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 10,
                "gender": 0,
                "level": 85,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/207/94075599-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Jandra",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 16495,
                "thumbnail": "internal-record-3674/44/94087724-avatar.jpg",
                "spec": {
                    "name": "Enhancement",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-enhancement",
                    "icon": "spell_shaman_improvedstormstrike",
                    "description": "A totemic warrior who strikes foes with weapons imbued with elemental power.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Jandrajr",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16255,
                "thumbnail": "internal-record-3674/96/94087776-avatar.jpg",
                "spec": {
                    "name": "Fire",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-fire",
                    "icon": "spell_fire_firebolt02",
                    "description": "Ignite enemies with balls of fire and combustive flames.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Meurtrier",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16255,
                "thumbnail": "internal-record-3674/146/94087826-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Lexsteele",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 0,
                "level": 91,
                "achievementPoints": 16305,
                "thumbnail": "internal-record-3674/201/94087881-avatar.jpg",
                "spec": {
                    "name": "Unholy",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-unholy",
                    "icon": "spell_deathknight_unholypresence",
                    "description": "A master of death and decay, spreading infection and controlling undead minions to do her bidding.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Yeash",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15740,
                "thumbnail": "internal-record-3674/1/94087937-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zaqu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/158/94102430-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Mydoom",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/40/94152744-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Jacinta",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16255,
                "thumbnail": "internal-record-3674/2/94168066-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Jihibukaí",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 8,
                "gender": 0,
                "level": 89,
                "achievementPoints": 10710,
                "thumbnail": "internal-record-3674/0/94176256-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Halogen",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 98,
                "achievementPoints": 13835,
                "thumbnail": "internal-record-3674/217/94192601-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Janoric",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 9,
                "gender": 0,
                "level": 85,
                "achievementPoints": 13655,
                "thumbnail": "internal-record-3674/2/94192642-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Skriff",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 10710,
                "thumbnail": "internal-record-3674/38/94207526-avatar.jpg",
                "spec": {
                    "name": "Blood",
                    "role": "TANK",
                    "backgroundImage": "bg-deathknight-blood",
                    "icon": "spell_deathknight_bloodpresence",
                    "description": "A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zãtouroff",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/91/94209371-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Divineudder",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/61/94218301-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Smerugor",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 7900,
                "thumbnail": "internal-record-3674/98/94219106-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Suscepta",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 7875,
                "thumbnail": "internal-record-3674/196/94219460-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Diers",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 9,
                "gender": 0,
                "level": 100,
                "achievementPoints": 4765,
                "thumbnail": "internal-record-3674/5/94266885-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Nerxo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 9035,
                "thumbnail": "internal-record-3674/171/94310059-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Kelthuzed",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 18370,
                "thumbnail": "internal-record-3674/147/94322579-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Daiconflag",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16745,
                "thumbnail": "internal-record-3674/145/94331025-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Khimeron",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 17465,
                "thumbnail": "internal-record-3674/193/94331073-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Isamarö",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 2,
                "gender": 0,
                "level": 31,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/139/94341003-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zit",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15895,
                "thumbnail": "internal-record-3674/89/94351705-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Goblishh",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 9,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16295,
                "thumbnail": "internal-record-3674/205/94362829-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Serketh",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 1,
                "level": 90,
                "achievementPoints": 8085,
                "thumbnail": "internal-record-3674/244/94420212-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-druid-restoration",
                    "icon": "spell_nature_healingtouch",
                    "description": "Uses heal-over-time Nature spells to keep allies alive.",
                    "order": 3
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Sunvelor",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 10,
                "gender": 0,
                "level": 16,
                "achievementPoints": 10045,
                "thumbnail": "internal-record-3674/101/94420581-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Uglypope",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 86,
                "achievementPoints": 10305,
                "thumbnail": "internal-record-3674/151/94420631-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kljova",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 0,
                "level": 22,
                "achievementPoints": 10045,
                "thumbnail": "internal-record-3674/255/94420735-avatar.jpg",
                "spec": {
                    "name": "Feral",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-cat",
                    "icon": "ability_druid_catform",
                    "description": "Takes on the form of a great cat to deal damage with bleeds and bites.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Mizron",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 100,
                "achievementPoints": 10540,
                "thumbnail": "internal-record-3674/51/94420787-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-paladin-holy",
                    "icon": "spell_holy_holybolt",
                    "description": "Invokes the power of the Light to protect and to heal.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Wodo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 0,
                "level": 92,
                "achievementPoints": 10540,
                "thumbnail": "internal-record-3674/140/94420876-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Soulphire",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/246/94488822-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Hdtv",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/41/94488873-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dtts",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 100,
                "achievementPoints": 12380,
                "thumbnail": "internal-record-3674/181/94505141-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Huntingmoms",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/214/94511830-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Aylise",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 85,
                "achievementPoints": 10210,
                "thumbnail": "internal-record-3674/81/94532433-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-paladin-protection",
                    "icon": "ability_paladin_shieldofthetemplar",
                    "description": "Uses Holy magic to shield himself and defend allies from attackers.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kenzzo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 4845,
                "thumbnail": "internal-record-3674/13/94554637-avatar.jpg",
                "spec": {
                    "name": "Blood",
                    "role": "TANK",
                    "backgroundImage": "bg-deathknight-blood",
                    "icon": "spell_deathknight_bloodpresence",
                    "description": "A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Kenzoo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 1910,
                "thumbnail": "internal-record-3674/40/94554664-avatar.jpg",
                "spec": {
                    "name": "Enhancement",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-enhancement",
                    "icon": "spell_shaman_improvedstormstrike",
                    "description": "A totemic warrior who strikes foes with weapons imbued with elemental power.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Pongo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11305,
                "thumbnail": "internal-record-3674/180/94555316-avatar.jpg",
                "spec": {
                    "name": "Guardian",
                    "role": "TANK",
                    "backgroundImage": "bg-druid-bear",
                    "icon": "ability_racial_bearform",
                    "description": "Takes on the form of a mighty bear to absorb damage and protect allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Skeletónz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12340,
                "thumbnail": "internal-record-3674/22/94578198-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Rubbina",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/180/94581172-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Kaskadia",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 1,
                "level": 100,
                "achievementPoints": 11820,
                "thumbnail": "internal-record-3674/230/94581222-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Halogon",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 9,
                "gender": 0,
                "level": 58,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/210/94595282-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Xarmaroch",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 100,
                "achievementPoints": 12740,
                "thumbnail": "internal-record-3674/100/94600292-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-paladin-holy",
                    "icon": "spell_holy_holybolt",
                    "description": "Invokes the power of the Light to protect and to heal.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Grimkaiser",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9225,
                "thumbnail": "internal-record-3674/150/94602646-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Wié",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 11085,
                "thumbnail": "internal-record-3674/101/94730085-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Woengabi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/56/94763832-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Xiaolin",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 97,
                "achievementPoints": 17465,
                "thumbnail": "internal-record-3674/127/94764671-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Pandachi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/71/94769735-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Revs",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/38/94773030-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Jems",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/26/94774042-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Kinzzo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11090,
                "thumbnail": "internal-record-3674/118/94779766-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Isfiskaren",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 13115,
                "thumbnail": "internal-record-3674/180/94783668-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Fürballz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 0,
                "level": 85,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/222/94784478-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Isamaro",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 1,
                "level": 100,
                "achievementPoints": 11975,
                "thumbnail": "internal-record-3674/67/94788675-avatar.jpg",
                "spec": {
                    "name": "Unholy",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-unholy",
                    "icon": "spell_deathknight_unholypresence",
                    "description": "A master of death and decay, spreading infection and controlling undead minions to do her bidding.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Rémé",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 8,
                "gender": 1,
                "level": 100,
                "achievementPoints": 11085,
                "thumbnail": "internal-record-3674/160/94789280-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 5
        },
        {
            "character": {
                "name": "Kryx",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/244/94789876-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Fumonkchu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 50,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/217/94790105-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Turtlejems",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 16,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/107/94796651-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Changli",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 27,
                "achievementPoints": 10045,
                "thumbnail": "internal-record-3674/10/94797834-avatar.jpg",
                "spec": {
                    "name": "Mistweaver",
                    "role": "HEALING",
                    "backgroundImage": "bg-monk-mistweaver",
                    "icon": "spell_monk_mistweaver_spec",
                    "description": "A healer who mixes traditional herbal medicine with Pandaren martial arts.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Jv",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/38/94797862-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Anoxx",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16295,
                "thumbnail": "internal-record-3674/72/94798408-avatar.jpg",
                "spec": {
                    "name": "Feral",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-cat",
                    "icon": "ability_druid_catform",
                    "description": "Takes on the form of a great cat to deal damage with bleeds and bites.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Yazzu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 9370,
                "thumbnail": "internal-record-3674/94/94799454-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Cthhun",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/24/94801432-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Patsboem",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 75,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/46/94807086-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Tribalmoon",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 91,
                "achievementPoints": 16250,
                "thumbnail": "internal-record-3674/27/94825243-avatar.jpg",
                "spec": {
                    "name": "Feral",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-cat",
                    "icon": "ability_druid_catform",
                    "description": "Takes on the form of a great cat to deal damage with bleeds and bites.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Isamarò",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 2,
                "gender": 0,
                "level": 35,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/235/94826987-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Vóltage",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 3255,
                "thumbnail": "internal-record-3674/231/94855143-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Sonè",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 10200,
                "thumbnail": "internal-record-3674/139/94870667-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Shavedballz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16255,
                "thumbnail": "internal-record-3674/198/94874054-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-druid-restoration",
                    "icon": "spell_nature_healingtouch",
                    "description": "Uses heal-over-time Nature spells to keep allies alive.",
                    "order": 3
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dtmonk",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 12,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/41/94875433-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dtagg",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11815,
                "thumbnail": "internal-record-3674/100/94876516-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Chtulhu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 16,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/6/94890758-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Hÿdrá",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 0,
                "level": 93,
                "achievementPoints": 7380,
                "thumbnail": "internal-record-3674/133/94901893-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Unframed",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 13730,
                "thumbnail": "internal-record-3674/204/94933452-avatar.jpg",
                "spec": {
                    "name": "Subtlety",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-subtlety",
                    "icon": "ability_stealth",
                    "description": "A dark stalker who leaps from the shadows to ambush his unsuspecting prey.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Zharen",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 26,
                "gender": 0,
                "level": 100,
                "achievementPoints": 16325,
                "thumbnail": "internal-record-3674/227/94937059-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Dtags",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11815,
                "thumbnail": "internal-record-3674/211/94943443-avatar.jpg",
                "spec": {
                    "name": "Blood",
                    "role": "TANK",
                    "backgroundImage": "bg-deathknight-blood",
                    "icon": "spell_deathknight_bloodpresence",
                    "description": "A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Jandrä",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 2,
                "gender": 0,
                "level": 12,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/136/94943624-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zhaxe",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15865,
                "thumbnail": "internal-record-3674/116/94944116-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Xtremu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9585,
                "thumbnail": "internal-record-3674/76/94959180-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Raïnbowdash",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11430,
                "thumbnail": "internal-record-3674/173/94959277-avatar.jpg",
                "spec": {
                    "name": "Arcane",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-arcane",
                    "icon": "spell_holy_magicalsentry",
                    "description": "Manipulate the arcane, destroying enemies with overwhelming power.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Vebre",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 10750,
                "thumbnail": "internal-record-3674/136/94962312-avatar.jpg",
                "spec": {
                    "name": "Combat",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-combat",
                    "icon": "ability_backstab",
                    "description": "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zafinah",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 1,
                "level": 100,
                "achievementPoints": 15555,
                "thumbnail": "internal-record-3674/99/94964067-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Raehna",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 15270,
                "thumbnail": "internal-record-3674/252/94968572-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Erameli",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/101/94970213-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Hilldoom",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 11815,
                "thumbnail": "internal-record-3674/39/94971943-avatar.jpg",
                "spec": {
                    "name": "Demonology",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-demonology",
                    "icon": "spell_shadow_metamorphosis",
                    "description": "A master of demonic magic who transforms into a demon and compels demonic powers to aid him.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Qray",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 6,
                "gender": 0,
                "level": 80,
                "achievementPoints": 15370,
                "thumbnail": "internal-record-3674/136/94972296-avatar.jpg",
                "spec": {
                    "name": "Blood",
                    "role": "TANK",
                    "backgroundImage": "bg-deathknight-blood",
                    "icon": "spell_deathknight_bloodpresence",
                    "description": "A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Exonte",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 70,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/182/94972342-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Teddythebear",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/218/94972890-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Tinkerbêll",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/229/94976485-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Yazzuna",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 100,
                "achievementPoints": 9370,
                "thumbnail": "internal-record-3674/142/94981518-avatar.jpg",
                "spec": {
                    "name": "Feral",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-cat",
                    "icon": "ability_druid_catform",
                    "description": "Takes on the form of a great cat to deal damage with bleeds and bites.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 2
        },
        {
            "character": {
                "name": "Rikara",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 18525,
                "thumbnail": "internal-record-3674/137/94983817-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Soné",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 10240,
                "thumbnail": "internal-record-3674/167/94988199-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zahren",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 2,
                "gender": 0,
                "level": 21,
                "achievementPoints": 15865,
                "thumbnail": "internal-record-3674/184/94989240-avatar.jpg",
                "spec": {
                    "name": "Affliction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-affliction",
                    "icon": "spell_shadow_deathcoil",
                    "description": "A master of shadow magic who specializes in drains and damage-over-time spells.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Azubo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 7725,
                "thumbnail": "internal-record-3674/71/94990663-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Blackbaron",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 20585,
                "thumbnail": "internal-record-3674/7/94996231-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Sylvanàs",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 7230,
                "thumbnail": "internal-record-3674/157/95012509-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Soulshaker",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 18610,
                "thumbnail": "internal-record-3674/172/95013804-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-frost",
                    "icon": "spell_deathknight_frostpresence",
                    "description": "An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Yassu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 8820,
                "thumbnail": "internal-record-3674/27/95020315-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Vároth",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 13280,
                "thumbnail": "internal-record-3674/21/95029013-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Broccoli",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 9530,
                "thumbnail": "internal-record-3674/102/95032166-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-druid-restoration",
                    "icon": "spell_nature_healingtouch",
                    "description": "Uses heal-over-time Nature spells to keep allies alive.",
                    "order": 3
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Vegi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 9530,
                "thumbnail": "internal-record-3674/208/95033296-avatar.jpg",
                "spec": {
                    "name": "Combat",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-combat",
                    "icon": "ability_backstab",
                    "description": "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Varoth",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 6,
                "gender": 0,
                "level": 100,
                "achievementPoints": 13240,
                "thumbnail": "internal-record-3674/43/95033643-avatar.jpg",
                "spec": {
                    "name": "Unholy",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-unholy",
                    "icon": "spell_deathknight_unholypresence",
                    "description": "A master of death and decay, spreading infection and controlling undead minions to do her bidding.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Spompo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/40/95038504-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Yogsothotha",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/106/95042666-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Mirrari",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 1,
                "level": 100,
                "achievementPoints": 16200,
                "thumbnail": "internal-record-3674/148/95043476-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 5
        },
        {
            "character": {
                "name": "Melinia",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 18610,
                "thumbnail": "internal-record-3674/181/95043765-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-paladin-protection",
                    "icon": "ability_paladin_shieldofthetemplar",
                    "description": "Uses Holy magic to shield himself and defend allies from attackers.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Raezist",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15895,
                "thumbnail": "internal-record-3674/13/95043853-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-frost",
                    "icon": "spell_deathknight_frostpresence",
                    "description": "An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Fayien",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16965,
                "thumbnail": "internal-record-3674/179/95047347-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Trollolina",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 56,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/17/95047953-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Shadowimpact",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 2520,
                "thumbnail": "internal-record-3674/143/95048591-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Morathi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 12740,
                "thumbnail": "internal-record-3674/100/95058532-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Alcowpwn",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 6,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/171/95059115-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Gothdor",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/174/95062446-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Raetrain",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15270,
                "thumbnail": "internal-record-3674/188/95062716-avatar.jpg",
                "spec": {
                    "name": "Brewmaster",
                    "role": "TANK",
                    "backgroundImage": "bg-monk-brewmaster",
                    "icon": "spell_monk_brewmaster_spec",
                    "description": "A sturdy brawler who uses liquid fortification and unpredictable movement to avoid damage and protect allies.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zhashamren",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 26,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15865,
                "thumbnail": "internal-record-3674/150/95083926-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Otytzy",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 100,
                "achievementPoints": 10575,
                "thumbnail": "internal-record-3674/193/95085505-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Yuudai",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 8820,
                "thumbnail": "internal-record-3674/243/95088371-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Pineman",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 7400,
                "thumbnail": "internal-record-3674/234/95095530-avatar.jpg",
                "spec": {
                    "name": "Fire",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-fire",
                    "icon": "spell_fire_firebolt02",
                    "description": "Ignite enemies with balls of fire and combustive flames.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Varochi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12740,
                "thumbnail": "internal-record-3674/177/95107505-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Váróth",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 13280,
                "thumbnail": "internal-record-3674/223/95107551-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Xframed",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15865,
                "thumbnail": "internal-record-3674/37/95107877-avatar.jpg",
                "spec": {
                    "name": "Arms",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-arms",
                    "icon": "ability_warrior_savageblow",
                    "description": "A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike her opponents down.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Tínker",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16230,
                "thumbnail": "internal-record-3674/53/95112757-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Deathjems",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/57/95114297-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dtassasin",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11815,
                "thumbnail": "internal-record-3674/76/95115340-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Skrff",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11430,
                "thumbnail": "internal-record-3674/103/95116391-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Yasuna",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 1,
                "level": 22,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/111/95118447-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Jíhibukai",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11430,
                "thumbnail": "internal-record-3674/168/95119272-avatar.jpg",
                "spec": {
                    "name": "Feral",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-cat",
                    "icon": "ability_druid_catform",
                    "description": "Takes on the form of a great cat to deal damage with bleeds and bites.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Oti",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 47,
                "achievementPoints": 10300,
                "thumbnail": "internal-record-3674/139/95120011-avatar.jpg",
                "spec": {
                    "name": "Arms",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-arms",
                    "icon": "ability_warrior_savageblow",
                    "description": "A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike her opponents down.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Teabear",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 26,
                "gender": 0,
                "level": 92,
                "achievementPoints": 9555,
                "thumbnail": "internal-record-3674/171/95124907-avatar.jpg",
                "spec": {
                    "name": "Enhancement",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-enhancement",
                    "icon": "spell_shaman_improvedstormstrike",
                    "description": "A totemic warrior who strikes foes with weapons imbued with elemental power.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Ulenka",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 26,
                "gender": 1,
                "level": 91,
                "achievementPoints": 16200,
                "thumbnail": "internal-record-3674/216/95125464-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Verdictoly",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 1365,
                "thumbnail": "internal-record-3674/32/95132448-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zilis",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 76,
                "achievementPoints": 13340,
                "thumbnail": "internal-record-3674/82/95138130-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-paladin-protection",
                    "icon": "ability_paladin_shieldofthetemplar",
                    "description": "Uses Holy magic to shield himself and defend allies from attackers.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Bugslife",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 4705,
                "thumbnail": "internal-record-3674/6/95145734-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Hairyorc",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 0,
                "level": 58,
                "achievementPoints": 10310,
                "thumbnail": "internal-record-3674/112/95151472-avatar.jpg",
                "spec": {
                    "name": "Enhancement",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-enhancement",
                    "icon": "spell_shaman_improvedstormstrike",
                    "description": "A totemic warrior who strikes foes with weapons imbued with elemental power.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Betelgeus",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/9/95152905-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Beathismeat",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 6,
                "gender": 1,
                "level": 83,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/240/95160048-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kyroth",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 60,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/153/95160729-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Yuichi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 8820,
                "thumbnail": "internal-record-3674/234/95160810-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kryxin",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/205/95163085-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Yudai",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 94,
                "achievementPoints": 9370,
                "thumbnail": "internal-record-3674/144/95164304-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Zivanki",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/115/95166579-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Iwchas",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/243/95170547-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Pythiea",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 13075,
                "thumbnail": "internal-record-3674/118/95172214-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Enthlor",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12740,
                "thumbnail": "internal-record-3674/35/95172899-avatar.jpg",
                "spec": {
                    "name": "Fury",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-fury",
                    "icon": "ability_warrior_innerrage",
                    "description": "A furious berserker wielding a weapon in each hand, unleashing a flurry of attacks to carve her opponents to pieces.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Ród",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9220,
                "thumbnail": "internal-record-3674/60/95183932-avatar.jpg",
                "spec": {
                    "name": "Blood",
                    "role": "TANK",
                    "backgroundImage": "bg-deathknight-blood",
                    "icon": "spell_deathknight_bloodpresence",
                    "description": "A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Ashcatchm",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 0,
                "level": 74,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/145/95187345-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Iforted",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 1,
                "level": 100,
                "achievementPoints": 11020,
                "thumbnail": "internal-record-3674/36/95190564-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 2
        },
        {
            "character": {
                "name": "Mókký",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12740,
                "thumbnail": "internal-record-3674/79/95191631-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kanthor",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12740,
                "thumbnail": "internal-record-3674/125/95191677-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Mokky",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 13280,
                "thumbnail": "internal-record-3674/27/95192859-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Siski",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 6,
                "gender": 1,
                "level": 26,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/193/95193025-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Varux",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/92/95195484-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Vegie",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9530,
                "thumbnail": "internal-record-3674/204/95203020-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Pandhi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 80,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/33/95209505-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Ceelogreên",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9915,
                "thumbnail": "internal-record-3674/39/95211303-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Dalcan",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 26,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/251/95212795-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Teddyscare",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 26,
                "gender": 1,
                "level": 46,
                "achievementPoints": 15725,
                "thumbnail": "internal-record-3674/123/95212923-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Gazbág",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 9,
                "gender": 0,
                "level": 85,
                "achievementPoints": 10210,
                "thumbnail": "internal-record-3674/107/95213931-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Azoun",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/114/95217778-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Raetingz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 26,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/10/95218442-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zonkie",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 1,
                "level": 34,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/167/95222439-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Altaboy",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15875,
                "thumbnail": "internal-record-3674/152/95224472-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zhemo",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15895,
                "thumbnail": "internal-record-3674/113/95241073-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Snyper",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9210,
                "thumbnail": "internal-record-3674/219/95241435-avatar.jpg",
                "spec": {
                    "name": "Survival",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-survival",
                    "icon": "ability_hunter_camouflage",
                    "description": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Chernoto",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11910,
                "thumbnail": "internal-record-3674/134/95243398-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dárkterror",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15670,
                "thumbnail": "internal-record-3674/248/95249656-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Tellus",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 0,
                "level": 21,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/225/95254497-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Madcowplague",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 6,
                "gender": 1,
                "level": 55,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/192/95258304-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Isamarü",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 45,
                "achievementPoints": 11220,
                "thumbnail": "internal-record-3674/149/95270805-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Ryzoh",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 5,
                "gender": 0,
                "level": 76,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/222/95275998-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Phirun",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/82/95280210-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Kryxik",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/174/95282350-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Otia",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 9,
                "gender": 0,
                "level": 91,
                "achievementPoints": 10575,
                "thumbnail": "internal-record-3674/63/95284799-avatar.jpg",
                "spec": {
                    "name": "Survival",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-survival",
                    "icon": "ability_hunter_camouflage",
                    "description": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zakumi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 6,
                "gender": 1,
                "level": 43,
                "achievementPoints": 15245,
                "thumbnail": "internal-record-3674/156/95288220-avatar.jpg",
                "spec": {
                    "name": "Brewmaster",
                    "role": "TANK",
                    "backgroundImage": "bg-monk-brewmaster",
                    "icon": "spell_monk_brewmaster_spec",
                    "description": "A sturdy brawler who uses liquid fortification and unpredictable movement to avoid damage and protect allies.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Hidenclaw",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/119/95289463-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Bubblozeven",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15865,
                "thumbnail": "internal-record-3674/240/95301360-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-paladin-protection",
                    "icon": "ability_paladin_shieldofthetemplar",
                    "description": "Uses Holy magic to shield himself and defend allies from attackers.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Targetspoter",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 0,
                "level": 87,
                "achievementPoints": 1350,
                "thumbnail": "internal-record-3674/107/95319403-avatar.jpg",
                "spec": {
                    "name": "Survival",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-survival",
                    "icon": "ability_hunter_camouflage",
                    "description": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Forfar",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 10355,
                "thumbnail": "internal-record-3674/110/95327086-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Siephz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 9,
                "gender": 0,
                "level": 1,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/18/95335954-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Yazzuro",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 9370,
                "thumbnail": "internal-record-3674/58/95339066-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Stupidore",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 86,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/101/95368805-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Seirye",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 9,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/105/95379305-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kozulka",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 100,
                "achievementPoints": 16200,
                "thumbnail": "internal-record-3674/57/95384377-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Verdictank",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 13045,
                "thumbnail": "internal-record-3674/101/95389029-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Adehle",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 1,
                "level": 100,
                "achievementPoints": 11875,
                "thumbnail": "internal-record-3674/137/95391369-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Iomgpwnu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/86/95396950-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Guanyen",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 5,
                "gender": 1,
                "level": 91,
                "achievementPoints": 5920,
                "thumbnail": "internal-record-3674/1/95399937-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Galádríel",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 1,
                "level": 55,
                "achievementPoints": 11965,
                "thumbnail": "internal-record-3674/59/95405883-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Exhumation",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 91,
                "achievementPoints": 8325,
                "thumbnail": "internal-record-3674/174/95409838-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Venuum",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11430,
                "thumbnail": "internal-record-3674/180/95410356-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Tyrraiena",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 8,
                "gender": 1,
                "level": 87,
                "achievementPoints": 695,
                "thumbnail": "internal-record-3674/19/95420435-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Wrekkd",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 1,
                "level": 13,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/190/95424958-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Baffowic",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 51,
                "achievementPoints": 11250,
                "thumbnail": "internal-record-3674/246/95425270-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Mellisandra",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 7400,
                "thumbnail": "internal-record-3674/32/95431200-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Belorr",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 1,
                "level": 90,
                "achievementPoints": 15875,
                "thumbnail": "internal-record-3674/153/95432089-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Aiedan",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 15875,
                "thumbnail": "internal-record-3674/188/95437244-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Taenya",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/118/95441526-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Svinebolchet",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12215,
                "thumbnail": "internal-record-3674/66/95448642-avatar.jpg",
                "spec": {
                    "name": "Arcane",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-arcane",
                    "icon": "spell_holy_magicalsentry",
                    "description": "Manipulate the arcane, destroying enemies with overwhelming power.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Hammerhalt",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 33,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/40/95451432-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Kastrulka",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 10,
                "gender": 1,
                "level": 81,
                "achievementPoints": 16200,
                "thumbnail": "internal-record-3674/12/95451660-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-frost",
                    "icon": "spell_deathknight_frostpresence",
                    "description": "An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Mootykins",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 0,
                "level": 47,
                "achievementPoints": 11275,
                "thumbnail": "internal-record-3674/132/95453060-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-paladin-protection",
                    "icon": "ability_paladin_shieldofthetemplar",
                    "description": "Uses Holy magic to shield himself and defend allies from attackers.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kazulka",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 1,
                "level": 24,
                "achievementPoints": 16200,
                "thumbnail": "internal-record-3674/222/95458782-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Lickurpinky",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 18565,
                "thumbnail": "internal-record-3674/233/95465705-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Rosefire",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 15895,
                "thumbnail": "internal-record-3674/213/95470805-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kpala",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 1635,
                "thumbnail": "internal-record-3674/182/95477430-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-paladin-protection",
                    "icon": "ability_paladin_shieldofthetemplar",
                    "description": "Uses Holy magic to shield himself and defend allies from attackers.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Carlysong",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 10,
                "gender": 1,
                "level": 22,
                "achievementPoints": 16015,
                "thumbnail": "internal-record-3674/2/95477506-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Cerky",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 15735,
                "thumbnail": "internal-record-3674/33/95478049-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Touchz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 10380,
                "thumbnail": "internal-record-3674/87/95481687-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Gortrash",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 16700,
                "thumbnail": "internal-record-3674/22/95486998-avatar.jpg",
                "spec": {
                    "name": "Enhancement",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-enhancement",
                    "icon": "spell_shaman_improvedstormstrike",
                    "description": "A totemic warrior who strikes foes with weapons imbued with elemental power.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Twirblevolt",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16605,
                "thumbnail": "internal-record-3674/242/95487218-avatar.jpg",
                "spec": {
                    "name": "Assassination",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-assassination",
                    "icon": "ability_rogue_eviscerate",
                    "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Baffy",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 10585,
                "thumbnail": "internal-record-3674/254/95488766-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-paladin-holy",
                    "icon": "spell_holy_holybolt",
                    "description": "Invokes the power of the Light to protect and to heal.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Avaddon",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 10,
                "gender": 0,
                "level": 92,
                "achievementPoints": 12065,
                "thumbnail": "internal-record-3674/115/95489395-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-frost",
                    "icon": "spell_deathknight_frostpresence",
                    "description": "An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Verdictree",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12405,
                "thumbnail": "internal-record-3674/255/95492351-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Shargoda",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16605,
                "thumbnail": "internal-record-3674/74/95492682-avatar.jpg",
                "spec": {
                    "name": "Unholy",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-unholy",
                    "icon": "spell_deathknight_unholypresence",
                    "description": "A master of death and decay, spreading infection and controlling undead minions to do her bidding.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Facèrollèr",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 13075,
                "thumbnail": "internal-record-3674/232/95494632-avatar.jpg",
                "spec": {
                    "name": "Unholy",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-unholy",
                    "icon": "spell_deathknight_unholypresence",
                    "description": "A master of death and decay, spreading infection and controlling undead minions to do her bidding.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Inscrepter",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 3160,
                "thumbnail": "internal-record-3674/165/95496357-avatar.jpg",
                "spec": {
                    "name": "Arms",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-arms",
                    "icon": "ability_warrior_savageblow",
                    "description": "A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike her opponents down.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Bonecrumbler",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 8325,
                "thumbnail": "internal-record-3674/30/95499038-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Divfour",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 91,
                "achievementPoints": 15735,
                "thumbnail": "internal-record-3674/217/95499993-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Baffz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 11110,
                "thumbnail": "internal-record-3674/195/95502019-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Hotfuzz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 18525,
                "thumbnail": "internal-record-3674/132/95503492-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Baffx",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 6,
                "gender": 0,
                "level": 100,
                "achievementPoints": 11285,
                "thumbnail": "internal-record-3674/226/95504354-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-druid-restoration",
                    "icon": "spell_nature_healingtouch",
                    "description": "Uses heal-over-time Nature spells to keep allies alive.",
                    "order": 3
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Elfinadore",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 91,
                "achievementPoints": 16295,
                "thumbnail": "internal-record-3674/126/95505278-avatar.jpg",
                "spec": {
                    "name": "Survival",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-survival",
                    "icon": "ability_hunter_camouflage",
                    "description": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Buffz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 5,
                "gender": 0,
                "level": 86,
                "achievementPoints": 10585,
                "thumbnail": "internal-record-3674/92/95506268-avatar.jpg",
                "spec": {
                    "name": "Mistweaver",
                    "role": "HEALING",
                    "backgroundImage": "bg-monk-mistweaver",
                    "icon": "spell_monk_mistweaver_spec",
                    "description": "A healer who mixes traditional herbal medicine with Pandaren martial arts.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Varóth",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12710,
                "thumbnail": "internal-record-3674/131/95507843-avatar.jpg",
                "spec": {
                    "name": "Feral",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-cat",
                    "icon": "ability_druid_catform",
                    "description": "Takes on the form of a great cat to deal damage with bleeds and bites.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Taoshan",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16230,
                "thumbnail": "internal-record-3674/205/95507917-avatar.jpg",
                "spec": {
                    "name": "Brewmaster",
                    "role": "TANK",
                    "backgroundImage": "bg-monk-brewmaster",
                    "icon": "spell_monk_brewmaster_spec",
                    "description": "A sturdy brawler who uses liquid fortification and unpredictable movement to avoid damage and protect allies.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Shamosh",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 2,
                "gender": 1,
                "level": 90,
                "achievementPoints": 12995,
                "thumbnail": "internal-record-3674/251/95511803-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Zulma",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 9,
                "gender": 1,
                "level": 90,
                "achievementPoints": 17375,
                "thumbnail": "internal-record-3674/252/95512316-avatar.jpg",
                "spec": {
                    "name": "Elemental",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-elemental",
                    "icon": "spell_nature_lightning",
                    "description": "A spellcaster who harnesses the destructive forces of nature and the elements.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Verdictotem",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 12825,
                "thumbnail": "internal-record-3674/243/95514611-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Murindin",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 16065,
                "thumbnail": "internal-record-3674/70/95520070-avatar.jpg",
                "spec": {
                    "name": "Shadow",
                    "role": "DPS",
                    "backgroundImage": "bg-priest-shadow",
                    "icon": "spell_shadow_shadowwordpain",
                    "description": "Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Aimi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 1,
                "level": 90,
                "achievementPoints": 17375,
                "thumbnail": "internal-record-3674/125/95520637-avatar.jpg",
                "spec": {
                    "name": "Mistweaver",
                    "role": "HEALING",
                    "backgroundImage": "bg-monk-mistweaver",
                    "icon": "spell_monk_mistweaver_spec",
                    "description": "A healer who mixes traditional herbal medicine with Pandaren martial arts.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Jolnari",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16235,
                "thumbnail": "internal-record-3674/146/95522450-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Frelst",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 10,
                "gender": 1,
                "level": 96,
                "achievementPoints": 18860,
                "thumbnail": "internal-record-3674/55/95524919-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Oempie",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 1,
                "level": 36,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/237/95525357-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Verdictz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 12405,
                "thumbnail": "internal-record-3674/117/95526773-avatar.jpg",
                "spec": {
                    "name": "Discipline",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-discipline",
                    "icon": "spell_holy_powerwordshield",
                    "description": "Uses magic to shield allies from taking damage as well as heal their wounds.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kinzaki",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 1,
                "level": 100,
                "achievementPoints": 8045,
                "thumbnail": "internal-record-3674/136/95528840-avatar.jpg",
                "spec": {
                    "name": "Mistweaver",
                    "role": "HEALING",
                    "backgroundImage": "bg-monk-mistweaver",
                    "icon": "spell_monk_mistweaver_spec",
                    "description": "A healer who mixes traditional herbal medicine with Pandaren martial arts.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 3
        },
        {
            "character": {
                "name": "Boeing",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 9,
                "gender": 1,
                "level": 90,
                "achievementPoints": 15100,
                "thumbnail": "internal-record-3674/211/95530707-avatar.jpg",
                "spec": {
                    "name": "Beast Mastery",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-beastmaster",
                    "icon": "ability_hunter_bestialdiscipline",
                    "description": "A master of the wild who can tame a wide variety of beasts to assist him in combat.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Fancypantie",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 2,
                "race": 6,
                "gender": 1,
                "level": 91,
                "achievementPoints": 15430,
                "thumbnail": "internal-record-3674/108/95532396-avatar.jpg",
                "spec": {
                    "name": "Retribution",
                    "role": "DPS",
                    "backgroundImage": "bg-paladin-retribution",
                    "icon": "spell_holy_auraoflight",
                    "description": "A righteous crusader who judges and punishes opponents with weapons and Holy magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Raydelicious",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 10,
                "gender": 1,
                "level": 100,
                "achievementPoints": 15430,
                "thumbnail": "internal-record-3674/179/95532467-avatar.jpg",
                "spec": {
                    "name": "Combat",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-combat",
                    "icon": "ability_backstab",
                    "description": "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Twistedace",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 18610,
                "thumbnail": "internal-record-3674/183/95532727-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Shadowjack",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 10715,
                "thumbnail": "internal-record-3674/89/95537241-avatar.jpg",
                "spec": {
                    "name": "Combat",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-combat",
                    "icon": "ability_backstab",
                    "description": "A swashbuckler who uses agility and guile to stand toe-to-toe with enemies.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Shapeleft",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 85,
                "achievementPoints": 10210,
                "thumbnail": "internal-record-3674/40/95539240-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Felaroth",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 15430,
                "thumbnail": "internal-record-3674/121/95539321-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Fund",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 5,
                "gender": 1,
                "level": 90,
                "achievementPoints": 14615,
                "thumbnail": "internal-record-3674/153/95540889-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dingilz",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 9,
                "gender": 0,
                "level": 90,
                "achievementPoints": 14155,
                "thumbnail": "internal-record-3674/76/95546956-avatar.jpg",
                "spec": {
                    "name": "Enhancement",
                    "role": "DPS",
                    "backgroundImage": "bg-shaman-enhancement",
                    "icon": "spell_shaman_improvedstormstrike",
                    "description": "A totemic warrior who strikes foes with weapons imbued with elemental power.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Verdicter",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 0,
                "level": 90,
                "achievementPoints": 12435,
                "thumbnail": "internal-record-3674/93/95547229-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-frost",
                    "icon": "spell_deathknight_frostpresence",
                    "description": "An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "ßutcher",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 6,
                "gender": 0,
                "level": 100,
                "achievementPoints": 18990,
                "thumbnail": "internal-record-3674/172/95550636-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Pandiy",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 10,
                "race": 26,
                "gender": 0,
                "level": 100,
                "achievementPoints": 10985,
                "thumbnail": "internal-record-3674/53/95554613-avatar.jpg",
                "spec": {
                    "name": "Windwalker",
                    "role": "DPS",
                    "backgroundImage": "bg-monk-battledancer",
                    "icon": "spell_monk_windwalker_spec",
                    "description": "A martial artist without peer who pummels foes with hands and fists.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Rayde",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 14785,
                "thumbnail": "internal-record-3674/106/95555690-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 0
        },
        {
            "character": {
                "name": "Raviria",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 1,
                "level": 100,
                "achievementPoints": 14750,
                "thumbnail": "internal-record-3674/53/95556149-avatar.jpg",
                "spec": {
                    "name": "Affliction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-affliction",
                    "icon": "spell_shadow_deathcoil",
                    "description": "A master of shadow magic who specializes in drains and damage-over-time spells.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Divfive",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 15735,
                "thumbnail": "internal-record-3674/166/95556774-avatar.jpg",
                "spec": {
                    "name": "Survival",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-survival",
                    "icon": "ability_hunter_camouflage",
                    "description": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 4
        },
        {
            "character": {
                "name": "Skriffler",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 8,
                "gender": 0,
                "level": 90,
                "achievementPoints": 10710,
                "thumbnail": "internal-record-3674/97/95557985-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Logicerror",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 10,
                "gender": 0,
                "level": 100,
                "achievementPoints": 5440,
                "thumbnail": "internal-record-3674/250/95714298-avatar.jpg",
                "spec": {
                    "name": "Unholy",
                    "role": "DPS",
                    "backgroundImage": "bg-deathknight-unholy",
                    "icon": "spell_deathknight_unholypresence",
                    "description": "A master of death and decay, spreading infection and controlling undead minions to do her bidding.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Pabolol",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 9,
                "race": 5,
                "gender": 1,
                "level": 100,
                "achievementPoints": 13880,
                "thumbnail": "internal-record-3674/57/101736505-avatar.jpg",
                "spec": {
                    "name": "Destruction",
                    "role": "DPS",
                    "backgroundImage": "bg-warlock-destruction",
                    "icon": "spell_shadow_rainoffire",
                    "description": "A master of chaos who calls down fire to burn and demolish enemies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Clîps",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 91,
                "achievementPoints": 16205,
                "thumbnail": "internal-record-3674/186/103248826-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Dtag",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 90,
                "achievementPoints": 11815,
                "thumbnail": "internal-record-3674/128/103859328-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Moráthi",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 8,
                "gender": 1,
                "level": 10,
                "achievementPoints": 12710,
                "thumbnail": "internal-record-3674/147/103965843-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Kvicks",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 26,
                "gender": 1,
                "level": 91,
                "achievementPoints": 8935,
                "thumbnail": "internal-record-3674/152/103979928-avatar.jpg",
                "spec": {
                    "name": "Survival",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-survival",
                    "icon": "ability_hunter_camouflage",
                    "description": "A rugged tracker who favors using animal venom, explosives and traps as deadly weapons.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Carlyn",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 10,
                "gender": 1,
                "level": 90,
                "achievementPoints": 16015,
                "thumbnail": "internal-record-3674/24/104143896-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Phaser",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 9,
                "gender": 0,
                "level": 100,
                "achievementPoints": 9830,
                "thumbnail": "internal-record-3674/251/104527867-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Nightwìng",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 8895,
                "thumbnail": "internal-record-3674/178/104554162-avatar.jpg",
                "spec": {
                    "name": "Subtlety",
                    "role": "DPS",
                    "backgroundImage": "bg-rogue-subtlety",
                    "icon": "ability_stealth",
                    "description": "A dark stalker who leaps from the shadows to ambush his unsuspecting prey.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Peapod",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 8,
                "race": 2,
                "gender": 0,
                "level": 18,
                "achievementPoints": 9260,
                "thumbnail": "internal-record-3674/187/104634043-avatar.jpg",
                "spec": {
                    "name": "Frost",
                    "role": "DPS",
                    "backgroundImage": "bg-mage-frost",
                    "icon": "spell_frost_frostbolt02",
                    "description": "Freezes enemies in their tracks and shatters them with Frost magic.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Bloodfate",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 6,
                "gender": 0,
                "level": 90,
                "achievementPoints": 9240,
                "thumbnail": "internal-record-3674/198/104634566-avatar.jpg",
                "spec": {
                    "name": "Arms",
                    "role": "DPS",
                    "backgroundImage": "bg-warrior-arms",
                    "icon": "ability_warrior_savageblow",
                    "description": "A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike her opponents down.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Neithu",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 8,
                "gender": 0,
                "level": 100,
                "achievementPoints": 9620,
                "thumbnail": "internal-record-3674/142/105055630-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Isamaru",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 4,
                "race": 5,
                "gender": 0,
                "level": 90,
                "achievementPoints": 0,
                "thumbnail": "internal-record-3674/149/105407125-avatar.jpg",
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 9
        },
        {
            "character": {
                "name": "Ikaao",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 6,
                "race": 2,
                "gender": 1,
                "level": 100,
                "achievementPoints": 8935,
                "thumbnail": "internal-record-3674/211/105461715-avatar.jpg",
                "spec": {
                    "name": "Blood",
                    "role": "TANK",
                    "backgroundImage": "bg-deathknight-blood",
                    "icon": "spell_deathknight_bloodpresence",
                    "description": "A dark guardian who manipulates and corrupts life energy to sustain himself in the face of an enemy onslaught.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Staring",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 3,
                "race": 26,
                "gender": 1,
                "level": 100,
                "achievementPoints": 12125,
                "thumbnail": "internal-record-3674/239/105461999-avatar.jpg",
                "spec": {
                    "name": "Marksmanship",
                    "role": "DPS",
                    "backgroundImage": "bg-hunter-marksman",
                    "icon": "ability_hunter_focusedaim",
                    "description": "A master archer or sharpshooter who excels in bringing down enemies from afar.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Seretide",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 11,
                "race": 8,
                "gender": 1,
                "level": 100,
                "achievementPoints": 18695,
                "thumbnail": "internal-record-3674/237/105785069-avatar.jpg",
                "spec": {
                    "name": "Balance",
                    "role": "DPS",
                    "backgroundImage": "bg-druid-balance",
                    "icon": "spell_nature_starfall",
                    "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                    "order": 0
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Woobs",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 1,
                "race": 2,
                "gender": 0,
                "level": 100,
                "achievementPoints": 9025,
                "thumbnail": "internal-record-3674/136/106571400-avatar.jpg",
                "spec": {
                    "name": "Protection",
                    "role": "TANK",
                    "backgroundImage": "bg-warrior-protection",
                    "icon": "ability_warrior_defensivestance",
                    "description": "A stalwart protector who uses a shield to safeguard himself and his allies.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 7
        },
        {
            "character": {
                "name": "Evangélist",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 5,
                "race": 5,
                "gender": 0,
                "level": 100,
                "achievementPoints": 11330,
                "thumbnail": "internal-record-3674/179/106750131-avatar.jpg",
                "spec": {
                    "name": "Holy",
                    "role": "HEALING",
                    "backgroundImage": "bg-priest-holy",
                    "icon": "spell_holy_guardianspirit",
                    "description": "A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.",
                    "order": 1
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        },
        {
            "character": {
                "name": "Ardeus",
                "realm": "Twisting Nether",
                "battlegroup": "Sturmangriff / Charge",
                "class": 7,
                "race": 6,
                "gender": 0,
                "level": 100,
                "achievementPoints": 6625,
                "thumbnail": "internal-record-3674/197/107096261-avatar.jpg",
                "spec": {
                    "name": "Restoration",
                    "role": "HEALING",
                    "backgroundImage": "bg-shaman-restoration",
                    "icon": "spell_nature_magicimmunity",
                    "description": "A healer who calls upon ancestral spirits and the cleansing power of water to mend allies' wounds.",
                    "order": 2
                },
                "guild": "Blacklight",
                "guildRealm": "Twisting Nether"
            },
            "rank": 6
        }
    ];

});