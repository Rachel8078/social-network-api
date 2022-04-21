const { Schema, model } = require('mongoose');

// create the User model using the UserSchema
const User = model('User', UserSchema);

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  }, 
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    },
  ], 
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
},
{
  toJSON: {
    virtuals: true
  }
}
)

module.exports = User;