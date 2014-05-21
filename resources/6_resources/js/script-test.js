var imageArray, countBox, progress, fillPercent, calcProgress;

window.onload = function()
{  
    imageArray = document.getElementById('badges1').getElementsByTagName('img');
    countBox = document.getElementById('textCount');
    countBox.innerHTML = 'Total Badges gained- = ' + imagesArray.length;
    calcProgress = document.getElementById('calcProgress');
    calcProgress.onclick=function(){calculate()}; 
};

function fillProgressBar()
{
    document.getElementById('progressBarFill').style.width = fillPercent+'%';
};

function calculate()
{
    fillPercent = 0
    progress = images.length/12*100;
    setInterval(function()
		{
		    fillPercent++; 
		    if (fillPercent < progress)
		    {
			fillProgressBar(); 
		    } 
		}
		,20);
}






