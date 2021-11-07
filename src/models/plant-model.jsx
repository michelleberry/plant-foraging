
export class Plant {
    name;
    season;
    location;
    description;
    eat;
    benefits;
    warnings;

    constructor(name, season, location, description, eat, benefits, warnings){
        this.name = name; 
        this.season = season; 
        this.location = location;
        this.description = description;
        this.eat = eat;
        this.benefits = benefits;
        this.warnings = warnings;
    }
    
}

export const standard_plants = [
    new Plant("Dandelion", "spring", "north america", "Dandelion, weedy perennial herb of the genus Taraxacum of the family Asteraceae, native to Eurasia but widespread throughout much of temperate North America.", "you can eat the entire thing", "helps digestion", ["warning 1", "warning 2"]),
    new Plant("Blueberry", "spring", "north america", "Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.", 
    "you can eat the berries but you probably shouldn't eat the stem", "sooo tastie", [])
]