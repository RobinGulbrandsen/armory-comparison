angular.module('templates-app', ['about/about.tpl.html', 'result/result.tpl.html', 'search/search.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"field\">\n" +
    "	<h1>About</h1>\n" +
    "	<p>Coming soon(tm)</p>\n" +
    "</div>");
}]);

angular.module("result/result.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("result/result.tpl.html",
    "<section class=\"results\">\n" +
    "	<div class=\"result-element\" data-ng-repeat=\"element in list\">\n" +
    "		<div class=\"char-name\">\n" +
    "			<div class=\"sigil\"></div>\n" +
    "			<div class=\"name\">{{ element.name }}\n" +
    "				<span class=\"guild\">{{ element.guild.name }}</span>\n" +
    "				<span class=\"iLvl\">iLvl: {{ element.items.averageItemLevelEquipped }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"top\" data-ng-style=\"setBackground(element.thumbnail)\">\n" +
    "			<div class=\"left\">\n" +
    "				<a class=\"item item-big tooltipcontainer\">\n" +
    "					<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.head\">\n" +
    "						<span class=\"tooltip-title color{{element.items.head.quality}}\">{{element.items.head.name}}</span>\n" +
    "						<br />\n" +
    "						<span class=\"tooltip-ilvl\">Item level: {{element.items.head.itemLevel}}</span>\n" +
    "					</div>\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.head.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.head.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.neck\">\n" +
    "							<span class=\"tooltip-title color{{element.items.neck.quality}}\">{{element.items.neck.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.neck.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.neck.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.neck.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.shoulder\">\n" +
    "							<span class=\"tooltip-title color{{element.items.shoulder.quality}}\">{{element.items.shoulder.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.shoulder.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.shoulder.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.shoulder.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.back\">\n" +
    "							<span class=\"tooltip-title color{{element.items.back.quality}}\">{{element.items.back.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.back.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.back.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.back.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.chest\">\n" +
    "							<span class=\"tooltip-title color{{element.items.chest.quality}}\">{{element.items.chest.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.chest.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.chest.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.chest.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.shirt\">\n" +
    "							<span class=\"tooltip-title color{{element.items.shirt.quality}}\">{{element.items.shirt.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.shirt.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.shirt.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.shirt.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.tabard\">\n" +
    "							<span class=\"tooltip-title color{{element.items.tabard.quality}}\">{{element.items.tabard.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.tabard.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.tabard.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.tabard.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.wrist\">\n" +
    "							<span class=\"tooltip-title color{{element.items.wrist.quality}}\">{{element.items.wrist.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.wrist.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.wrist.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.wrist.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "			<div class=\"right\">\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.hands\">\n" +
    "							<span class=\"tooltip-title color{{element.items.hands.quality}}\">{{element.items.hands.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.hands.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.hands.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.hands.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.waist\">\n" +
    "							<span class=\"tooltip-title color{{element.items.waist.quality}}\">{{element.items.waist.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.waist.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.waist.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.waist.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.legs\">\n" +
    "							<span class=\"tooltip-title color{{element.items.legs.quality}}\">{{element.items.legs.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.legs.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.legs.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.legs.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.feet\">\n" +
    "							<span class=\"tooltip-title color{{element.items.feet.quality}}\">{{element.items.feet.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.feet.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.feet.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.feet.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.finger1\">\n" +
    "							<span class=\"tooltip-title color{{element.items.finger1.quality}}\">{{element.items.finger1.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.finger1.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.finger1.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.finger1.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.finger2\">\n" +
    "							<span class=\"tooltip-title color{{element.items.finger2.quality}}\">{{element.items.finger2.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.finger2.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.finger2.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.finger2.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.trinket1\">\n" +
    "							<span class=\"tooltip-title color{{element.items.trinket1.quality}}\">{{element.items.trinket1.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.trinket1.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.trinket1.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.trinket1.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-big\" data-ng-show=\"element.items.trinket2\">\n" +
    "							<span class=\"tooltip-title color{{element.items.trinket2.quality}}\">{{element.items.trinket2.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.trinket2.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.trinket2.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.trinket2.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "			<div class=\"info\">\n" +
    "				<div class=\"item item-big spesialization\" data-ng-show=\"element.talents[0].selected\">\n" +
    "					<div class=\"image-placeholder\">\n" +
    "						<img data-ng-src=\"http://media.blizzard.com/wow/icons/36/{{ element.talents[0].spec.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"item item-big spesialization\" data-ng-show=\"element.talents[1].selected\">\n" +
    "					<div class=\"image-placeholder\">\n" +
    "						<img data-ng-src=\"http://media.blizzard.com/wow/icons/36/{{ element.talents[1].spec.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"middle\">\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-wep\" data-ng-show=\"element.items.mainHand\">\n" +
    "							<span class=\"tooltip-title color{{element.items.mainHand.quality}}\">{{element.items.mainHand.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.mainHand.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.mainHand.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.mainHand.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a class=\"tooltipcontainer\">\n" +
    "					<div class=\"item item-big\">\n" +
    "						<div class=\"tooltip tooltip-wep\" data-ng-show=\"element.items.offHand\">\n" +
    "							<span class=\"tooltip-title color{{element.items.offHand.quality}}\">{{element.items.offHand.name}}</span>\n" +
    "							<br />\n" +
    "							<span class=\"tooltip-ilvl\">Item level: {{element.items.offHand.itemLevel}}</span>\n" +
    "						</div>\n" +
    "						<div class=\"image-placeholder borderColor{{element.items.offHand.quality}}\">\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/56/{{ element.items.offHand.icon }}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"bottom\">\n" +
    "			<div class=\"bottom-left\">\n" +
    "				<div class=\"char-stats\">\n" +
    "					<div class=\"health\">\n" +
    "						<p>Health: <span>{{element.stats.health}}</span></p>\n" +
    "					</div>\n" +
    "					<div class=\"general\">\n" +
    "						<p class=\"title\">General</p>\n" +
    "						<table>\n" +
    "							<tr>\n" +
    "								<td class=\"first armory-orange\">Agility:</td>\n" +
    "								<td class=\"second armory-white\">{{element.stats.agi}}</td>\n" +
    "							</tr>\n" +
    "						</table>\n" +
    "					</div>\n" +
    "					<div class=\"other\">\n" +
    "						<p class=\"title\">Other</p>\n" +
    "						<table>\n" +
    "							<tr>\n" +
    "								<td class=\"first armory-orange\">Multistrike:</td>\n" +
    "								<td class=\"second armory-white\">{{element.stats.multistrikeRatingBonus | number : 2}}%</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td class=\"first armory-orange\">Crit:</td>\n" +
    "								<td class=\"second armory-white\">{{element.stats.critRating }}</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td class=\"first armory-orange\">Haste:</td>\n" +
    "								<td class=\"second armory-white\">{{element.stats.hasteRating }}</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td class=\"first armory-orange\">Mastery:</td>\n" +
    "								<td class=\"second armory-white\">{{element.stats.masteryRating }}</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td class=\"first armory-orange\">Versatility:</td>\n" +
    "								<td class=\"second armory-white\">{{element.stats.versatility }}</td>\n" +
    "							</tr>\n" +
    "						</table>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bottom-right\">\n" +
    "				<div class=\"glyphs\" data-ng-show=\"element.talents[0].selected\">\n" +
    "					<div class=\"glyph-group\">\n" +
    "						<p>Major Glyphs</p>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].glyphs.major[0].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].glyphs.major[0].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<span class=\"info\">Text</span>\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].glyphs.major[1].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].glyphs.major[1].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].glyphs.major[2].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].glyphs.major[2].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"glyph-group\">\n" +
    "						<p>Minor Glyphs</p>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].glyphs.minor[0].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].glyphs.minor[0].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].glyphs.minor[1].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].glyphs.minor[1].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].glyphs.minor[2].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].glyphs.minor[2].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"glyphs\" data-ng-show=\"element.talents[1].selected\">\n" +
    "					<div class=\"glyph-group\">\n" +
    "						<p>Major Glyphs</p>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].glyphs.major[0].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].glyphs.major[0].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].glyphs.major[1].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].glyphs.major[1].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].glyphs.major[2].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].glyphs.major[2].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"glyph-group\">\n" +
    "						<p>Minor Glyphs</p>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].glyphs.minor[0].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].glyphs.minor[0].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].glyphs.minor[1].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].glyphs.minor[1].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].glyphs.minor[2].name}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].glyphs.minor[2].icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"talents\" data-ng-show=\"element.talents[0].selected\">\n" +
    "					<p>Talents</p>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[0].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[0].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[0].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[0].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[1].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[1].spell.description}}</span>\n" +
    "							</div>							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[1].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[1].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[2].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[2].spell.description}}</span>\n" +
    "							</div>							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[2].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[2].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[3].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[3].spell.description}}</span>\n" +
    "							</div>							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[3].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[3].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[4].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[4].spell.description}}</span>\n" +
    "							</div>							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[4].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[4].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\" data-ng-show=\"element.talents[1].selected\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[5].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[5].spell.description}}</span>\n" +
    "							</div>							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[5].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[5].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[0].talents[6].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[0].talents[6].spell.description}}</span>\n" +
    "							</div>							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[0].talents[6].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[0].talents[6].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"talents\" data-ng-show=\"element.talents[1].selected\">\n" +
    "					<p>Talents</p>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[0].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[0].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[0].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[0].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[1].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[1].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[1].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[1].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[2].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[2].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[2].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[2].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[3].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[3].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[3].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[3].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[4].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[4].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[4].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[4].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[5].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[5].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[5].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[5].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<div class=\"talent\">\n" +
    "						<a class=\"item item-small glyph tooltipcontainer\">\n" +
    "							<div class=\"tooltip tooltip-small\">\n" +
    "								<span class=\"tooltip-title color\">{{element.talents[1].talents[6].spell.name}}</span><br />\n" +
    "								<span class=\"tooltip-text\">{{element.talents[1].talents[6].spell.description}}</span>\n" +
    "							</div>\n" +
    "							<img data-ng-src=\"http://media.blizzard.com/wow/icons/18/{{element.talents[1].talents[6].spell.icon}}.jpg\" onerror=\"this.style.display='none'\">\n" +
    "							<p class=\"talent-name\">{{element.talents[1].talents[6].spell.name}}</p>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"field search\">\n" +
    "	<p class=\"title\">Search</p>\n" +
    "	<div class=\"form\">\n" +
    "		<div class=\"formgroup\">\n" +
    "			<label>Region:</label>\n" +
    "			<select data-ng-model=\"form.region\" data-ng-options=\"region.name for region in regions\"></select>\n" +
    "		</div>\n" +
    "		<div class=\"formgroup\">\n" +
    "			<label>Server:</label>\n" +
    "			<select data-ng-model=\"form.server\" data-ng-options=\"region.name for region in regions\"></select>\n" +
    "		</div>\n" +
    "		<div class=\"formgroup\">\n" +
    "			<label>Guildname:</label>\n" +
    "			<input type=\"text\" data-ng-model=\"form.guild\">\n" +
    "		</div>	\n" +
    "		<button>Search</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"field filter\">\n" +
    "	<p class=\"title\">Filter</p>\n" +
    "	<div class=\"formgroup\">\n" +
    "		<label>Level:</label>\n" +
    "		<input type=\"number\">\n" +
    "	</div>\n" +
    "	<div class=\"formgroup\">\n" +
    "		<label>Class:</label>\n" +
    "		<select data-ng-model=\"selectedClass\" data-ng-options=\"class.name for class in classes | orderBy: 'name'\"></select>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"field search-result\">\n" +
    "	<div class=\"search-result-options\">\n" +
    "\n" +
    "	</div>\n" +
    "	<div class=\"search-result-list\">\n" +
    "		<table id=\"result-list\">\n" +
    "			<thead>\n" +
    "				<tr>\n" +
    "					<td>Add</td>\n" +
    "					<td>Level</td>\n" +
    "					<td>Name</td>\n" +
    "					<td>Guild</td>\n" +
    "					<td>Server</td>\n" +
    "					<td>Battle Group</td>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "				<tr class=\"search-result-element\" data-ng-repeat=\"member in members | orderBy:'character.name'\" data-ng-click=\"addCharacter(member, active)\">\n" +
    "					<td><div class=\"checkbox\" data-ng-class=\"{'active':active}\" data-ng-click=\"active = !active\"></div></td>\n" +
    "					<td>{{member.character.level}}</td>\n" +
    "					<td class=\"classColor{{member.character.class}}\">{{member.character.name}}</td>\n" +
    "					<td>{{member.character.guild}}</td>\n" +
    "					<td>{{member.character.realm}}</td>\n" +
    "					<td>{{member.character.battlegroup}}</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"field complete-button\">\n" +
    "	<button>Ok</button>\n" +
    "</div>");
}]);
