ScrollNav = React.createClass
  propTypes:
    anchors: React.PropTypes.array

  getInitialState: ->
    active: 0

  componentDidMount: ->
    @props.anchors ?= document.querySelectAll("[id]").map (i, e) -> e.getAttribute("id")
    window.addEventListener "scroll", @onscroll
    @onscroll()

  componentWillUnmount: ->
    window.removeEventListener "scroll", @onscroll

  onscroll: ->
    viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight or 0)
    closest = Number.MAX_SAFE_INTEGER
    closestIndex = 0
    for anchor, i in @props.anchors
      y = document.getElementById(anchor.id).getBoundingClientRect().top
      diffY = y
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
    fullsize = "fullsize" of @props
    centered = "centered" of @props
    smooth = "smooth" of @props
    classNames = ["scroll-navbar"]
    if vertical
      classNames.push "vertical"
    else
      classNames.push "horizontal"
    if fullsize
      classNames.push "fullsize"
    else if centered
      classNames.push "centered"
    onClick = null
    if smooth
      onClick = (id) ->
        $("html,body").animate
          scrollTop: $("#" + id).offset().top
        , 500
        return false
    <nav className={classNames.join " "}>
    {
      for anchor, i in anchors
        <a key={anchor.id} onClick={onClick?.bind this, anchor.id} href="##{anchor.id}" className={if active is i then "active"}>
          <span>{anchor.title}</span>
        </a>
    }
    </nav>