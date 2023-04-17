import logo from './logo.svg'
import './App.css'

function App() {
  let data = [
    {
      title: 'JavaScript Tutorial - W3School',
      description: `Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java!`,
      url: 'https://www.w3schools.com/js/',
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
      url: 'https://de.wikipedia.org/wiki/JavaScript',
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
        <span className="number-of-results">37 Results</span>

        <div className="search-result">
          <span className="website-name">www.w3schools.com</span>
          <a className="link" href="https://www.w3schools.com/js/">
            <h2>JavaScript Tutorial - W3School</h2>
          </a>
          <p>
            Well organized and easy to understand Web building tutorials with
            lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP,
            Python, Bootstrap, Java.
          </p>
          <ul>
            <li>
              <a
                className="link"
                href="https://www.w3schools.com/js/js_intro.asp"
              >
                JavaScript Introduction
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://www.w3schools.com/js/js_functions.asp"
              >
                JS Functions
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://www.w3schools.com/js/js_examples.asp"
              >
                JavaScript Examples
              </a>
            </li>
          </ul>
        </div>
        <div className="search-result">
          <span className="website-name">developer.mozilla.org</span>
          <a
            className="link"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=de"
          >
            <h2>JavaScript | MDN</h2>
          </a>
          <p>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-className functions. While
            it is most well-known as the scripting language for Web pages, many
            non-browser environments also use it, such as Node.js, Apache
            CouchDB and Adobe Acrobat.
          </p>
          <ul>
            <li>
              <a
                className="link"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators"
              >
                JavaScript Operator
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
              >
                JavaScript Code
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
              >
                JavaScript Meaning
              </a>
            </li>
          </ul>
        </div>
        <div className="search-result">
          <span className="website-name">en.wikipedia.org</span>
          <a className="link" href="https://de.wikipedia.org/wiki/JavaScript">
            <h2>JavaScript - Wikipedia</h2>
          </a>
          <p>
            JavaScript often abbreviated as JS, is a programming language that
            conforms to the ECMAScript specification. JavaScript is high-level,
            often just-in-time.
          </p>
          <ul>
            <li>
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/JavaScript#History"
              >
                JavaScript Online
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/JavaScript#:~:text=JavaScript%20is%20a%20high%2Dlevel,functional%2C%20and%20imperative%20programming%20styles."
              >
                JavaScript Definition
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
