import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
function CategoryThreads({ threads, addThread }) {
    const [title, setTitle] = useInput('');
    const [category, setCategory] = useInput('');
    const [body, setBody] = useInput('');

    function handleSubmit() {
        addThread({ title, category, body });
    }
  return (
    <>
    <div className="d-flex flex-column">
      <div className="d-grid gap-2 ">
        <button className="btn btn-dark p-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-lg"></i> Add New Threads</button>
      </div>
      <h5 className="pt-3 mb-3">Category Populer</h5>
      <div className="d-flex flex-wrap">
        {threads.map((thread) => (
          <div className="p-1" key={thread.id}>
            <button type="button" className="btn btn-dark btn-block">{thread.category}</button>
          </div>
        ))}
      </div>
    </div>

 


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Threads</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
        <div className="mb-3">
            <label htmlFor="tittle" className="form-label">Tittle</label>
            <input type="text" value={title} onChange={setTitle} className="form-control" id="tittle" />
        </div>
        <div className="mb-3">
            <label htmlFor="tittle" className="form-label">Category</label>
            <input type="text" value={category} onChange={setCategory} className="form-control" id="tittle" />
        </div>
        <div className="mb-3">
            <label htmlFor="bodyText" className="form-label">Thread</label>
            <textarea className="form-control" onChange={setBody} value={body} id="bodyText" rows="3"></textarea>
        </div>         
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
      </div>
      
    </div>
  </div>
</div>
    </>
  );
}

CategoryThreads.propTypes = {
  threads: PropTypes.array.isRequired,
  addThread : PropTypes.func.isRequired
};

export { CategoryThreads };