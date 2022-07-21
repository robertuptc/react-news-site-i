function Article(props) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>',props)
  return (
    <div>
      <hr/>
      {/* <h1>Article Component</h1> */}
      <h1>{props.title}</h1>
      {props.byline ? <h2>{props.byline}</h2> : <p>BYLINE not found</p>}
      <p>{props.created_date}</p>
      {props.image ? <img src={props.image}/> : <p>IMAGE not found</p>}
      <p>{props.abstract}</p>
    </div>
  )
}

export default Article;
