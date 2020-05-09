interface LengthConstraint {
  length: number;
}
function getLength<T extends LengthConstraint>(data: T) {
  return data.length;
}



getLength(66666666);

getLength("SOMESTRING");

getLength([34, 45]);








import { convertToValueArray } from "./utils";

export interface Person {
  name: String;
}

const person: Person = {
  name: "Mahesh",
};

const firstPerson = convertToValueArray(person)[0];

const name = firstPerson.age;
console.log("name", name);

export const isValidString = (value: String): Boolean => {
  return value !== undefined && value.length !== 0;
};

export const isValidArrayOfPerson = (value: Array<Person>): Boolean => {
  return value !== undefined && value.length !== 0;
};

function doStuff<T, U>(name: T): T {
  // ...some process
  return name;
}
interface DataBaseConnector {
  get: Function;
  put: Function;
}
abstract class BaseLocalDataBase<T, M> {
  tableName: String;
  dataBaseInstance: DataBaseConnector;
  constructor(tableName: String) {
    this.tableName = tableName;
    this.dataBaseInstance = getDatabase<T>(tableName);
  }
  async insert(data: M): Promise<void> {
    await this.dataBaseInstance.put(data);
  }

  async get(id: Number): Promise<M> {
    return await this.dataBaseInstance.get(id);
  }

  abstract getFormattedData(): Array<M>;
}
interface ContactTable {
  name: String;
}
interface ContactModel {
  id: String;
  name: String;
  phoneNumber: String;
}
class ContactLocalDatabase<T> extends BaseLocalDataBase<
  ContactTable,
  ContactModel
> {
  getFormattedData(): ContactModel[] {
    // format and return data
  }
}

let contactsLocalDatabase = new ContactLocalDatabase("Contact table");

await contactsLocalDatabase.get(21);


const contactModel: ContactTable = {
  id: 12,
  name: 'Some name',

  ...,            // define all other values.
  ...
}
await contactsLocalDatabase.insert(contactModel);

const contactArray: Array<ContactModel> = contactsLocalDatabase.getFormattedData();



// class HttpClient extends BaseHttpClient<String, Boolean> {
//   get(id: Number): String {
//     throw new Error("Method not implemented.");
//   }
//   post(requestBody: String): Boolean {
//     throw new Error("Method not implemented.");
//   }
// }
