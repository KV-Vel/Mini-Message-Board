import getRandomRGBa from "./utils/getRandomRGB.ts";

interface DatabaseItem {
    text: string;
    readonly user: string;
    readonly added: string;
    color: string;
}

type TDatabase = Array<DatabaseItem>;
// new Date().toLocaleDateString("sv-SE")
const defaultData: TDatabase = [
    {
        text: "Hi there!",
        user: "Amando",
        added: "2026-05-11", // Using swedish locale because it fits datetime attribute in tag <time>
        color: getRandomRGBa().join(","),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: "2026-05-11",
        color: getRandomRGBa().join(","),
    },
    {
        text: "waw",
        user: "test",
        added: "2026-05-11",
        color: getRandomRGBa().join(","),
    },
    {
        user: "great job~!",
        added: "2026-05-13",
        text: "keep it up",
        color: getRandomRGBa().join(","),
    },
    {
        user: "klaus",
        added: "2026-05-14",
        text: "this is me",
        color: getRandomRGBa().join(","),
    },
];

class Database {
    #data: TDatabase;

    constructor(inititalData: TDatabase = defaultData) {
        this.#data = inititalData;
    }

    get data() {
        return this.#data;
    }

    public addItem(payload: DatabaseItem) {
        this.#data.push(payload);
    }

    public getItemById(toFindId: string) {
        return this.#data.find((item) => item.id === toFindId);
    }
}

export default new Database();
