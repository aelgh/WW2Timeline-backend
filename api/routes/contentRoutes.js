"use strict";

module.exports = function (app) {
  var content = require("../controller/contentController");

  app.route("/content")
    .get(content.list_all_content)
    .post(content.create_content);

  app.route("/contentItem/:id")
    .get(content.read_a_content_item)
    .post(content.update_a_content_item)
    .delete(content.delete_a_content_item);

};