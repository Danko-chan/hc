import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let users

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return
    }
    try {
      users = await conn.db(process.env.HORIZON_NS).collection("users")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addUsers(name, email, password) {
    try {
      const usersDoc = { name: users.name,
          
          email: email,
          password: password,
            
        }

      return await users.insertOne(usersDoc)
    } catch (e) {
      console.error(`Unable to add users: ${e}`)
      return { error: e }
    }
  }


}