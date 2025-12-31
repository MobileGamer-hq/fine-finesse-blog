import LargePost from "../../components/post/LargePost.tsx";
import '../../styles/home.css'
import '../../styles/Home/Featured.css';

function Featured() {
    return (
        <section className="Featured">
            <div className="header-container">
                <h2 className="title">Featured Article</h2>
                <p>Editors Pick</p>
            </div>

            <div className="featured-article">
                <LargePost />
            </div>
        </section>
    );
}

export default Featured;