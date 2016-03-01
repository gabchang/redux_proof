import React from 'react';
import R     from 'ramda';

// Poster: "http://ia.media-imdb.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg"
// Title: "Hello Ladies"
// Type: "series"
// Year: "2013–"
// imdbID: "tt2378794"

const { number, func } = React.PropTypes;

const makePageList = (pages, page) => {
  if (!pages) return [];
  var p = page || 1,
      min  = Math.max(1, p-2),
      max  = Math.min(pages, p+3),
      nums = R.range(min, (max-min < 5) ? Math.min(min+5, pages) : max ), // force 5 links (2 before, active, 2 after)
      pprev = Math.max(1, p-1),
      pnext = Math.min(pages, p+1),
      prev = { label: '◀︎', value: pprev != p && pprev  },
      next = { label: '▶︎', value: pnext != p && pnext };

  // always add 1st, last and current page
  if (page)      nums.push(page);
  if (min > 1)   nums.push(1);
  if (p < pages) nums.push(pages);

  var cur;
  return R.pipe(
    R.uniq,
    R.sort( (a,b) => (a-b) ),
    R.reduce( (accu, p) => {
      cur && (cur != p-1) && accu.push({ label: '...' });
      accu.push({ label: p, value: p, active: p == page });
      cur = p;
      return accu;
    }, []),
    R.prepend(prev),
    R.append(next)
  )(nums)
}

const Page = ({
  page: {label, value, active},
  // value,
  // active,
  onClick
}) => {
  const cls = "page-item" + (active ? ' active' : '') + ( value ? '' : ' disabled');
  return (
    <li className={cls} onClick={ () => { value && onClick(value) } }>
      <a className="page-link">{label}</a>
    </li>
  );
}

const Pager = ({
  pages=0,
  page=null,
  onClick
}) => {
  var list = makePageList(pages, page), k=0;
  return (
    <ul className="pagination">
      { R.map( p => <Page key={'pgi-'+(k++)} page={p} onClick={onClick} />, list) }
    </ul>
  )
}

Pager.propTypes = {
  pages   : number,
  page    : number,
  onClick : func
};
Pager.displayName = 'Pager.Component';

export default Pager
