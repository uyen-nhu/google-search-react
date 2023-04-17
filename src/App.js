import logo from './logo.svg'
import './App.css'

function App() {
  let data = [
    {
      title: 'JavaScript Tutorial - W3School',
      description: `Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java!`,
      url: 'www.w3schools.com',
      links: [
        {
          title: 'JavaScript Introduction',
          url: 'https://www.w3schools.com/js/js_intro.asp',
        },
        {
          title: 'JS Functions',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
        {
          title: 'JavaScript Examples',
          url: 'https://www.w3schools.com/js/js_examples.asp',
        },
      ],
    },
    {
      title: 'JavaScript | MDN',
      description: `JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-className functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.`,
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JavaScript Operators',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators',
        },
        {
          title: 'JS Code',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
        },
        {
          title: 'JavaScript Meaning',
          url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
        },
      ],
    },
    {
      title: 'JavaScript - Wikipedia',
      description: `JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time.`,
      url: 'en.wikipedia.org',
      links: [
        {
          title: 'JavaScript Online',
          url: 'https://en.wikipedia.org/wiki/JavaScript#History',
        },
        {
          title: 'JS Definition',
          url: 'https://en.wikipedia.org/wiki/JavaScript#:~:text=JavaScript%20is%20a%20high%2Dlevel,functional%2C%20and%20imperative%20programming%20styles.',
        },
      ],
    },
  ]

  return (
    <div className="App">
      <nav>
        <img className="logo" src="images/google.png" />
        <form className="search">
          <input type="text" />
          <button>Search</button>
        </form>
      </nav>

      <main>
        <span className="number-of-results">{data.length} Results</span>

        <div className="search-result">
          {data.map((d) => (
            <>
              <span className="website-name">{d.url}</span>
              <a className="link" href="{}">
                <h2>{d.title}</h2>
              </a>
              <p>{d.description}</p>
              <ul>
                {d.links.map((el, i) => (
                  <li key={i}>
                    <a className="link" href="">
                      {el.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
