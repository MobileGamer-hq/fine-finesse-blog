import type { Post } from '../../types/post';
import IMG from '../../assets/example2.jpg';
import { FiClock, FiCalendar } from 'react-icons/fi';
import '../../styles/home.css';
import '../../styles/Home/Latest.css';
import {OutlinedButton, ReadMoreButton} from "../../components/Buttons.tsx";
import Tag from "../../components/Tag.tsx";

type Props = {
    post: Post;
};

function ArticleCard({ post }: Props) {
    return (
        <article className="article-card">
            <div className="article-image">
                <img src={post.img} alt={post.title} />
                <div className='article-tag'>
                    <Tag tag={post.tags[0]}/>
                </div>
            </div>

            <div className="article-content">
                <div className="article-meta">
          <span>
            <FiCalendar />{' '}
              {new Date(post.createdAt).toLocaleDateString()}
          </span>
                    <span>
            <FiClock /> 5 min
          </span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.content.slice(0, 120)}...</p>

                <div className="article-footer">
                    <span className="author">By Louise Kingsley-Duru</span>
                    <div className='read-more'><ReadMoreButton/></div>
                </div>
            </div>
        </article>
    );
}


const examplePost: Post = {
    id: '1',
    title: 'The Art of Polite Conversation',
    content: `Mastering polite conversation is key to making a great impression.
Always listen actively, avoid interrupting, and respond thoughtfully.`,
    tags: ['Modern Etiquette'],
    slug: 'polite-conversation',
    createdAt: Date.now(),
    img: IMG,
};

const posts: Post[] = Array(6).fill(examplePost);

function Latest() {
    return (
        <section className="latest">
            <div className="latest-header">
                <h2 className='title'>Latest Articles</h2>
                <p>
                    Fresh insights and practical advice to help you elevate your presence
                </p>
            </div>

            <div className="latest-grid">
                {posts.map((post, index) => (
                    <ArticleCard key={index} post={post} />
                ))}
            </div>

            <div className="latest-footer">
                <OutlinedButton to='/' text='See More Articles'/>
            </div>
        </section>
    );
}

export default Latest;
