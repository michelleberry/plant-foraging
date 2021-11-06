
export class Plant {
    name;
    season;
    location;
    description;
    eat;
    benefits;

    constructor(name, season, location, description, eat, benefits){
        this.name = name; 
        this.season = season; 
        this.location = location;
        this.description = description;
        this.eat = eat;
        this.benefits = benefits;
    }
    
}

export const standard_plants = [
    new Plant("Dandelion", "spring", "north america", "Dandelion, weedy perennial herb of the genus Taraxacum of the family Asteraceae, native to Eurasia but widespread throughout much of temperate North America.", "you can eat the entire thing", "helps digestion")
]