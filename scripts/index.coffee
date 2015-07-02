App = React.createClass
  render: ->
    {contents} = @props
    anchors = contents.map (c) ->
                    id: c.id
                    title: c.title
    <div>
      <ScrollNav anchors={anchors} vertical/>
      <div id="content-container">
      {
        for c, i in contents
          <div key={i} id={c.id}>
            <h1>{c.title}</h1>
            {c.content}
          </div>
      }
      </div>
    </div>

contents = [
    id: "anchor1",
    title: "Paragraph 1",
    content: <p>!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Sed dignissim lacinia nunc. </p>
  ,  
    id: "anchor2"
    title: "Paragraph 2"
    content: <p>!!!! Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. </p>
  ,  
    id: "anchor3"
    title: "Paragraph 3"
    content: <p>!!!! <b>Sed dignissim lacinia nunc</b>. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. <b>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh</b>. Nunc feugiat mi a tellus consequat imperdiet. <b>Fusce ac turpis quis ligula lacinia aliquet</b>. Vestibulum sapien. Proin quam. Etiam ultrices. <i>Maecenas mattis</i>. Suspendisse in justo eu magna luctus suscipit. Sed lectus. </p>
  ,  
    id: "anchor4"
    title: "Paragraph 4"
    content: <p>!!!! Integer euismod lacus luctus magna. <b>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</b>. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. <i>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</i>. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. <b>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui</b>. Curabitur sit amet mauris. </p>
  ,  
    id: "anchor5"
    title: "Paragraph 5"
    content: <p>!!!! Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. </p>
]

React.render <App contents={contents}/>, document.getElementById("mycontainer")