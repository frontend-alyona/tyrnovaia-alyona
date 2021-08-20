

const createTooltip =() => {
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    
    document.body.append(tooltipElem);

    
    const tooltip = document.querySelector('.tooltip')
    const buttonCoords = tooltip.getBoundingClientRect();
    console.log(buttonCoords);


       
}


createTooltip( );





    
