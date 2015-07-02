var App, contents;

App = React.createClass({
  render: function() {
    var anchors, c, contents, i;
    contents = this.props.contents;
    anchors = contents.map(function(c) {
      return {
        id: c.id,
        title: c.title
      };
    });
    return React.createElement("div", null, React.createElement(ScrollNav, {
      "anchors": anchors,
      "vertical": true
    }), React.createElement("div", {
      "id": "content-container"
    }, (function() {
      var _i, _len, _results;
      _results = [];
      for (i = _i = 0, _len = contents.length; _i < _len; i = ++_i) {
        c = contents[i];
        _results.push(React.createElement("div", {
          "key": i,
          "id": c.id
        }, React.createElement("h1", null, c.title), c.content));
      }
      return _results;
    })()));
  }
});

contents = [
  {
    id: "anchor1",
    title: "Paragraph 1",
    content: React.createElement("p", null, "!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. ", React.createElement("b", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"), ". Sed dignissim lacinia nunc. ")
  }, {
    id: "anchor2",
    title: "Paragraph 2",
    content: React.createElement("p", null, "!!!! Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. ", React.createElement("b", null, "Vestibulum lacinia arcu eget nulla"), ". Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. ")
  }, {
    id: "anchor3",
    title: "Paragraph 3",
    content: React.createElement("p", null, "!!!! ", React.createElement("b", null, "Sed dignissim lacinia nunc"), ". Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. ", React.createElement("b", null, "Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh"), ". Nunc feugiat mi a tellus consequat imperdiet. ", React.createElement("b", null, "Fusce ac turpis quis ligula lacinia aliquet"), ". Vestibulum sapien. Proin quam. Etiam ultrices. ", React.createElement("i", null, "Maecenas mattis"), ". Suspendisse in justo eu magna luctus suscipit. Sed lectus. ")
  }, {
    id: "anchor4",
    title: "Paragraph 4",
    content: React.createElement("p", null, "!!!! Integer euismod lacus luctus magna. ", React.createElement("b", null, "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"), ". Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. ", React.createElement("i", null, "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa"), ". Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. ", React.createElement("b", null, "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui"), ". Curabitur sit amet mauris. ")
  }, {
    id: "anchor5",
    title: "Paragraph 5",
    content: React.createElement("p", null, "!!!! Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. ")
  }
];

React.render(React.createElement(App, {
  "contents": contents
}), document.getElementById("mycontainer"));
