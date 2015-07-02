ScrollNav = React.createClass
  propTypes:
    anchors: React.PropTypes.array

  getInitialState: ->
    active: 0

  componentDidMount: ->
    @props.anchors ?= $("[id]").map (i, e) -> e.getAttribute("id")
    window.addEventListener "scroll", @onscroll
    @onscroll()

  componentWillUnmount: ->
    window.removeEventListener "scroll", @onscroll

  onscroll: ->
    viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight or 0)
    closest = Number.MAX_SAFE_INTEGER
    closestIndex = 0
    for anchor, i in @props.anchors
      y = $("#" + anchor.id).position().top
      diffY = y - window.pageYOffset
      dist = viewportH * 0.2 - diffY
      if dist > 0 and dist < closest
        closest = dist
        closestIndex = i
    @setState
      active: closestIndex

  render: ->
    {active} = @state
    {anchors} = @props
    vertical = "vertical" of @props
    classNames = ["scroll-navbar"]
    if vertical
      classNames.push "scroll-navbar-vertical"
    <nav className={classNames.join " "}>
    {
      for anchor, i in anchors
        <a key={anchor.id} href="##{anchor.id}" className={if active is i then "active"}>
          <span>{anchor.title}</span>
        </a>
    }
    </nav>