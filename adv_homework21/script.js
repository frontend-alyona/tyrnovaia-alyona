const STARSHIP = 'https://swapi.dev/api/starships'
const VEHICLES = 'https://swapi.dev/api/vehicles'
const PLANET = 'https://swapi.dev/api/planets'


// базовыий класс, общий для всех
class Card {
  constructor(options){
    const {name} = options;
    this.name = name;
    this.container = document.createElement('div');
    this.render()

  }

  render(){
    const containerCard = document.createElement('div');
    const name = document.createElement('h4');
    

    this.container.classList.add('mainContainer');
    containerCard.classList.add('cardContainer');
    name.classList.add('name');
    
    name.innerText  = this.name;
    
    containerCard.append(name);
    this.container.append ( containerCard)
    
    


  }

  show(){
    document.body.append(this.container)
  }
}

class StarshipCard extends Card {
  constructor(starshipOptions){
    const {model,manufacturer, max_atmosphering_speed, ...rest} = starshipOptions;
    super(rest)
    this.model = model;
    this.manufacturer = manufacturer;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.renderShip();

  }
  renderShip(){
    const model = document.createElement('h4');
    const manufacturer = document.createElement('p');
    const max_atmosphering_speed = document.createElement('p');

    model.classList.add('model');
    manufacturer.classList.add('manufacturer');
    max_atmosphering_speed.classList.add('maxSpeed');

    model.innerText = this.model;
    manufacturer.textContent = this.manufacturer;
    max_atmosphering_speed.innerText = this.max_atmosphering_speed;

    containerCard.append(model, manufacturer, max_atmosphering_speed)
    this.container.append(this.containerCard)

  }
  showShip(){
    document.body.append(this.container)
  }

  
}

class API {
  constructor(){
    const form = document.getElementById('form');
    const select = document.getElementById('select');
    const input = document.getElementById('input');
    const button = document.getElementById('btn');
    
  }
    
      
      // button.addEventListener('click', ()=>{
      //   const id = input.value
      //   select.value = 'starship';
      //   const starship = async(id)=>{
          
      //     const request = await fetch(`${STARSHIP}/${id}`);
      //     const response = await request.json()
      //     showStarshipCard()
      //     console.log(`response`, response)
      //   }
      //   starship(id)
      // })

    
    
  
}

const card = new Card({
  name: 'test',
  model: 'model',
  manufacturer:'manuf',
  max_atmosphering_speed: 200,
});
card.show()
card.showShip()

console.log(`card`, card)




