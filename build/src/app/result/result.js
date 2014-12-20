var mod = angular.module( 'app.result', [
  'ui.router',
  'common.search-service'
]);

mod.config(function config( $stateProvider ) {
  $stateProvider.state( 'result', {
    url: '/',
    views: {
      "main": {
        controller: 'resultCtrl',
        templateUrl: 'result/result.tpl.html'
      }
    }
  });
});

mod.controller('resultCtrl', ['$scope', 'searchService', resultCtrl]);

function resultCtrl($scope, searchService) {

  $scope.setBackground = function(thumbnail) {
    var region = 'eu';
    var url = 'http://eu.battle.net/static-render/eu/' + thumbnail.replace('avatar', 'profilemain');
    return {
        'background-image':'url(' + url + ')'
    };
  };

















  $scope.list = [
  {
    "lastModified": 1416674517000,
    "name": "Nightwìng",
    "realm": "Twisting Nether",
    "battlegroup": "Sturmangriff / Charge",
    "class": 4,
    "race": 5,
    "gender": 0,
    "level": 100,
    "achievementPoints": 8795,
    "thumbnail": "internal-record-3674/178/104554162-avatar.jpg",
    "calcClass": "c",
    "guild": {
        "name": "Blacklight",
        "realm": "Twisting Nether",
        "battlegroup": "Sturmangriff / Charge",
        "members": 287,
        "achievementPoints": 2065,
        "emblem": {
            "icon": 100,
            "iconColor": "ffb1b8b1",
            "border": 1,
            "borderColor": "ffffffff",
            "backgroundColor": "ff232323"
        }
    },
    "items": {
        "averageItemLevel": 632,
        "averageItemLevelEquipped": 631,
        "head": {
            "id": 109979,
            "name": "Blackwater Helm",
            "icon": "inv_leather_draenordungeon_c_01helm",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 111
                },
                {
                    "stat": 40,
                    "amount": 111
                },
                {
                    "stat": 73,
                    "amount": 167
                },
                {
                    "stat": 7,
                    "amount": 251
                }
            ],
            "armor": 109,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "neck": {
            "id": 109953,
            "name": "Windseal Necklace",
            "icon": "inv_60dungeon_neck1c",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 48
                },
                {
                    "stat": 3,
                    "amount": 94
                },
                {
                    "stat": 36,
                    "amount": 72
                },
                {
                    "stat": 7,
                    "amount": 141
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "shoulder": {
            "id": 109935,
            "name": "Bloodfeather Spaulders",
            "icon": "inv_leather_draenordungeon_c_01shoulder",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 32,
                    "amount": 96
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 36,
                    "amount": 64
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 100,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "back": {
            "id": 116814,
            "name": "Tura'aka's Clipped Wing",
            "icon": "inv_cape_draenorquest95_b_07_leather",
            "quality": 3,
            "itemLevel": 609,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 49,
                    "amount": 55
                },
                {
                    "stat": 3,
                    "amount": 77
                },
                {
                    "stat": 36,
                    "amount": 46
                },
                {
                    "stat": 7,
                    "amount": 116
                }
            ],
            "armor": 38,
            "context": "",
            "bonusLists": []
        },
        "chest": {
            "id": 109884,
            "name": "Chestguard of Burning Focus",
            "icon": "inv_leather_draenordungeon_c_01chest",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 103
                },
                {
                    "stat": 32,
                    "amount": 116
                },
                {
                    "stat": 73,
                    "amount": 167
                },
                {
                    "stat": 7,
                    "amount": 251
                }
            ],
            "armor": 134,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "tabard": {
            "id": 43156,
            "name": "Tabard of the Wyrmrest Accord",
            "icon": "inv_shirt_guildtabard_01",
            "quality": 1,
            "itemLevel": 75,
            "tooltipParams": {},
            "stats": [],
            "armor": 0,
            "context": "",
            "bonusLists": []
        },
        "wrist": {
            "id": 109870,
            "name": "Crystalbinder Wristguards",
            "icon": "inv_leather_draenordungeon_c_01bracer",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 66
                },
                {
                    "stat": 49,
                    "amount": 57
                },
                {
                    "stat": 73,
                    "amount": 94
                },
                {
                    "stat": 7,
                    "amount": 141
                }
            ],
            "armor": 59,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "hands": {
            "id": 109850,
            "name": "Crystalbinder Gloves",
            "icon": "inv_leather_draenordungeon_c_01glove",
            "quality": 3,
            "itemLevel": 636,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 32,
                    "amount": 94
                },
                {
                    "stat": 49,
                    "amount": 80
                },
                {
                    "stat": 73,
                    "amount": 133
                },
                {
                    "stat": 7,
                    "amount": 199
                }
            ],
            "armor": 86,
            "context": "dungeon-heroic",
            "bonusLists": [
                499,
                523,
                524
            ]
        },
        "waist": {
            "id": 109830,
            "name": "Bloodfeather Girdle",
            "icon": "inv_leather_draenordungeon_c_01belt",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 49,
                    "amount": 76
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 36,
                    "amount": 89
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 75,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "legs": {
            "id": 109809,
            "name": "Legguards of Burning Focus",
            "icon": "inv_leather_draenordungeon_c_01pant",
            "quality": 3,
            "itemLevel": 636,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 32,
                    "amount": 126
                },
                {
                    "stat": 73,
                    "amount": 177
                },
                {
                    "stat": 36,
                    "amount": 103
                },
                {
                    "stat": 7,
                    "amount": 265
                }
            ],
            "armor": 121,
            "context": "dungeon-heroic",
            "bonusLists": [
                499,
                524
            ]
        },
        "feet": {
            "id": 109799,
            "name": "Blackwater Boots",
            "icon": "inv_leather_draenordungeon_c_01boot",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 49,
                    "amount": 64
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 36,
                    "amount": 96
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 92,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "finger1": {
            "id": 109759,
            "name": "Ro-Ger's Brown Diamond Seal",
            "icon": "inv_60dungeon_ring2c",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 49,
                    "amount": 63
                },
                {
                    "stat": 32,
                    "amount": 63
                },
                {
                    "stat": 3,
                    "amount": 94
                },
                {
                    "stat": 7,
                    "amount": 141
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                523,
                524
            ]
        },
        "finger2": {
            "id": 118297,
            "name": "Timeless Solium Band of the Assassin",
            "icon": "inv_misc_6oring_redlv2",
            "quality": 4,
            "itemLevel": 680,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 40,
                    "amount": 93
                },
                {
                    "stat": 32,
                    "amount": 104
                },
                {
                    "stat": 3,
                    "amount": 150
                },
                {
                    "stat": 7,
                    "amount": 225
                }
            ],
            "armor": 0,
            "context": "quest-reward",
            "bonusLists": []
        },
        "trinket1": {
            "id": 118246,
            "name": "Call of the Wolfmother",
            "icon": "ability_shaman_freedomwolf",
            "quality": 4,
            "itemLevel": 615,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 138
                }
            ],
            "armor": 0,
            "context": "",
            "bonusLists": [
                545
            ]
        },
        "trinket2": {
            "id": 109998,
            "name": "Gor'ashan's Lodestone Spike",
            "icon": "inv_rod_adamantite",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 3,
                    "amount": 159
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "mainHand": {
            "id": 118738,
            "name": "Felshanker",
            "icon": "inv_weapon_shortblade_25",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 54
                },
                {
                    "stat": 49,
                    "amount": 36
                },
                {
                    "stat": 3,
                    "amount": 72
                },
                {
                    "stat": 7,
                    "amount": 107
                }
            ],
            "armor": 0,
            "weaponInfo": {
                "damage": {
                    "min": 294,
                    "max": 546,
                    "exactMin": 294,
                    "exactMax": 546
                },
                "weaponSpeed": 1.8,
                "dps": 233.33334
            },
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "offHand": {
            "id": 110038,
            "name": "Ner'zhul's Ritual Blade",
            "icon": "inv_knife_1h_draenordungeon_c_02",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 49,
                    "amount": 48
                },
                {
                    "stat": 3,
                    "amount": 72
                },
                {
                    "stat": 36,
                    "amount": 48
                },
                {
                    "stat": 7,
                    "amount": 107
                }
            ],
            "armor": 0,
            "weaponInfo": {
                "damage": {
                    "min": 294,
                    "max": 546,
                    "exactMin": 294,
                    "exactMax": 546
                },
                "weaponSpeed": 1.8,
                "dps": 233.33334
            },
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        }
    },
    "stats": {
        "health": 204060,
        "powerType": "energy",
        "power": 100,
        "str": 1205,
        "agi": 3698,
        "int": 709,
        "sta": 3401,
        "speedRating": 0,
        "speedRatingBonus": 0,
        "crit": 20.445454,
        "critRating": 599,
        "haste": 10.438988,
        "hasteRating": 518,
        "hasteRatingPercent": 5.18,
        "mastery": 37.063637,
        "masteryRating": 479,
        "spr": 538,
        "bonusArmor": 0,
        "multistrike": 13.272727,
        "multistrikeRating": 13.272727,
        "multistrikeRatingBonus": 8.272727,
        "leech": 0,
        "leechRating": 0,
        "leechRatingBonus": 0,
        "versatility": 204,
        "versatilityDamageDoneBonus": 1.569231,
        "versatilityHealingDoneBonus": 1.569231,
        "versatilityDamageTakenBonus": 0.784615,
        "avoidanceRating": 0,
        "avoidanceRatingBonus": 0,
        "spellPower": 709,
        "spellPen": 0,
        "spellCrit": 20.445454,
        "spellCritRating": 599,
        "mana5": 0,
        "mana5Combat": 0,
        "armor": 814,
        "dodge": 15.647321,
        "dodgeRating": 0,
        "parry": 3,
        "parryRating": 0,
        "block": 0,
        "blockRating": 0,
        "mainHandDmgMin": 2230,
        "mainHandDmgMax": 2487,
        "mainHandSpeed": 1.63,
        "mainHandDps": 1446.7872,
        "offHandDmgMin": 1115,
        "offHandDmgMax": 1244,
        "offHandSpeed": 1.63,
        "offHandDps": 723.3936,
        "rangedDmgMin": -1,
        "rangedDmgMax": -1,
        "rangedSpeed": -1,
        "rangedDps": -1,
        "attackPower": 3698,
        "rangedAttackPower": 3698
    },
    "talents": [
        {
            "talents": [
                {
                    "tier": 0,
                    "column": 2,
                    "spell": {
                        "id": 108209,
                        "name": "Shadow Focus",
                        "icon": "rogue_shadowfocus",
                        "description": "Abilities cost 75% less Energy while you are stealthed.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 1,
                    "column": 0,
                    "spell": {
                        "id": 26679,
                        "name": "Deadly Throw",
                        "subtext": "Talent",
                        "icon": "inv_throwingknife_06",
                        "description": "Finishing move that deals damage, reduces the target's movement speed by 50% for 6 sec, and interrupts spellcasting when used with 5 combo pioints:\n\n   1 point  : 609 damage\n\n   2 points: 1,218 damage\n\n   3 points: 1,827 damage\n\n   4 points: 2,436 damage\n\n   5 points: 3,045 damage",
                        "range": "30 yd range",
                        "powerCost": "35 Energy",
                        "castTime": "Instant"
                    }
                },
                {
                    "tier": 3,
                    "column": 1,
                    "spell": {
                        "id": 36554,
                        "name": "Shadowstep",
                        "icon": "ability_rogue_shadowstep",
                        "description": "Step through the shadows to appear behind your target and gain 70% movement speed for 2 sec.",
                        "range": "25 yd range",
                        "castTime": "Instant",
                        "cooldown": "20 sec cooldown"
                    }
                },
                {
                    "tier": 2,
                    "column": 1,
                    "spell": {
                        "id": 108211,
                        "name": "Leeching Poison",
                        "icon": "rogue_leeching_poison",
                        "description": "Coats your weapons with a Non-Lethal Poison that lasts for 1 hour.  Your melee attacks have a 50% chance to poison the target for 12 sec, causing subsequent melee attacks to heal you for 15% of damage dealt.",
                        "castTime": "3 sec cast"
                    }
                },
                {
                    "tier": 4,
                    "column": 0,
                    "spell": {
                        "id": 131511,
                        "name": "Prey on the Weak",
                        "icon": "ability_rogue_preyontheweak",
                        "description": "Enemies disabled with your Kidney Shot, Cheap Shot, Gouge, Sap, or Blind take 10% increased damage from all sources.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 5,
                    "column": 1,
                    "spell": {
                        "id": 137619,
                        "name": "Marked for Death",
                        "icon": "achievement_bg_killingblow_berserker",
                        "description": "Mark the target, instantly generating 5 combo points.  Cooldown reset if the target dies within 1 min.",
                        "range": "30 yd range",
                        "castTime": "Instant",
                        "cooldown": "1 min cooldown"
                    }
                },
                {
                    "tier": 6,
                    "column": 1,
                    "spell": {
                        "id": 152151,
                        "name": "Shadow Reflection",
                        "icon": "rogue_shadow_reflection",
                        "description": "Summon a shadow of yourself on the target that will watch you and memorize your offensive ability usage for the next 8 sec. After this time, it will mimic the memorized abilities on its target over the next 8 sec.",
                        "range": "20 yd range",
                        "castTime": "Instant",
                        "cooldown": "2 min cooldown"
                    }
                }
            ],
            "glyphs": {
                "major": [],
                "minor": [
                    {
                        "glyph": 468,
                        "item": 43379,
                        "name": "Glyph of Blurred Speed",
                        "icon": "ability_rogue_sprint"
                    },
                    {
                        "glyph": 469,
                        "item": 43380,
                        "name": "Glyph of Poisons",
                        "icon": "trade_brewpoison"
                    }
                ]
            },
            "spec": {
                "name": "Assassination",
                "role": "DPS",
                "backgroundImage": "bg-rogue-assassination",
                "icon": "ability_rogue_eviscerate",
                "description": "A deadly master of poisons who dispatches victims with vicious dagger strikes.",
                "order": 0
            },
            "calcTalent": "2011011",
            "calcSpec": "a",
            "calcGlyph": "kP"
        },
        {
            "selected": true,
            "talents": [
                {
                    "tier": 0,
                    "column": 2,
                    "spell": {
                        "id": 108209,
                        "name": "Shadow Focus",
                        "icon": "rogue_shadowfocus",
                        "description": "Abilities cost 75% less Energy while you are stealthed.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 1,
                    "column": 2,
                    "spell": {
                        "id": 74001,
                        "name": "Combat Readiness",
                        "icon": "ability_rogue_combatreadiness",
                        "description": "Enter a state of heightened defensive awareness. Each successive weapon attack will deal 10% less damage, stacking 5 times.  Lasts 20 sec or until not attacked with weapons for 10 sec.",
                        "castTime": "Instant",
                        "cooldown": "2 min cooldown"
                    }
                },
                {
                    "tier": 2,
                    "column": 2,
                    "spell": {
                        "id": 79008,
                        "name": "Elusiveness",
                        "subtext": "Passive Talent",
                        "icon": "ability_rogue_turnthetables",
                        "description": "Feint also reduces all damage you take by 30% for 5 sec.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 3,
                    "column": 1,
                    "spell": {
                        "id": 36554,
                        "name": "Shadowstep",
                        "icon": "ability_rogue_shadowstep",
                        "description": "Step through the shadows to appear behind your target and gain 70% movement speed for 2 sec.",
                        "range": "25 yd range",
                        "castTime": "Instant",
                        "cooldown": "20 sec cooldown"
                    }
                },
                {
                    "tier": 4,
                    "column": 0,
                    "spell": {
                        "id": 131511,
                        "name": "Prey on the Weak",
                        "icon": "ability_rogue_preyontheweak",
                        "description": "Enemies disabled with your Kidney Shot, Cheap Shot, Gouge, Sap, or Blind take 10% increased damage from all sources.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 5,
                    "column": 1,
                    "spell": {
                        "id": 137619,
                        "name": "Marked for Death",
                        "icon": "achievement_bg_killingblow_berserker",
                        "description": "Mark the target, instantly generating 5 combo points.  Cooldown reset if the target dies within 1 min.",
                        "range": "30 yd range",
                        "castTime": "Instant",
                        "cooldown": "1 min cooldown"
                    }
                },
                {
                    "tier": 6,
                    "column": 1,
                    "spell": {
                        "id": 152151,
                        "name": "Shadow Reflection",
                        "icon": "rogue_shadow_reflection",
                        "description": "Summon a shadow of yourself on the target that will watch you and memorize your offensive ability usage for the next 8 sec. After this time, it will mimic the memorized abilities on its target over the next 8 sec.",
                        "range": "20 yd range",
                        "castTime": "Instant",
                        "cooldown": "2 min cooldown"
                    }
                }
            ],
            "glyphs": {
                "major": [
                    {
                        "glyph": 392,
                        "item": 0,
                        "name": "Glyph of Ambush",
                        "icon": "ability_rogue_ambush"
                    },
                    {
                        "glyph": 407,
                        "item": 42970,
                        "name": "Glyph of Hemorrhaging Veins",
                        "icon": "spell_holy_sealofsacrifice"
                    },
                    {
                        "glyph": 731,
                        "item": 0,
                        "name": "Glyph of Deadly Momentum",
                        "icon": "ability_rogue_deadlymomentum"
                    }
                ],
                "minor": [
                    {
                        "glyph": 469,
                        "item": 43380,
                        "name": "Glyph of Poisons",
                        "icon": "trade_brewpoison"
                    },
                    {
                        "glyph": 468,
                        "item": 43379,
                        "name": "Glyph of Blurred Speed",
                        "icon": "ability_rogue_sprint"
                    },
                    {
                        "glyph": 467,
                        "item": 43378,
                        "name": "Glyph of Safe Fall",
                        "icon": "inv_feather_01"
                    }
                ]
            },
            "spec": {
                "name": "Subtlety",
                "role": "DPS",
                "backgroundImage": "bg-rogue-subtlety",
                "icon": "ability_stealth",
                "description": "A dark stalker who leaps from the shadows to ambush his unsuspecting prey.",
                "order": 2
            },
            "calcTalent": "2221011",
            "calcSpec": "b",
            "calcGlyph": "aTNPkQ"
        }
    ],
    "appearance": {
        "faceVariation": 9,
        "skinColor": 0,
        "hairVariation": 1,
        "hairColor": 9,
        "featureVariation": 5,
        "showHelm": true,
        "showCloak": false
    },
    "totalHonorableKills": 40742
},
{
    "lastModified": 1416685236000,
    "name": "Seretide",
    "realm": "Twisting Nether",
    "battlegroup": "Sturmangriff / Charge",
    "class": 11,
    "race": 8,
    "gender": 1,
    "level": 100,
    "achievementPoints": 18465,
    "thumbnail": "internal-record-3674/237/105785069-avatar.jpg",
    "calcClass": "U",
    "guild": {
        "name": "Blacklight",
        "realm": "Twisting Nether",
        "battlegroup": "Sturmangriff / Charge",
        "members": 287,
        "achievementPoints": 2065,
        "emblem": {
            "icon": 100,
            "iconColor": "ffb1b8b1",
            "border": 1,
            "borderColor": "ffffffff",
            "backgroundColor": "ff232323"
        }
    },
    "items": {
        "averageItemLevel": 634,
        "averageItemLevelEquipped": 634,
        "head": {
            "id": 109979,
            "name": "Blackwater Helm",
            "icon": "inv_leather_draenordungeon_c_01helm",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "transmogItem": 90062
            },
            "stats": [
                {
                    "stat": 59,
                    "amount": 111
                },
                {
                    "stat": 40,
                    "amount": 111
                },
                {
                    "stat": 73,
                    "amount": 167
                },
                {
                    "stat": 7,
                    "amount": 251
                }
            ],
            "armor": 109,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "neck": {
            "id": 109954,
            "name": "Magister's Chain",
            "icon": "inv_60dungeon_neck4d",
            "quality": 3,
            "itemLevel": 636,
            "tooltipParams": {
                "enchant": 5293
            },
            "stats": [
                {
                    "stat": 32,
                    "amount": 66
                },
                {
                    "stat": 49,
                    "amount": 66
                },
                {
                    "stat": 5,
                    "amount": 99
                },
                {
                    "stat": 7,
                    "amount": 149
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                499,
                524
            ]
        },
        "shoulder": {
            "id": 109936,
            "name": "Crystalbinder Shoulderpads",
            "icon": "inv_leather_draenordungeon_c_01shoulder",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "transmogItem": 90065
            },
            "stats": [
                {
                    "stat": 59,
                    "amount": 86
                },
                {
                    "stat": 40,
                    "amount": 80
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 100,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "back": {
            "id": 109907,
            "name": "Felbone Drape",
            "icon": "inv_cape_draenordungeon_c_04leather_light",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "enchant": 5300,
                "tinker": 4897,
                "transmogItem": 18510
            },
            "stats": [
                {
                    "stat": 32,
                    "amount": 72
                },
                {
                    "stat": 5,
                    "amount": 94
                },
                {
                    "stat": 36,
                    "amount": 48
                },
                {
                    "stat": 7,
                    "amount": 141
                }
            ],
            "armor": 44,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "chest": {
            "id": 118960,
            "name": "Railwalker Jerkin of the Feverflare",
            "icon": "inv_chest_mail_draenorlfr_c_01",
            "quality": 4,
            "itemLevel": 640,
            "tooltipParams": {
                "transmogItem": 90064
            },
            "stats": [
                {
                    "stat": 49,
                    "amount": 133
                },
                {
                    "stat": 73,
                    "amount": 184
                },
                {
                    "stat": 36,
                    "amount": 104
                },
                {
                    "stat": 7,
                    "amount": 275
                }
            ],
            "armor": 141,
            "context": "quest-reward",
            "bonusLists": [
                112
            ]
        },
        "wrist": {
            "id": 109869,
            "name": "Bloodfeather Bracers",
            "icon": "inv_leather_draenordungeon_c_01bracer",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "gem0": 115805
            },
            "stats": [
                {
                    "stat": 40,
                    "amount": 63
                },
                {
                    "stat": 73,
                    "amount": 94
                },
                {
                    "stat": 36,
                    "amount": 63
                },
                {
                    "stat": 7,
                    "amount": 141
                }
            ],
            "armor": 59,
            "context": "dungeon-heroic",
            "bonusLists": [
                523,
                524
            ]
        },
        "hands": {
            "id": 109851,
            "name": "Leafmender Grips",
            "icon": "inv_leather_draenordungeon_c_01glove",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "transmogItem": 90061
            },
            "stats": [
                {
                    "stat": 32,
                    "amount": 64
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 36,
                    "amount": 96
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 84,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "waist": {
            "id": 109831,
            "name": "Crystalbinder Belt",
            "icon": "inv_leather_draenordungeon_c_01belt",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "tinker": 4223,
                "transmogItem": 90059
            },
            "stats": [
                {
                    "stat": 49,
                    "amount": 96
                },
                {
                    "stat": 32,
                    "amount": 64
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 75,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "legs": {
            "id": 109811,
            "name": "Crystalbinder Legwraps",
            "icon": "inv_leather_draenordungeon_c_01pant",
            "quality": 3,
            "itemLevel": 636,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 49,
                    "amount": 101
                },
                {
                    "stat": 73,
                    "amount": 177
                },
                {
                    "stat": 36,
                    "amount": 128
                },
                {
                    "stat": 7,
                    "amount": 265
                }
            ],
            "armor": 121,
            "context": "dungeon-heroic",
            "bonusLists": [
                499,
                524
            ]
        },
        "feet": {
            "id": 109788,
            "name": "Bloodfeather Treads",
            "icon": "inv_leather_draenordungeon_c_01boot",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 59,
                    "amount": 90
                },
                {
                    "stat": 73,
                    "amount": 126
                },
                {
                    "stat": 36,
                    "amount": 74
                },
                {
                    "stat": 7,
                    "amount": 189
                }
            ],
            "armor": 92,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "finger1": {
            "id": 109764,
            "name": "Mark of Ice",
            "icon": "inv_60dungeon_ring4d",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "enchant": 5299
            },
            "stats": [
                {
                    "stat": 59,
                    "amount": 63
                },
                {
                    "stat": 32,
                    "amount": 63
                },
                {
                    "stat": 5,
                    "amount": 94
                },
                {
                    "stat": 7,
                    "amount": 141
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "finger2": {
            "id": 118296,
            "name": "Timeless Solium Band of the Archmage",
            "icon": "inv_misc_6oring_purplelv2",
            "quality": 4,
            "itemLevel": 680,
            "tooltipParams": {
                "enchant": 5299
            },
            "stats": [
                {
                    "stat": 40,
                    "amount": 78
                },
                {
                    "stat": 49,
                    "amount": 113
                },
                {
                    "stat": 5,
                    "amount": 150
                },
                {
                    "stat": 7,
                    "amount": 225
                }
            ],
            "armor": 0,
            "context": "quest-reward",
            "bonusLists": []
        },
        "trinket1": {
            "id": 110002,
            "name": "Fleshrender's Meathook",
            "icon": "inv_misc_hook_01",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 5,
                    "amount": 159
                },
                {
                    "stat": 62,
                    "amount": 72
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                41,
                524
            ]
        },
        "trinket2": {
            "id": 110000,
            "name": "Crushto's Runic Alarm",
            "icon": "inv_misc_rune_10",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {},
            "stats": [
                {
                    "stat": 5,
                    "amount": 159
                },
                {
                    "stat": 32,
                    "amount": 159
                }
            ],
            "armor": 0,
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        },
        "mainHand": {
            "id": 110031,
            "name": "Spire of the Furious Construct",
            "icon": "invstaff_2h_draenordungeon_c_04",
            "quality": 3,
            "itemLevel": 630,
            "tooltipParams": {
                "transmogItem": 114909
            },
            "stats": [
                {
                    "stat": 32,
                    "amount": 111
                },
                {
                    "stat": 49,
                    "amount": 111
                },
                {
                    "stat": 5,
                    "amount": 167
                },
                {
                    "stat": 7,
                    "amount": 251
                },
                {
                    "stat": 45,
                    "amount": 958
                }
            ],
            "armor": 0,
            "weaponInfo": {
                "damage": {
                    "min": 348,
                    "max": 523,
                    "exactMin": 348,
                    "exactMax": 523
                },
                "weaponSpeed": 2.9,
                "dps": 150.17241
            },
            "context": "dungeon-heroic",
            "bonusLists": [
                524
            ]
        }
    },
    "stats": {
        "health": 209100,
        "powerType": "mana",
        "power": 160000,
        "str": 658,
        "agi": 1350,
        "int": 3343,
        "sta": 3485,
        "speedRating": 0,
        "speedRatingBonus": 0,
        "crit": 10.445455,
        "critRating": 599,
        "haste": 5.12999,
        "hasteRating": 513,
        "hasteRatingPercent": 5.13,
        "mastery": 30.306816,
        "masteryRating": 898,
        "spr": 783,
        "bonusArmor": 0,
        "multistrike": 5.30303,
        "multistrikeRating": 5.30303,
        "multistrikeRatingBonus": 5.30303,
        "leech": 0.261818,
        "leechRating": 0.261818,
        "leechRatingBonus": 0.261818,
        "versatility": 332,
        "versatilityDamageDoneBonus": 2.553846,
        "versatilityHealingDoneBonus": 2.553846,
        "versatilityDamageTakenBonus": 1.276923,
        "avoidanceRating": 0.261818,
        "avoidanceRatingBonus": 0,
        "spellPower": 4301,
        "spellPen": 0,
        "spellCrit": 10.445455,
        "spellCritRating": 599,
        "mana5": 6428,
        "mana5Combat": 3200,
        "armor": 825,
        "dodge": 3.307694,
        "dodgeRating": 0,
        "parry": 0,
        "parryRating": 0,
        "block": 0,
        "blockRating": 0,
        "mainHandDmgMin": 1538,
        "mainHandDmgMax": 1723,
        "mainHandSpeed": 2.758,
        "mainHandDps": 591.3049,
        "offHandDmgMin": 405,
        "offHandDmgMax": 406,
        "offHandSpeed": 1.902,
        "offHandDps": 213.08484,
        "rangedDmgMin": -1,
        "rangedDmgMax": -1,
        "rangedSpeed": -1,
        "rangedDps": -1,
        "attackPower": 1350,
        "rangedAttackPower": 0
    },
    "talents": [
        {
            "talents": [
                {
                    "tier": 0,
                    "column": 0,
                    "spell": {
                        "id": 131768,
                        "name": "Feline Swiftness",
                        "icon": "spell_druid_tirelesspursuit",
                        "description": "Increases your movement speed by 15%.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 1,
                    "column": 0,
                    "spell": {
                        "id": 145108,
                        "name": "Ysera's Gift",
                        "icon": "inv_misc_head_dragon_green",
                        "description": "Heals you for 4% of your maximum health every 5 sec.  If you are at full health, a random nearby injured ally will be healed instead.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 2,
                    "column": 2,
                    "spell": {
                        "id": 132469,
                        "name": "Typhoon",
                        "icon": "ability_druid_typhoon",
                        "description": "Summons a violent Typhoon that strikes targets in front of the caster within 15 yards, knocking them back and dazing them for 6 sec.  Usable in all shapeshift forms.",
                        "castTime": "Instant",
                        "cooldown": "30 sec cooldown"
                    }
                },
                {
                    "tier": 4,
                    "column": 1,
                    "spell": {
                        "id": 102793,
                        "name": "Ursol's Vortex",
                        "icon": "spell_druid_ursolsvortex",
                        "description": "Conjures a vortex of wind for 10 sec at the destination location that reduces the movement speed of all enemies within 8 yards by 50%.  The first time an enemy attempts to leave the vortex, winds will pull that enemy back to its center.  Usable in all shapeshift forms.",
                        "range": "30 yd range",
                        "castTime": "Instant",
                        "cooldown": "1 min cooldown"
                    }
                },
                {
                    "tier": 5,
                    "column": 2,
                    "spell": {
                        "id": 124974,
                        "name": "Nature's Vigil",
                        "icon": "achievement_zone_feralas",
                        "description": "While active, all single-target healing and damage spells and abilities also heal a nearby friendly target based on the amount done, 20% for heals, 40% for damage spells.",
                        "castTime": "Instant",
                        "cooldown": "1.5 min cooldown"
                    }
                }
            ],
            "glyphs": {
                "major": [
                    {
                        "glyph": 173,
                        "item": 0,
                        "name": "Glyph of Healing Touch",
                        "icon": "spell_nature_healingtouch"
                    },
                    {
                        "glyph": 171,
                        "item": 40912,
                        "name": "Glyph of Regrowth",
                        "icon": "spell_nature_resistnature"
                    }
                ],
                "minor": [
                    {
                        "glyph": 1076,
                        "item": 104102,
                        "name": "Glyph of the Sprouting Mushroom",
                        "icon": "spell_druid_wildmushroom"
                    },
                    {
                        "glyph": 431,
                        "item": 43316,
                        "name": "Glyph of Aquatic Form",
                        "icon": "inv_enchant_essencemagiclarge"
                    },
                    {
                        "glyph": 176,
                        "item": 40919,
                        "name": "Glyph of the Orca",
                        "icon": "ability_druid_aquaticform"
                    }
                ]
            },
            "spec": {
                "name": "Restoration",
                "role": "HEALING",
                "backgroundImage": "bg-druid-restoration",
                "icon": "spell_nature_healingtouch",
                "description": "Uses heal-over-time Nature spells to keep allies alive.",
                "order": 3
            },
            "calcTalent": "002.12.",
            "calcSpec": "Y",
            "calcGlyph": "WXrhV"
        },
        {
            "selected": true,
            "talents": [
                {
                    "tier": 5,
                    "column": 2,
                    "spell": {
                        "id": 124974,
                        "name": "Nature's Vigil",
                        "icon": "achievement_zone_feralas",
                        "description": "While active, all single-target healing and damage spells and abilities also heal a nearby friendly target based on the amount done, 20% for heals, 40% for damage spells.",
                        "castTime": "Instant",
                        "cooldown": "1.5 min cooldown"
                    }
                },
                {
                    "tier": 4,
                    "column": 1,
                    "spell": {
                        "id": 102793,
                        "name": "Ursol's Vortex",
                        "icon": "spell_druid_ursolsvortex",
                        "description": "Conjures a vortex of wind for 10 sec at the destination location that reduces the movement speed of all enemies within 8 yards by 50%.  The first time an enemy attempts to leave the vortex, winds will pull that enemy back to its center.  Usable in all shapeshift forms.",
                        "range": "30 yd range",
                        "castTime": "Instant",
                        "cooldown": "1 min cooldown"
                    }
                },
                {
                    "tier": 2,
                    "column": 2,
                    "spell": {
                        "id": 132469,
                        "name": "Typhoon",
                        "icon": "ability_druid_typhoon",
                        "description": "Summons a violent Typhoon that strikes targets in front of the caster within 15 yards, knocking them back and dazing them for 6 sec.  Usable in all shapeshift forms.",
                        "castTime": "Instant",
                        "cooldown": "30 sec cooldown"
                    }
                },
                {
                    "tier": 0,
                    "column": 0,
                    "spell": {
                        "id": 131768,
                        "name": "Feline Swiftness",
                        "icon": "spell_druid_tirelesspursuit",
                        "description": "Increases your movement speed by 15%.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 1,
                    "column": 0,
                    "spell": {
                        "id": 145108,
                        "name": "Ysera's Gift",
                        "icon": "inv_misc_head_dragon_green",
                        "description": "Heals you for 4% of your maximum health every 5 sec.  If you are at full health, a random nearby injured ally will be healed instead.",
                        "castTime": "Passive"
                    }
                },
                {
                    "tier": 6,
                    "column": 1,
                    "spell": {
                        "id": 152221,
                        "name": "Stellar Flare",
                        "icon": "ability_druid_stellarflare",
                        "description": "A powerful spell which benefits from both Lunar and Solar Eclipses, dealing the most damage when they are balanced. Burns the target for 1,166 Spellstorm damage, and then an additional 3,890 damage over 20 sec.",
                        "range": "40 yd range",
                        "powerCost": "3.29% of base mana",
                        "castTime": "1.5 sec cast"
                    }
                },
                {
                    "tier": 3,
                    "column": 1,
                    "spell": {
                        "id": 102560,
                        "name": "Incarnation: Chosen of Elune",
                        "subtext": "Talent, Shapeshift",
                        "icon": "spell_druid_incarnation",
                        "description": "An improved Moonkin Form that increases all your spell damage by an additional 15%.  Lasts 30 sec.\n\n\n\nYou may shapeshift in and out of this improved Moonkin Form for its duration.",
                        "castTime": "Instant",
                        "cooldown": "3 min cooldown"
                    }
                }
            ],
            "glyphs": {
                "major": [
                    {
                        "glyph": 674,
                        "item": 45604,
                        "name": "Glyph of Stampeding Roar",
                        "icon": "spell_druid_stamedingroar"
                    },
                    {
                        "glyph": 175,
                        "item": 40916,
                        "name": "Glyph of Guided Stars",
                        "icon": "ability_mage_arcanebarrage"
                    }
                ],
                "minor": [
                    {
                        "glyph": 431,
                        "item": 43316,
                        "name": "Glyph of Aquatic Form",
                        "icon": "inv_enchant_essencemagiclarge"
                    },
                    {
                        "glyph": 1054,
                        "item": 89868,
                        "name": "Glyph of the Cheetah",
                        "icon": "ability_hunter_catlikereflexes"
                    },
                    {
                        "glyph": 613,
                        "item": 44922,
                        "name": "Glyph of Stars",
                        "icon": "achievement_boss_algalon_01"
                    }
                ]
            },
            "spec": {
                "name": "Balance",
                "role": "DPS",
                "backgroundImage": "bg-druid-balance",
                "icon": "spell_nature_starfall",
                "description": "Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.",
                "order": 0
            },
            "calcTalent": "0021121",
            "calcSpec": "a",
            "calcGlyph": "mehJk"
        }
    ],
    "appearance": {
        "faceVariation": 2,
        "skinColor": 2,
        "hairVariation": 2,
        "hairColor": 7,
        "featureVariation": 0,
        "showHelm": true,
        "showCloak": false
    },
    "totalHonorableKills": 661
}
];

}