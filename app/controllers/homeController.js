const gravatar = require('gravatar')
const moment = require('moment')

const Subscriber = require('../models/subscriber')

exports.index = async (req, res) => {
  const subscribers = await Subscriber.find().sort({ _id: -1 })
  const { success } = req.query

  subscribers.forEach(subscriber => {
    const nameParts = subscriber.name.split(' ')
    let name = nameParts[0]
    if (nameParts[1]) name += ` ${nameParts[1][0]}.`

    subscriber.name = name
    subscriber.gravatar = gravatar.url(subscriber.email)
  })

  res.render('home', { subscribers, success, moment })
}
