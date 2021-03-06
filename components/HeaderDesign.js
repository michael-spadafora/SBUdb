import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSearch);

const iconStyle = {
  marginRight:0,
  marginTop:0,
  height: 'auto',
  width: 'auto', 
  display: 'inline',
  maxWidth: '100px', 
  maxHeight: '120px'
}

const HeaderDesign = (props) => {
  return (
     <nav className="mainHead">
        <ul className="navbar-nav">
            <Link href="/"><a><img src="/static/logo.png" alt="logo" border="0" style={iconStyle}/> </a></Link>
            {/* <Link href="/"><a className="nav-link">JSM</a></Link> */}
            {/* assuming we dont need the above since our logo is now usable */}
            <Link href="/movies"><a className="nav-link">Movies</a></Link>
            <Link as= 'actors' href="/actors"><a className="nav-link">Actors</a></Link>

            { <form method="get" action="/results">
              <button type="submit"><FontAwesomeIcon icon="search" /></button>
              <input className="search" name="query" type="text" placeholder="Search" aria-label="Search"/> 
            </form>     }
        </ul>

        
        <style jsx>{`

          .mainHead {
            font-family: Arial, Helvetica, sans-serif;
            overflow: hidden;
            background-color: #333;
            padding-bottom:10px;
            margin:-8px;
          }

          .mainHead a {
            float: left;
            color: #f2f2f2;
            padding:5px;
            text-decoration: none;
            font-size: 17px;
            font-family: Arial;
            display:inline;
          }

          .nav-link {
            margin-right:20px;
          }

          .nav-link:hover {
            background-color: #484848;
            color: black;
          }

          form{
            display:inline;
          }

          input {
            float: right;
            text-decoration: none;
            font-size: 17px;
            font-family: Arial;
            height: 30px;
            background-color: #f2f2f2;
            border-radius:5px;
            padding-left:5px;
          }

          button {
            margin-right: 20px;
            float: right;
            font-size: 17px;
            height: 30px;
            font-family: Arial;
            background-color:transparent;
            border-color:transparent;
            color:white;
            cursor:pointer;
          }
      `}</style>
    </nav>
  )};

export default HeaderDesign





