import ThreadItem from "./ThreadItem";
import PropTypes from 'prop-types';

function ThreadList ({threads}) {
    return (
        threads.map((thread) => (
            <ThreadItem key={thread.id} {...thread} />
        ))
    )
}
ThreadList.propTypes = {
    threads: PropTypes.array.isRequired,
  };
  
export default ThreadList