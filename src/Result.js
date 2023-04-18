function Result(props) {
  return (
    <>
      <div className="search-result">
        <span className="website-name">{props.url}</span>
        <a className="link" href={props.url}>
          <h2>{props.title}</h2>
        </a>
        <p>{props.desc}</p>
        <ul>
          <li>
            <a className="link" href={props.linkUrl}>
              {props.linkTitle}
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Result
