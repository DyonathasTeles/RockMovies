const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const authConfig = require("../config/auth")
const { compare } = require("bcryptjs")
const { sign } = require("jsonwebtoken")

class SessionsController {
  async create(request, response) {
      const { email, password } = request.body

      const user = await knex("users").where({email}).first()

      if (!user) {
        throw new AppError(" Wrong email or password ", 401)
      }
      
      const passwordMatched = await compare(password, user.password)

      if (!passwordMatched) {
        throw new AppError(" Wrong email or password ", 401)
      }

      const { secret, expiresIn } = authConfig.jwt
      const toke = sign({}, secret, {
        subject: String(user.id),
        expiresIn
      })

      return response.json({user, toke})
  }
}

module.exports = SessionsController