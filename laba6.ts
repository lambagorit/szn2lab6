function froze(constructor: Function) {
    console.log("конструктор заморожен");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function toUpper(target: any, propertyName: string, descriptor: PropertyDescriptor){
    let orig = descriptor.value;
    descriptor.value = function(){ 
        let res: string = orig.apply(this); 
        return res.toUpperCase();
    }
    return descriptor;
}
enum Documents{
    passport = "паспорт",
    license = "водительские права",
    medInsurance = "мед. страховка",
    birthRegistration = "свидетельство о рождении"
}
interface Owner{
    name: string; 
    surname: string;
    patronymic: string;
    birthday: Date;
    document: Documents;
    docxNum: number;

    showInfo(): void;
}

class OwnerClass implements Owner{
    private Surname: string;
    private Name: string;
    private Patronumic: string;
    private DateOfBirth: Date;
    private Document: Documents;
    private DocxNum: number;

    constructor(surname: string, name: string, patronymic: string, dateOfBirth: Date, document: Documents, docxNum: number) {
        this.Surname = surname;
        this.Name = name;
        this.Patronumic = patronymic;
        this.DateOfBirth = dateOfBirth;
        this.Document = document;
        this.DocxNum = docxNum;
    }


    get surname(): string {
        return this.Surname;
    }
    set surname(surname: string) {
        this.Surname = surname;
    }

    get name(): string {
        return this.Name;
    }
    set name(name: string) {
        this.Name = name;
    }

    get patronymic(): string {
        return this.Patronumic;
    }
    set patronymic(patronymic: string) {
        this.Patronumic = patronymic;
    }

    get birthday(): Date {
        return this.DateOfBirth;
    }
    set birthday(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth;
    }

    get document(): Documents {
        return this.Document;
    }
    set document(document: Documents) {
        this.Document = document
    }

    get docxNum(): number {
        return this.DocxNum;
    }
    set docxNum(docxNum: number) {
        this.DocxNum = docxNum;
    }

    showInfo(): void {
        console.log(this.Surname, this.Name, this.DateOfBirth, this.Document, this.DocxNum, this.Patronumic);
    }
}

interface Vehicle{
    mark: string;
    model: string;
    releaseDate: number;
    vinNum: number;
    registrationNum: number;
    ownerData: Owner;
    showInfo(): void;
}
class VehicleClass implements Vehicle{
    private Mark: string;
    private Model: string;
    private ReleaseDate: number;
    private VinNum: number;
    private RegistrationNum: number;
    private OwnerData: Owner;

    constructor(mark: string, model: string, releaseDate: number, vinNum: number, registrationNumber: number, owner: Owner){
        this.Mark = mark;
        this.Model = model;
        this.ReleaseDate = releaseDate;
        this.VinNum = vinNum;
        this.RegistrationNum = registrationNumber;
        this.OwnerData = owner;
    }
    get mark(): string {
        return this.Mark;
    }
    set mark(mark: string) {
        this.Mark = mark;
    }

    get model(): string {
        return this.Model;
    }
    set model(model: string) {
        this.Model = model;
    }

    get releaseDate(): number {
        return this.ReleaseDate;
    }
    set releaseDate(releaseDate: number) {
        this.ReleaseDate = releaseDate;
    }

    get vinNum(): number {
        return this.VinNum;
    }
    set vinNum(vinNum: number) {
        this.VinNum = vinNum;
    }

    get registrationNum(): number {
        return this.RegistrationNum;
    }
    set registrationNumber(registrationNum: number) {
        this.RegistrationNum = registrationNum
    }

    get ownerData(): Owner {
        return this.OwnerData;
    }
    set ownerData(ownerData: Owner) {
        this.OwnerData = ownerData;
    }

    showInfo(): void{
        console.log(this.Mark, this.Model, this.VinNum, this.OwnerData, this.RegistrationNum, this.ReleaseDate);
    }
}
enum BodyType {
    sedan = "Седан",
    hatchback = "Хэтчбек ",
    coupe = "Купе",
    suv = "Внедорожник",
    pickup = "Пикап",
    wagon = "Универсал"
};
enum CarType {
    A = "Особо малый ",
    B = "Малый",
    C = "Средний",
    D = "Большой",
    E = "Высший"
}
interface Car extends Vehicle{
    typeOfBody: BodyType;
    typeOfCar: CarType;
}
@froze
class CarClass extends VehicleClass implements Car{
    private TypeOfBody: BodyType;
    private TypeOfCar: CarType;
    constructor(mark: string, model: string, releaseDate: number, vinNum: number, registrationNum: number, owner: Owner, typeOfBody: BodyType, typeOfCar: CarType){
        super(mark, model, releaseDate, vinNum, registrationNum, owner);
        this.TypeOfBody = typeOfBody;
        this.TypeOfCar = typeOfCar;
    }
    get typeOfBody(): BodyType {
        return this.TypeOfBody;
    }
    set typeOfBody(typeOfBody: BodyType) {
        this.TypeOfBody = typeOfBody;
    }

    get typeOfCar(): CarType {
        return this.TypeOfCar;
    }
    set typeOfCar(typeOfCar: CarType) {
        this.TypeOfCar = typeOfCar;
    }
    @toUpper
    showInfo(): string {
        return `${this.TypeOfBody} ${this.TypeOfCar} ${this.mark} ${this.model} ${this.releaseDate} ${this.registrationNumber} ${this.vinNum}`;
    }
    
}
const owner: Owner = new OwnerClass("Ермаков", "Максим", "Ильич", new Date(), Documents.passport, 1234650032);
const car1: Car = new CarClass("Audi", "Q8", 2014, 3332, 12346, owner, BodyType.suv, CarType.D);
console.log(car1.showInfo());
Object.defineProperty(CarClass, 'speed', { value: 80});