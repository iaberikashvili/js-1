
 //მოცემულია ცვლადი, რომლის მნიშვნელობაა 100.
 //დაწერეთ if პირობა, თუ ცვლადის მბიშვნელობა ნაკლებია 50ზე დაუბეჭდოს - ნაკლებია 50ზე, 
//თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა.//

let number = 100
 if (number <50) {
    console.log("ნაკლებია 50")
 } else if(number >20) {
console.log("მეტია 20")
 } else {
    console.log("შეცდომა")
 }

 //მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ, 
//  თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let userName = "mariam"
if (userName == "mariam") {
    console.log(true);
}

//მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. 
// switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,
// ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let userName = "mariam"
switch (userName) {
    case "mariam":
        console.log(true);
        
        break;

    default:
        console.log(false);
}