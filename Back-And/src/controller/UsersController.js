const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")
const {hash, compare} = require("bcryptjs")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email] )

    if (checkUserExists) {
      throw new AppError("this email is already in use")
    }
    const hashedPassword  = await hash(password, 10)

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const user_id = request.user.id

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])

    if(!user) {
      throw new AppError("User not exist!")
    }

    const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])  

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError("this email is in use!")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      
      throw new AppError("you need to enter the old password")

    }

    if (password && old_password) {
      const checkPassword = await compare(old_password, user.password)

      if (!checkPassword) {
          throw new AppError("your password does not match")
      }

      user.password = await hash(password, 10 )
    }

    await database.run("UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = ?", [user.name, user.email, user.password, user_id])

    return response.status(200).json()
  }

}

module.exports = UsersController