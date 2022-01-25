const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);  
    console.log(userController.getUsers());  
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('Find user by Email on userController', () =>{
    let user = new User(123,'Jonathan Quino','jonathan@gmail.com')
    let email = 'jonathan@gmail.com';
    userController.add(user);
    expect(userController.findByEmail(email)).toEqual(user);
  });

  test('Find user by ID on userController', () =>{
    let user = new User(123,'Jonathan Quino','jonathan@gmail.com')
    let id = 123;
    userController.add(user);
    expect(userController.findById(id)).toEqual(user);
  });
