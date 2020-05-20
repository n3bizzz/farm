let names = [
    {
        type: 'Корова',
        names: ['Августина','Апрелька','Белавушка','Буренка','Варя','Вечерка','Глаша','Дунайка','Жужа','Ромашка']
    },
    {
        type: 'Кот',
        names: [ ' Изумруд',' Изюм', 'Кузя', 'Кекс', 'Симба', 'Сэм','Дарт',  'Оникс', 'Сумрак', 'Уголек']
    },
    {
        type: 'Кролик',
        names: ['Амиго', 'Амур','Багс','Геркулес','Зефир','Кокос','Оливер','Роджер','Тедди','Цезарь']
    },
    {
        type: 'Курица',
        names: ['Бэла','Дымка','Злата','Барыня','Пеппа','Искра','Чуча','Яра','Буся','Зося']
    }
];
class GenHomeAnimals {
    constructor(names) {
        this._homeAnimalsNames = names;
        this._numberOfHomeAnimals =Math.floor(Math.random()*10+1);
        this._allHomeAnimals=[];
        this._prey='';
    }
    genClasses(){ //генерируем возможный класс , имя, характеристики    животного
        return [
            {
                type: this._homeAnimalsNames[0].type,
                name: this._homeAnimalsNames[0].names[Math.floor(Math.random() * this._homeAnimalsNames[0].names.length)],
                weight: Math.floor(Math.random() * 31 + 20),//допустим изначальный вес коровы может быть от 20 до 50
                speed: Math.floor(Math.random() * 5 + 1), //допустим скорость коровы может быть от 1 до 5
                health: Math.floor(Math.random() * 41 + 30),// //допустим изначальное здоровье коровы может быть от 30 до 70
                res: Math.floor(Math.random() * 26 + 25), // //допустим изначальное кол-во ресурсов у  коровы может быть от 25 до 50
                onFarm: true
            }
        ,
            {
                type: this._homeAnimalsNames[1].type,
                name: this._homeAnimalsNames[1].names[Math.floor(Math.random() *this._homeAnimalsNames[1].names.length)],
                weight: Math.floor(Math.random() * 5 + 3),//допустим изначальный вес кота может быть от 3 до 7
                speed: Math.floor(Math.random() * 8 + 5), //допустим скорость кота может быть от 5 до 12
                health: Math.floor(Math.random() * 6 + 10),// //допустим изначальное здоровье кота может быть от 10 до 15
                res: 0,
                onFarm: true
            }
        ,
            {
                type: this._homeAnimalsNames[2].type,
                name: this._homeAnimalsNames[2].names[Math.floor(Math.random() * this._homeAnimalsNames[2].names.length)],
                weight: Math.floor(Math.random() * 11 + 5),//допустим изначальный вес кролика может быть от 5 до 15
                speed: Math.floor(Math.random() * 11 + 15), //допустим скорость кролика  может быть от 15 до 25
                health: Math.floor(Math.random() * 6 + 7),// //допустим изначальное здоровье кролика может быть от 7 до 12
                res: 0,
                onFarm: true
            }
        ,
            {
                type: this._homeAnimalsNames[3].type,
                name: this._homeAnimalsNames[3].names[Math.floor(Math.random() * this._homeAnimalsNames[3].names.length)],
                weight: Math.floor(Math.random() * 4 + 1),//допустим изначальный вес курицы может быть от 1 до 4
                speed: Math.floor(Math.random() * 4 + 1), //допустим скорость курицы может быть от 1 до 4
                health: Math.floor(Math.random() * 6 + 2),// //допустим изначальное здоровье курицы может быть от 2 до 7
                res: Math.floor(Math.random() * 16 + 10), // //допустим изначальное кол-во ресурсов у  курицы может быть от 10 до 25
                onFarm: true,
        }
    ];
    }
    isAnyAnimalOnFarm(){
        for(let elem of this._allHomeAnimals)
            if(elem.onFarm)return true;
            return false;
    }
    getPrey(){
        do{
            this._prey=this._allHomeAnimals[Math.floor(Math.random()*this._allHomeAnimals.length)];
        }while(!this._prey.onFarm);
    }
    nameDel (animal) { //что бы имена не повторялиcь
        this._homeAnimalsNames.forEach((elem,index,arr)=>{
            if(elem.names.includes(animal.name)) arr[index].names.splice(elem.names.indexOf(animal.name),1);
        });
    }
    genAnimal(){ // генерируем животное
        return this.genClasses()[Math.floor(Math.random()*4)];
    }
    getAnimals () { // получаем всех сгенерированных  животных в массив
        for(let i=0;i<this._numberOfHomeAnimals;i++)
            {
                this._allHomeAnimals[i]=this.genAnimal();
                this.nameDel(this._allHomeAnimals[i]);
                this._allHomeAnimals[i].startHealth=this._allHomeAnimals[i].health;//сохранили начальное значение здоровья у каждого животного
            }
    }
}
class WildAnimals {
    constructor() { // генерируем диких зверей
        this._allWildAnimals = [
            {
                type: 'Волк',
                name: 'Лютый',
                weight: Math.floor(Math.random() * 11 + 15),//допустим вес волка может быть от 15 до 25
                speed: Math.floor(Math.random() * 16 + 15),//допустим скорость волка может быть от 15 до 30
                strength: Math.floor(Math.random() * 14 + 12),////допустим сила волка может быть от 12 до 25
                goneCount: 0
            },
            {
                type: 'Медведь',
                name: 'Косолапый',
                weight: Math.floor(Math.random() * 46 + 25),//допустим вес медведя может быть от 25 до 70
                speed: Math.floor(Math.random() * 21 + 5),//допустим скорость медведя может быть от 5 до 25
                strength: Math.floor(Math.random() * 36 + 25),//допустим сила медведя может быть от 25 до 60
                goneCount: 0
            },
            {
                type: 'Лисица',
                name: 'Хитрая',
                weight: Math.floor(Math.random() * 9 + 7),//допустим вес лисицы может быть от 7 до 15
                speed: Math.floor(Math.random() * 9 + 7),//допустим скорость лисицы может быть от 7 до 15
                strength: Math.floor(Math.random() * 10 + 4),//допустим сила лисицы может быть от 4 до 13
                goneCount: 0
            }
        ];
        this._hunter='';
    }
    goneHunter(kicked){
        if(kicked) {
            this._hunter.goneCount++;
            console.log(`Фермер прогнал ${this._hunter.type} ${this._hunter.name}, осталось попыток ${3 - this._hunter.goneCount}`)
            return true;
        }
        return false;
    }
    getHunter() { //генерируем нападающего зверя
        do {
            this._hunter = this._allWildAnimals[Math.floor(Math.random() * 3)];
        } while (this._hunter.goneCount === 3);
        console.log(`К ферме приближается ${this._hunter.type} ${this._hunter.name}`);
    }
    hunt(prey) {
        console.log(`${this._hunter.type} ${this._hunter.name} \n скорость ${this._hunter.speed}  сила ${this._hunter.strength} \n Напал на: \n ${prey.type}  ${prey.name} \n скорость ${prey.speed} здоровье ${prey.health}`);
        if (this._hunter.speed<= prey.speed) {
            console.log(`${prey.type}  ${prey.name}  сбежал от ${this._hunter.type}  ${this._hunter.name}`);
            return;
    }
        if(this._hunter.strength >= prey.health){
        console.log(`${this._hunter.type}  ${this._hunter.name} съел  ${prey.type}  ${prey.name}`);
        prey.onFarm=false;
        return;
    }
    prey.health-=this._hunter.strength;
    console.log(`${this._hunter.type}  ${this._hunter.name} ранил ${prey.type}  ${prey.name} \n осталось здоровья ${prey.health}`);
    }
}
class Farmer{
    constructor() {
        this._res=5;
    }
    getRes(animal) {
        if(!animal.onFarm)return;
        if (animal.res) {
            this._res++;
            animal.res--;
            console.log(`Фермер собрал ресурсы с ${animal.type} ${animal.name} \n у ${animal.type} ${animal.name} осталось ${animal.res} \n у Фермера ${this._res} \ `);
        } else console.log(`У  ${animal.type} ${animal.name} нет ресурсов`);
    }
    eatAnimal(animal){
        this._res+=animal.weight;
        animal.onFarm=false;
        console.log(`Фермер съел ${animal.type} ${animal.name}, стало ресурсов ${this._res}`);
    }
    kickHunter(){
         return Math.floor(Math.random()*2);
    }
    feedAnimal(animal){
        if(!animal.onFarm) return;
        if(animal.health===animal.startHealth) {
            console.log(`У ${animal.type} ${animal.name} здоровье полное`);
            return;
        }
        animal.health++;
        console.log(`Здоровье ${animal.type} ${animal.name} пополнено . =${animal.health}`);
    }
    haveNotRes(){
        if(this._res<2)
            return true;
        return false;
    }
}
class Farm {
    constructor() {
        this._dayIndex=1;
    }
    passDay(animals, hunter, farmer) {
        console.log(`\n ДЕНЬ ${this._dayIndex}`);
        this._dayIndex++;
        this.info(animals,hunter,farmer);
        console.log(`\n События за день`);
        if (farmer.haveNotRes()) {
            console.log(`У фермера не осталось ресурсов на содержание фермы. Конец.`);
            return false;
        }
        farmer._res -= 2;
        console.log(`Фермер тратит 2 ресурса на содержание фермы. отсалось ${farmer._res}`);
        if (animals._allHomeAnimals.every((elem)=>!elem.onFarm)) {
            console.log(`На ферме не осталось живых животных`);
            return true;
        }
        if (hunter._allWildAnimals.every((elem)=>elem.goneCount===3)){
            console.log('Больше не осталось диких животных которые могут нападать, все были прогнаны по 3 раза');}
        else {
            hunter.getHunter();
            if (!hunter.goneHunter(farmer.kickHunter())) {
                animals.getPrey();
                hunter.hunt(animals._prey);
            }
        }
        for (let i = 0; i < animals._allHomeAnimals.length; i++) {
            farmer.feedAnimal(animals._allHomeAnimals[i]);
        }
        if (animals._allHomeAnimals.every((elem)=>!elem.res)) {
            console.log(`Животных с ресурсами на ферме не осталось прийдется кого-то съесть`);
            if(!animals._allHomeAnimals.some((elem)=> (elem.type==='Корова' && elem.onFarm) || (elem.type === 'Кролик' && elem.onFarm) || (elem.type === 'Курица' && elem.onFarm))){
                console.log('Животных пригодных в пищу больше не осталось');
                return true;
            }
            for(let i=0; i<animals._allHomeAnimals.length;i++) {
                do {
                    animals.getPrey();
                }while(animals._prey.type!=='Корова' && animals._prey.type!=='Курица' && animals._prey.type!=='Кролик');
                farmer.eatAnimal(animals._prey);
                return true;
            }
        }
        for (let i = 0; i < animals._allHomeAnimals.length; i++)
            if(animals._allHomeAnimals[i].type === 'Корова' || animals._allHomeAnimals[i].type === 'Курица')
                farmer.getRes(animals._allHomeAnimals[i]);
        return true;
    }
    info(animals,hunter,farmer) {
        animals._allHomeAnimals.forEach((elem)=> {
            if (!elem.onFarm) console.log(`${elem.type} ${elem.name} съеден(а) или убит(а) диким зверем`);
            else console.log(`${elem.type} ${elem.name} на ферме, осталось ресурсов ${elem.res}, здоровье ${elem.health}`);
        });
        hunter._allWildAnimals.forEach((elem)=>console.log(`у ${elem.type} ${elem.name} осталось попыток напасть ${3-elem.goneCount}`));
        console.log(`Ресурсов у фермера ${farmer._res}`);
    }
}
let animals = new GenHomeAnimals(names);
animals.getAnimals();
let hunter = new WildAnimals();
let farmer = new Farmer();
let farm = new Farm();
while(farm.passDay(animals, hunter, farmer)) {}