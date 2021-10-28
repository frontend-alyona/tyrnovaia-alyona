let tooltipElem;

document.onmouseover = function(event) {
    let target = event.target;
    
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerText = 'I am a tooltip';
    document.body.append(tooltipElem);
    
    let coords = target.getBoundingClientRect();
    
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    
    let top = coords.top - tooltipElem.offsetHeight - 20;
    
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }

};








    
