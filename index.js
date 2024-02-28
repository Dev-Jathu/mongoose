const mongoose = require("mongoose");
const model = require("./module/User");
const payment = require("./module/Payment");
const product1 = require("./module/Product")
const course = require("./module/Course")
const URL = "mongodb+srv://jathu123:jathu123@assign.hwoanlc.mongodb.net/?retryWrites=true&w=majority&appName=Assign"

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to the database")
    })
    .catch((error) => {
        console.log("connection Failed", error)
    });

//user details added

const userdetail = new model({
    UserId: "uki011",
    Name: "Thuvaragan",
    Age: 23,
    Course: "Full-stack-web-Developper",
    Email: "thuvaraganthuva@gmail.com",
    District: "Vavuniya"

});
userdetail.save()
    .then(() => {
        console.log("user saved ");
    })
    .catch((error) => {
        console.log("Error user not saved", error)
    });

//course detail added

const course_details = new course({
    CourseId: "cid011",
    CourseName: "java",
    CourseFee: 50000,
    CourseDuration: "3 months",
});

course_details.save()
    .then(() => {
        console.log("Course details saved");
    })
    .catch((error) => {
        console.log("Not Save your course details", error);
    });

//product details

const product_details = new product1({
    ProductID: "proID012",
    ProductName: "Mouse",
    ProductCat: "electronic",
    ProductPrice: 2000,
    ProductQuantity: "1",
});
product_details.save()
    .then(() => {
        console.log("product details saved")
    })
    .catch((error) => {
        console.log("product details Not saved", error)
    });

// payment details

const paid = new payment({
    PaymentID: "PayId014",
    PaymentMethod: "cash on delivery",
    Fee: 5000,

});
paid.save()
    .then(() => {
        console.log("payment detail saved ");
    })
    .catch((error) => {
        console.log("Error payment not saved", error)
    });

