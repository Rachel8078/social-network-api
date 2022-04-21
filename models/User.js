const { Schema, model } = require('mongoose');

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

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;