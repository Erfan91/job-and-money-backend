const mongoose = require('mongoose');

const MsgSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    receiver:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    content: [String]
      
},
{
    timestamps: true
}
)

const MsgModel = mongoose.model('Message', MsgSchema);

module.exports = MsgModel;