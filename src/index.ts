import { Random } from "./Random";

function main(){
    console.time("createdDate");
    const generatedObject = Random.generateObjectKeyAndValue();
    console.timeEnd("createdDate");

    console.log("\n");

    console.time("showingDate");
    Object.entries(generatedObject).forEach(([productKey, productPrice], index) => {
        if(index === 50){
            console.timeEnd("showingDate");
            console.log("\n");
        }
        console.log(productKey, productPrice);
    })
}


main();