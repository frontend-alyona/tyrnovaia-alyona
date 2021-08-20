

const createTooltip =() => {
    tooltipContainer = document.createElement('div');
     tooltipButton = document.createElement('button');
     tooltipButton.style = "position:absolute; background: red; padding: 20px 40px";
     tooltipButton.className = "tooltip";

    tooltipContainer.append(tooltipButton);
    
    document.body.append(tooltipContainer);


    const buttonCoords = button.getBoundingClientRect();
    console.log(buttonCoords);


    tooltipButton.style.left = '215px';
    tooltipButton.style.top = '150px';
    

    const tooltipCoords = tooltipButton.getBoundingClientRect();
    console.log(tooltipCoords);
      
}


createTooltip( );








    
