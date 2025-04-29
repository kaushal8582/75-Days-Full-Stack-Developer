// write a Node.js script to extract and print all valid email addresses.
// get list of user name for having invalid email address
let data = [
    { "id": 1, "name": "Alice", "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "email": "invalid-email" },
    { "id": 3, "name": "Charlie" },
    { "id": 4, "name": "Dave", "email": "dave@example.org" }
  ]
  
  
  function checkvalid(arr){
      let invalidUser =[]
      arr.forEach((item)=>{
        if()
         console.log(item.email.includes("@"))
      })
  }
  
  checkvalid(data)
  