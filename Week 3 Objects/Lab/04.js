function factory(library, orders) {
    //iterate over orders
    //copy order template
    //compose methods by part lis
    let result = [];

    for (let oder of orders) {
        const composed = Object.assign({}, oder.template);

        for(let part of oder.parts){
            composed[part] = library[part];
        }

        result.push(composed);
    }
    return result;
}


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];
const products = factory(library, orders);
console.log(products);