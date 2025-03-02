var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function froze(constructor) {
    console.log("конструктор заморожен");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function toUpper(target, propertyName, descriptor) {
    let orig = descriptor.value;
    descriptor.value = function () {
        let res = orig.apply(this);
        return res.toUpperCase();
    };
    return descriptor;
}
var Documents;
(function (Documents) {
    Documents["passport"] = "\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
    Documents["license"] = "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430";
    Documents["medInsurance"] = "\u043C\u0435\u0434. \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430";
    Documents["birthRegistration"] = "\u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
})(Documents || (Documents = {}));
class OwnerClass {
    constructor(surname, name, patronymic, dateOfBirth, document, docxNum) {
        this.Surname = surname;
        this.Name = name;
        this.Patronumic = patronymic;
        this.DateOfBirth = dateOfBirth;
        this.Document = document;
        this.DocxNum = docxNum;
    }
    get surname() {
        return this.Surname;
    }
    set surname(surname) {
        this.Surname = surname;
    }
    get name() {
        return this.Name;
    }
    set name(name) {
        this.Name = name;
    }
    get patronymic() {
        return this.Patronumic;
    }
    set patronymic(patronymic) {
        this.Patronumic = patronymic;
    }
    get birthday() {
        return this.DateOfBirth;
    }
    set birthday(dateOfBirth) {
        this.DateOfBirth = dateOfBirth;
    }
    get document() {
        return this.Document;
    }
    set document(document) {
        this.Document = document;
    }
    get docxNum() {
        return this.DocxNum;
    }
    set docxNum(docxNum) {
        this.DocxNum = docxNum;
    }
    showInfo() {
        console.log(this.Surname, this.Name, this.DateOfBirth, this.Document, this.DocxNum, this.Patronumic);
    }
}
class VehicleClass {
    constructor(mark, model, releaseDate, vinNum, registrationNumber, owner) {
        this.Mark = mark;
        this.Model = model;
        this.ReleaseDate = releaseDate;
        this.VinNum = vinNum;
        this.RegistrationNum = registrationNumber;
        this.OwnerData = owner;
    }
    get mark() {
        return this.Mark;
    }
    set mark(mark) {
        this.Mark = mark;
    }
    get model() {
        return this.Model;
    }
    set model(model) {
        this.Model = model;
    }
    get releaseDate() {
        return this.ReleaseDate;
    }
    set releaseDate(releaseDate) {
        this.ReleaseDate = releaseDate;
    }
    get vinNum() {
        return this.VinNum;
    }
    set vinNum(vinNum) {
        this.VinNum = vinNum;
    }
    get registrationNum() {
        return this.RegistrationNum;
    }
    set registrationNumber(registrationNum) {
        this.RegistrationNum = registrationNum;
    }
    get ownerData() {
        return this.OwnerData;
    }
    set ownerData(ownerData) {
        this.OwnerData = ownerData;
    }
    showInfo() {
        console.log(this.Mark, this.Model, this.VinNum, this.OwnerData, this.RegistrationNum, this.ReleaseDate);
    }
}
var BodyType;
(function (BodyType) {
    BodyType["sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A ";
    BodyType["coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["suv"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["pickup"] = "\u041F\u0438\u043A\u0430\u043F";
    BodyType["wagon"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
})(BodyType || (BodyType = {}));
;
var CarType;
(function (CarType) {
    CarType["A"] = "\u041E\u0441\u043E\u0431\u043E \u043C\u0430\u043B\u044B\u0439 ";
    CarType["B"] = "\u041C\u0430\u043B\u044B\u0439";
    CarType["C"] = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439";
    CarType["D"] = "\u0411\u043E\u043B\u044C\u0448\u043E\u0439";
    CarType["E"] = "\u0412\u044B\u0441\u0448\u0438\u0439";
})(CarType || (CarType = {}));
let CarClass = class CarClass extends VehicleClass {
    constructor(mark, model, releaseDate, vinNum, registrationNum, owner, typeOfBody, typeOfCar) {
        super(mark, model, releaseDate, vinNum, registrationNum, owner);
        this.TypeOfBody = typeOfBody;
        this.TypeOfCar = typeOfCar;
    }
    get typeOfBody() {
        return this.TypeOfBody;
    }
    set typeOfBody(typeOfBody) {
        this.TypeOfBody = typeOfBody;
    }
    get typeOfCar() {
        return this.TypeOfCar;
    }
    set typeOfCar(typeOfCar) {
        this.TypeOfCar = typeOfCar;
    }
    showInfo() {
        return `${this.TypeOfBody} ${this.TypeOfCar} ${this.mark} ${this.model} ${this.releaseDate} ${this.registrationNumber} ${this.vinNum}`;
    }
};
__decorate([
    toUpper
], CarClass.prototype, "showInfo", null);
CarClass = __decorate([
    froze
], CarClass);
const owner = new OwnerClass("Ермаков", "Максим", "Ильич", new Date(), Documents.passport, 1234650032);
const car1 = new CarClass("Audi", "Q8", 2014, 3332, 12346, owner, BodyType.suv, CarType.D);
console.log(car1.showInfo());
Object.defineProperty(CarClass, 'speed', { value: 80 });
