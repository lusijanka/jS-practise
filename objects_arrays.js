
// Objects - literal notation
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ['hiking', 'painting'],
};
// Objects - constructor notation
var bob = new Object(); // Note! here's semicolon!
bob.name = "Bob Smith";
bob.age = 30;

// Adding things to an object:
var friends = {};
friends.ann = {
  firstName: "Ann",
  lastName: "Polinsky",
  number: "(206) 555-5555",
  address: ['One  Way','Redmond','LA','9052']
};

// Function Age
var setAge = function (newAge) {
  this.age = newAge;
};
  // adding a new person
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
  // adding another one
var susan = new Object ();
susan.age = 25;
susan.setAge = setAge;

  // changing the age value
susan.setAge(35);
console.log(susan.age);

// Function width
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
  // here is the method to set the height / width
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};

rectangle.setWidth = function(newWidth) {
    this.width = newWidth;
};
  

  // here comes the change 
rectangle.setWidth(8);
rectangle.setHeight(6);

console.log(rectangle.width,rectangle.height);
// CREATING AN OBJECT
function Animal(name,age) {
  this.name = name;
  this.age = age;
}

var spark = new Animal("Spark", 2);
var honey = new Animal("Honey", 5);
var cactoo = new Animal("Cactoo", 15);

function Animal(name,age) {
  this.name = name;
  this.age = age;
  this.species = "dog";
}

var sally = new Animal("Sally", 3);
var holden = new Animal("Holden", 6);
console.log("Sally's species is " + sally.species + " and she is " + sally.age );
console.log("Holden's species is " + holden.species + " and he is " + holden.age);

// Looping through Array

function Person(name,age) {
  this.name = name;
  this.age = age;
}
var family = new Array ();
family[0] = new Person("alice", 40);
family[1]= new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// loop through our new array
for (var i = 0; i< family.length; i++) {
    console.log(family[i].name);
};

// Searching in Array
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Creatin a search function */
var search = function(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i<contactsLength; i++) {
        if (contacts[i].lastName===lastName) {
            printPerson(contacts[i]);
        };
    };
};
search("Johnson");
// Searching 2 
var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Suarez',
        number: '82939172',
        address: ['Wisteria Lane', '34442', 'Fairview']
        },
    steve: {
        firstName: 'Steve',
        lastName: 'Mackinsky',
        number: '8279172373',
        address: ['Collin street', '7478', 'New York, NY']
            
        }
};
var list = function (friends) {
    for (var key in friends) {
    console.log(key);
    };
};
var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstname === name) {
            console.log(friends[key]);
            return friends[key];
        } else {
            console.log('No');
            return friends[key];
        };
    };
};

//Cashregister
var cashRegister = {
    total:0,
    lastTransactionAmount:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        lastTransactionAmount = itemCost;
    },
    
    
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function() {
        this.total -= lastTransactionAmount; 
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate', 3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

