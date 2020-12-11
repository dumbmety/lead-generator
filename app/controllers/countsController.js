const Count = require('../models/counts');

exports.index = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.json({ success: false, error: 'Please pass a name.' });
    }

    const item = await Count.findOneAndUpdate(
        { name },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
    );
    res.json({ success: true, name: item.name, count: item.count });
};
