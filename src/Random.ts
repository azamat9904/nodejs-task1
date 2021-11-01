const productNames: string[] = [
    "banana",
    "orange",
    "potato",
    "apple",
    "pineapple",
    "tomato"
];

export class Random {

    static generateObjectKeyAndValue(count = 1000){
        const result: {[key: string]: string} = {};

        for(let i = 0; i < count; i++){
            const randomProductNameKey = Math.floor(Math.random() * 5);
            const randomProductName = productNames[randomProductNameKey];

            const randomProductValue = Math.random() * 10000 + 1;
            const productPrice = Math.floor(randomProductValue).toString();

            const generatedKey = randomProductName + i.toString();
            result[generatedKey] = productPrice;
        }

        return result;
    }
}