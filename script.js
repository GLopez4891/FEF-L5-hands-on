class stadium{
    constructor(name, city, capacity) {
        this.name = name;
        this.city = city;
        this.capacity = capacity;
    }
    describeStadium() {
        console.log(
            "the" + " " + this.name + " " + "is in" + " " + this.city + " " + "and holds" + " " + this.capacity + " " + "fans" + "." 
        );
    }
}
let stadium1 = new stadium("Mercedes Benz Arena", "Atlanta", 70000);

stadium1.describeStadium();

// The Mercedes Benz Arena is in Atlanta and holds 70000 fans.