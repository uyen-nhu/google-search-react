function Result(props) {
  return (
    <>
      <div className="search-result">
        <span className="website-name">{props.result.url}</span>
        <a className="link" href={props.result.url}>
          <h2>{props.result.title}</h2>
        </a>
        <p>{props.result.description}</p>
        <ul>
          {props.result.links.map((link, i) => (
            <li key={i}>
              <a className="link" href={link.url}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Result
