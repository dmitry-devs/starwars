export default class LocalStorage {
    static saveStorage(name: string, data: any): void {
        const object = JSON.stringify(data);
        localStorage.setItem(name, object);
    }
    static loadStorage(name: string) {
        let object = localStorage.getItem(name);
        return object ? JSON.parse(object) : object;
    }
}
