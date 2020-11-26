const Subscriber = require('../models/subscriber')

exports.index = (req, res) => {
  const { name, email } = req.body
  if (!name || !email) res.redirect('/')

  Subscriber.create({ name, email })
    .then(() => res.redirect('/?success=true'))
    .catch(err => console.log(err))
}
