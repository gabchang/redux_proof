import React from 'react';
import Search from './containers/search.cont.jsx';
import Found from './containers/found.cont.jsx';
import { Link } from 'react-router';

const RankitPage = () => (
  <div className="rankit">
    <header>
      <h1>
        Rank movies
        <div className="pull-xs-right">
          <Link to="/myrank" className="small btn-link">My rank</Link>
        </div>
      </h1>
    </header>
    <section>
      <Search/>
    </section>
    <section>
      <Found />
    </section>
  </div>
)

export default RankitPage;