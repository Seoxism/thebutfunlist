// level info
const levels = [
	['EstrofemTransventure','https://youtu.be/rC0bP-kNPNo','Kalavian','120486509'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
	['Level Name','LEVEL_LINK_HERE','Creator','ID'],
];
const tiers = [
	[0, 'Example Tier 1'],
	[7, 'Example Tier 2'],
	[14, 'Example Tier 3']
];
const startingScore = 1000;
const scoreDivisor = 0.03;

// list generation
const levelsContainer = document.getElementById('list-levels');
let currentTier = 0;

window.onload = function(){
	let htmlString = '';
	for(let i=0;i<levels.length;i++){
		// level info
		const listPoints = startingScore/(1+scoreDivisor*i);
		// add tier
		if(tiers[currentTier]!=undefined && i==tiers[currentTier][0]){
			htmlString+=`<h2 class="difficulty-rating">${tiers[currentTier][1]}</h2>`;
			currentTier++;
		}
		// add level box
		const currentLevel = `<div class="level-container"><a class="level-title" href="${levels[i][1]}">#${i+1} - ${levels[i][0]}</a><span class="level-info">${levels[i][2]} | ${levels[i][3]}</span><span class="level-sub">List Points: ${listPoints.toFixed(2)}</span></div>`;
		htmlString+=currentLevel;
	}
	levelsContainer.innerHTML = htmlString;
}
