interface DatabaseItem {
    text: string;
    readonly user: string;
    readonly added: string;
    // color: string;
}

type TDatabase = Array<DatabaseItem>;

const defaultData: TDatabase = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date().toLocaleDateString("sv-SE"), // Using swedish locale because it fits datetime attribute in tag <time>
        // color: "#36c9ceff",
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date().toLocaleDateString("sv-SE"),
        // color: "#b81f1fff",
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
}

export default new Database();
