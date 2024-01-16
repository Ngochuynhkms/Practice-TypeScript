class InfoEmployee {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        InfoEmployee.headcount++;
    }

    public static getHeadcount() {
        return InfoEmployee.headcount;
    }
}

let a = new InfoEmployee("Ngoc", "Huynh", "Tester");
let b = new InfoEmployee("David", "Doe", "Developer");
console.log(InfoEmployee.getHeadcount());
