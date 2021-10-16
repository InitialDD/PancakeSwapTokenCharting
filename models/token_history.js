var mongoose = require('mongoose');

var tokenHistorySchema = mongoose.Schema({

    price: {
        history: [{
            _id: false,
            time: Number, // unix timestamp
            open: Number,
            close: Number,
            high: Number,
            low: Number,
            value: Number
        }],
        records: {
            type: Number,
            default: 0
        }
    },
    token: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Token',
        required: true,
        index: true
    },
    chain: String,
    contract: String,
    name: String,
    launch_date: Number,
    created_at: Date

}, { timestamps: { createdAt: 'created_at' } });
module.exports = mongoose.model('TokenHistory', tokenHistorySchema);
