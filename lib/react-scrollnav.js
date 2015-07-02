var ScrollNav;

ScrollNav = React.createClass({
  propTypes: {
    anchors: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      active: 0
    };
  },
  componentDidMount: function() {
    var _base;
    if ((_base = this.props).anchors == null) {
      _base.anchors = $("[id]").map(function(i, e) {
        return e.getAttribute("id");
      });
    }
    window.addEventListener("scroll", this.onscroll);
    return this.onscroll();
  },
  componentWillUnmount: function() {
    return window.removeEventListener("scroll", this.onscroll);
  },
  onscroll: function() {
    var anchor, closest, closestIndex, diffY, dist, i, viewportH, y, _i, _len, _ref;
    viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    closest = Number.MAX_SAFE_INTEGER;
    closestIndex = 0;
    _ref = this.props.anchors;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      anchor = _ref[i];
      y = $("#" + anchor.id).position().top;
      diffY = y - window.pageYOffset;
      dist = viewportH * 0.2 - diffY;
      if (dist > 0 && dist < closest) {
        closest = dist;
        closestIndex = i;
      }
    }
    return this.setState({
      active: closestIndex
    });
  },
  render: function() {
    var active, anchor, anchors, classNames, i, vertical;
    active = this.state.active;
    anchors = this.props.anchors;
    vertical = "vertical" in this.props;
    classNames = ["scroll-navbar"];
    if (vertical) {
      classNames.push("scroll-navbar-vertical");
    }
    return React.createElement("nav", {
      "className": classNames.join(" ")
    }, (function() {
      var _i, _len, _results;
      _results = [];
      for (i = _i = 0, _len = anchors.length; _i < _len; i = ++_i) {
        anchor = anchors[i];
        _results.push(React.createElement("a", {
          "key": anchor.id,
          "href": "#" + anchor.id,
          "className": (active === i ? "active" : void 0)
        }, React.createElement("span", null, anchor.title)));
      }
      return _results;
    })());
  }
});
