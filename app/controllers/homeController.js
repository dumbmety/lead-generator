const gravatar = require('gravatar');
const moment = require('moment');

const Subscriber = require('../models/subscriber');
const Count = require('../models/counts');

exports.index = async (req, res) => {
    const { success } = req.query;

    const count = await Subscriber.count();
    const subscribers = await Subscriber.find().sort({ _id: -1 }).limit(25);

    const clickCounts = await Count.find({});

    let totalClicks = 0;
    const clicks = {};
    clickCounts.forEach(clickCount => {
        totalClicks += clickCount.count;
        clicks[clickCount.name] = clickCount.count;
    });

    // Goals
    const subscriberGoal = 100;
    const shareGoal = 100;

    // Percent
    const subscriberPercent = Math.round((count / subscriberGoal) * 100);
    const sharePercent = Math.round((totalClicks / shareGoal) * 100);

    // Subscribers
    subscribers.forEach(subscriber => {
        const nameParts = subscriber.name.split(' ');
        let name = nameParts[0];
        if (nameParts[1]) name += ` ${nameParts[1][0]}.`;

        subscriber.name = name;
        subscriber.gravatar = gravatar.url(subscriber.email);
    });

    res.render('home', {
        clicks,
        count,
        moment,
        shareGoal,
        sharePercent,
        subscriberGoal,
        subscriberPercent,
        subscribers,
        success,
        totalClicks
    });
};
