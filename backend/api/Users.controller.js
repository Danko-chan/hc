import UsersDAO from "../dao/UsersDAO.js"

export default class UsersController {
  static async apiPostUsers(req, res, next) {
    try {
      const user_Id = req.body.restaurant_id
      const name = req.body.name
      const email = req.body.email
      const password = req.body.password
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id
      }
      const date = new Date()

      const UsersResponse = await UsersDAO.addUsers(
        user_Id,
        name,
        email,
        password,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }


}
