const { Thought, User } = require("../models");

const thoughtController = {

  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }, 

  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.id },
          { $push: { thoughts: _id } },
          { new: true }
        );
      }).then(
        dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: "No user found with this userId."});
            return;
          }
          res.json(dbUserData);
        }
      )
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id."});
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }

}

module.exports = thoughtController;
