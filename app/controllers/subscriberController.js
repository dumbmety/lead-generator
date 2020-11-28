const bcrypt = require('bcrypt')

const Subscriber = require('../models/subscriber')

exports.index = async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) res.redirect('/')

  const hashPassword = await bcrypt.hash(password, 10)

  Subscriber.create({ name, email, password: hashPassword })
    .then(() => res.redirect('/?success=true'))
    .catch(err => console.log(err))
}
