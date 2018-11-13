const Task = require("../models/task.model");

exports.task_create = function(req, res) {
  const task = new Task({
    name: req.body.name,
    done: req.body.done
  });

  task.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(task);
  });
};

exports.task_details = function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (err) return next(err);
    res.send(task);
  });
};

exports.tasks_details = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) return next(err);
    res.send(task);
  });
};

exports.task_update = function(req, res) {
  Task.findOneAndUpdate(req.params.id, { $set: req.body }, function(err, task) {
    if (err) return next(err);
  });
  Task.findById(req.params.id, function(err, task) {
    if (err) return next(err);
    res.send({
      status: "success"
    });
  });
};

exports.task_delete = function(req, res) {
  Task.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send({
      status: "success"
    });
  });
};
