
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
    new Plant("Dandelion",
                "spring", 
                "Dandelions are quite common and are one of the most found weeds in most lawns. It can be found in a myriad of environments such as the openings of deep woods, fields, rocky hillsides and even gardens and lawns.", "Dandelion, weedy perennial herb of the genus Taraxacum of the family Asteraceae, native to Eurasia but widespread throughout much of temperate North America.", 
                "you can eat the entire thing", 
                "helps digestion", 
                ["To the best of our knowledge, the information contained on this platform is accurate. Shrub Shack stresses that you do not eat any wild edible plants, herbs, weeds, trees or bushes until you have verified with your health professional that they are safe for you."]
                ),
    new Plant("Blueberry", "spring", "north america", "Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.", 
    "you can eat the berries but you probably shouldn't eat the stem", "sooo tastie", [])
]