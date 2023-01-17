var score = 33;
score = 44;
score = "55";
var helon = {
    name: "hitesh",
    id: 334
};
helon = { username: "hc", id: 334 };
// function getDbId(id: number | string) {
//     //making some API calls
//     console.log("DB id is: " + id);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof (id) === "string") {
        id.toLocaleLowerCase();
    }
    else {
        id.toFixed();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = crew
