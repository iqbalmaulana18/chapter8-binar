import FormCreate from './component/FormCreate';
import FormEdit from './component/FormEdit';
import FormSearch from './component/FormSearch';

function App() {
  return (
    <>
      <div className='container'>
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