import FormCreate from './component/FormCreate';
import FormEdit from './component/FormEdit';
import FormSearch from './component/FormSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <FormCreate />
          </div>
          <div className='col-lg-4 col-md-6'>
            <FormEdit />
          </div>
          <div className='col-lg-4 col-md-6'>
            <FormSearch />
          </div>
        </div>
      </div>
    </>
  )
}

export default App