
import '../styles/components.css'

function Tag( {tag}: {tag: string }) {
    return (<div className='tag-container'>
        <p id='tag-text'>{tag}</p>
    </div>);
}

export default Tag;