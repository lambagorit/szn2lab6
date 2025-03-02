declare function froze(constructor: Function): void;
declare function toUpper(target: any, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare enum Documents {
    passport = "\u043F\u0430\u0441\u043F\u043E\u0440\u0442",
    license = "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430",
    medInsurance = "\u043C\u0435\u0434. \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430",
    birthRegistration = "\u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
}
interface Owner {
    name: string;
    surname: string;
    patronymic: string;
    birthday: Date;
    document: Documents;
    docxNum: number;
    showInfo(): void;
}
declare class OwnerClass implements Owner {
    private Surname;
    private Name;
    private Patronumic;
    private DateOfBirth;
    private Document;
    private DocxNum;
    constructor(surname: string, name: string, patronymic: string, dateOfBirth: Date, document: Documents, docxNum: number);
    get surname(): string;
    set surname(surname: string);
    get name(): string;
    set name(name: string);
    get patronymic(): string;
    set patronymic(patronymic: string);
    get birthday(): Date;
    set birthday(dateOfBirth: Date);
    get document(): Documents;
    set document(document: Documents);
    get docxNum(): number;
    set docxNum(docxNum: number);
    showInfo(): void;
}
interface Vehicle {
    mark: string;
    model: string;
    releaseDate: number;
    vinNum: number;
    registrationNum: number;
    ownerData: Owner;
    showInfo(): void;
}
declare class VehicleClass implements Vehicle {
    private Mark;
    private Model;
    private ReleaseDate;
    private VinNum;
    private RegistrationNum;
    private OwnerData;
    constructor(mark: string, model: string, releaseDate: number, vinNum: number, registrationNumber: number, owner: Owner);
    get mark(): string;
    set mark(mark: string);
    get model(): string;
    set model(model: string);
    get releaseDate(): number;
    set releaseDate(releaseDate: number);
    get vinNum(): number;
    set vinNum(vinNum: number);
    get registrationNum(): number;
    set registrationNumber(registrationNum: number);
    get ownerData(): Owner;
    set ownerData(ownerData: Owner);
    showInfo(): void;
}
declare enum BodyType {
    sedan = "\u0421\u0435\u0434\u0430\u043D",
    hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A ",
    coupe = "\u041A\u0443\u043F\u0435",
    suv = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
    pickup = "\u041F\u0438\u043A\u0430\u043F",
    wagon = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B"
}
declare enum CarType {
    A = "\u041E\u0441\u043E\u0431\u043E \u043C\u0430\u043B\u044B\u0439 ",
    B = "\u041C\u0430\u043B\u044B\u0439",
    C = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
    D = "\u0411\u043E\u043B\u044C\u0448\u043E\u0439",
    E = "\u0412\u044B\u0441\u0448\u0438\u0439"
}
interface Car extends Vehicle {
    typeOfBody: BodyType;
    typeOfCar: CarType;
}
declare class CarClass extends VehicleClass implements Car {
    private TypeOfBody;
    private TypeOfCar;
    constructor(mark: string, model: string, releaseDate: number, vinNum: number, registrationNum: number, owner: Owner, typeOfBody: BodyType, typeOfCar: CarType);
    get typeOfBody(): BodyType;
    set typeOfBody(typeOfBody: BodyType);
    get typeOfCar(): CarType;
    set typeOfCar(typeOfCar: CarType);
    showInfo(): string;
}
declare const owner: Owner;
declare const car1: Car;
