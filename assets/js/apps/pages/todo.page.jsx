import Header from '../containers/todo/header.cont.jsx';
import VisibleList from '../containers/todo/visible_list.cont.jsx';
import Footer from '../containers/todo/footer.cont.jsx';

const TodoPage = () => (
  <div className="container">
    <div className="row todo-container">
      <div className="col-sm-6 col-sm-offset-3">
        <header>
          <h1>Hello, Todos</h1>
          <Header />
        </header>
        <section>
          <VisibleList />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  </div>
)

export default TodoPage;
