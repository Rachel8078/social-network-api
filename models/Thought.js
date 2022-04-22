const { Schema, model } = require('mongoose');
// date format needed
const { format } = require('date-fns');
format(new Date(), 'MM/dd/yyyy');

const ReactionSchema = new Schema({
  // set custom id to avoid confusion with parent thought_id
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => format(createdAtVal, 'MM/dd/yyyy'),
  }
},
{
  toJSON: {
    getters: true
  }
}
)

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => format(createdAtVal, 'MM/dd/yyyy'),
  }, 
  username: {
      type: String,
      required: true
    },
    // use ReactionSchema to validate data for a reaction
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true, 
    getters: true
  }, 
  id: false
}
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;