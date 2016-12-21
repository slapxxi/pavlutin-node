function pageNotFound(templateName='404') {
  return function(req, res) {
    res.status(404).render(templateName);
  };
}

module.exports = {pageNotFound};
