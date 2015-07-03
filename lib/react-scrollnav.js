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
      _base.anchors = document.querySelectAll("[id]").map(function(i, e) {
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
      y = document.getElementById(anchor.id).getBoundingClientRect().top;
      diffY = y;
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
    var active, anchor, anchors, centered, classNames, fullsize, i, onClick, smooth, vertical;
    active = this.state.active;
    anchors = this.props.anchors;
    vertical = "vertical" in this.props;
    fullsize = "fullsize" in this.props;
    centered = "centered" in this.props;
    smooth = "smooth" in this.props;
    classNames = ["scroll-navbar"];
    if (vertical) {
      classNames.push("vertical");
    } else {
      classNames.push("horizontal");
    }
    if (fullsize) {
      classNames.push("fullsize");
    } else if (centered) {
      classNames.push("centered");
    }
    onClick = null;
    if (smooth) {
      onClick = function(id) {
        $("html,body").animate({
          scrollTop: $("#" + id).offset().top
        }, 500);
        return false;
      };
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
          "onClick": onClick != null ? onClick.bind(this, anchor.id) : void 0,
          "href": "#" + anchor.id,
          "className": (active === i ? "active" : void 0)
        }, React.createElement("span", null, anchor.title)));
      }
      return _results;
    }).call(this));
  }
});
