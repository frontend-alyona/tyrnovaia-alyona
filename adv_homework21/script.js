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

class Vehicle extends Card{
  constructor(vehicleOptions){
    const {cost_in_credits, crew, passengers, ...rest} = vehicleOptions;
    super(rest)
    this.cost_in_credits = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;
    this.renderVehicle()
  }
  renderVehicle(){
    const credits = document.createElement('p');
    const crew = document.createElement('p');
    const passengers = document.createElement('p');

    credits.classList.add('credits');
    crew.classList.add('crew');
    passengers.classList.add('passenger');

    credits.innerText = this.credits;
    crew.innerText = this.crew;
    passengers.innerText = this.passengers;

    containerCard.append(credits, crew, passengers )
    this.container.append(containerCard);

  }
  showVehicle(){
    document.body.append(this.container)
  }
}
class Planet extends Card {
  constructor(planetOptions){
    const {climate,terrain, population, ...rest} = planetOptions;
    super(rest)
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
    this.renderPlanet()

  }
  renderPlanet(){
    const climate = document.createElement('p');
    const terrain = document.createElement('p');
    const population = document.createElement('p');

    climate.classList.add('climate')
    terrain.classList.add('terrain')
    population.classList.add('population');

    climate.innerText = this.climate;
    terrain.innerText = this.terrain;
    population.innerText = this.population;

    containerCard/append(climate, terrain, population)
    this.container.append(containerCard)
  }
  showPlanet(){
    document.body.append(this.container)
  }
}

class API {
  constructor(){
    this.form = document.getElementById('form');
    this.select = document.getElementById('select');
    
    this.input = document.getElementById('input');
    this.button = document.getElementById('btn');

    this.form = form;
    this.select = select;
    // this.options = options;
    this.input = input;
    this.button = button;
    
    
  }
  getStarship(){
    
      button.addEventListener('click', ()=>{
        const id = input.value
        select.value = 'starship';
        const requestStarship = async (id) =>{
        const request = await fetch(`${STARSHIP}/${id}`);
        const response = await request.json()
        showShip()
        console.log(`response`, response)
        }
        requestStarship(id)
        
      })

    
    requestStarship()
  }

  getVehicle(){
    button.addEventListener('click', ()=>{
      const id = input.value
      select.value = 'vehicle';
      const requestVehicle = async (id) =>{
      const request = await fetch(`${VEHICLES}/${id}`);
      const response = await request.json()
      showVehicle()
      console.log(`response`, response)
      }
      requestVehicle(id)
      
    })

  }

  getPlanet(){
    button.addEventListener('click', ()=>{
      const id = input.value
      select.value = 'planet';
      const requestPlanet = async (id) =>{
      const request = await fetch(`${PLANET}/${id}`);
      const response = await request.json()
      showPlanet()
      console.log(`response`, response)
      }
      requestPlanet(id)
      
    })
  }
    
      
      

    
    
  
}

const card = new Card({
  name: 'test',
  
});
card.show()



console.log(`card`, card)




