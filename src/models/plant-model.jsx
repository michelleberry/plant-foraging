
export class Plant {
    name;
    season;
    location;

    constructor(name, season, location){
        this.name = name; 
        this.season = season; 
        this.location = location;
    }
    
}

export const standard_plants = [
    new Plant("grass", "year-round", "canada"),
    new Plant("tree", "winter", "america"),
]