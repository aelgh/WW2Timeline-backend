"use strict"

var mongoose = require("mongoose"),
  Content = mongoose.model("Content")

exports.list_all_content = function (req, res) {
  Content.find({}, function (err, content) {
    if (err) res.send(err)

    res.json(content)
  })
}

exports.create_content = function (req, res) {
  var new_content_item = new Content(req.body);
  new_content_item.save(function (err, content_item) {
    if (err) res.send(err);

    res.json(content_item)
  })
}

exports.read_a_content_item = function (req, res) {
  Content.findById(req.params.id), function (err, content) {
    if (err) res.send(err);

    res.json(content)
  }
}

exports.update_a_content_item = function (req, res) {
  Content.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, content) {

    if (err) res.send(err);

    res.json(content)
  })
}

exports.delete_a_content_item = function (req, res) {
  Content.remove({
    _id: req.params.id
  }, function (err, content) {

    if (err) res.send(err);

    res.json(content)
  })
}


