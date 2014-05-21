var imageArray, countBox, progress, fillPercent, calcProgress;

window.onload = function()
{  
    imageArray = document.getElementById('badges1').getElementsByTagName('img');
    countBox = document.getElementById('textCount');
    countBox.innerHTML = 'Total Badges gained- = ' + imageArray.length;
    progress = imageArray.length/6*100;
    calcProgress = document.getElementById('calcProgress');
    calcProgress.onclick=function(){calculate()}; 
};


/*function calculate()
{
    fillPercent = 0
    setInterval(function()
		{
		    fillPercent++; 
		    if (fillPercent < progress)
		    {
			document.getElementById('progressBarFill').style.width = fillPercent+'%';
		    } 
		}
		,20);
}*/

function fillIt()
{
    fillPercent++;
    if (fillPercent < progress)
	{
	    document.getElementbyId('progressBarFill').style.width = fillPercent+'%';
	};
};

function calculate()
{
    fillPercent = 0;
    var stupidVar = setInterval(function(){fillIt()};,20);
};








