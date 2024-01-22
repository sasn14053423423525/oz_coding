//classes 클래스

interface ContinentInterface {
    getContinentName():string;
}
interface CountryInterface{
    capital:string;
    getInfo():string;
}
                //해당 클래스는 인터페이스의 모든 속성과 메소드를 적용한다
class Continent implements ContinentInterface {
    #continentName:string;

    constructor(name:string){
        this.#continentName = name;
    }
    getContinentName(){
        return this.#continentName;
    }
}


class Country extends Continent implements CountryInterface{
    private name:string;
    capital:string;

    constructor(continentName:string, name:string, capital:string){
        super(continentName);
        this.name=name;
        this.capital=capital;
    }
    getInfo(){
        return `${this.name},${this.capital},${this.getContinentName()}`;
    }
}

let country = new Country("Asia", "South Korea","Seoul");
console.log(country);

country.getContinentName();

// country.name = "Korea"
// country.capital = "Seoul")

abstract class AbstractCountry{
    name: string;
    capital:string;

    constructor(name:string, capital: string){
        this.name=name;
        this.capital=capital;
    }
    setup():void{
        console.log("setup complete")
    }

    abstract displayInfo():void;
}

class MyCountry extends AbstractCountry{
    displayInfo(){
        console.log("display info called");
        
    }
}

const myCountry = new MyCountry("Germany","Berlin");