var imageArray

window.onload = function()
{
    imageArray = document.getElementById('badges1').getElementsByTagName('img');
    countBox = document.getElementById('textCount');
    countBox.innerHTML = 'Total Badges gained- = ' + imageArray.length;
}
