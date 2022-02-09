// Defines User's class attributes
class User {
    constructor(name, profileImg, location, contactInfo) {
        this.name = name;
        this.profileImg = profileImg;
        this.location = location;
        this.contactInfo = contactInfo;
    }

    addProfileImg() {
        document.getElementById("profileImg").src = this.profileImg;
    }
}

var user1 = new User("Sofia Aguilar", "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg", "Guadalajara", "sa.aguilarvaldez@gmail.com");

user1.addProfileImg();
console.log(user1.profileImg);