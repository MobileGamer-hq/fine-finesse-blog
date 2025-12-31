
import type {Post} from "../../types/post.ts";
import '../../styles/components/posts.css';
import { CiCalendar } from "react-icons/ci";
import IMG from '../../assets/example2.jpg'
import Tag from "../Tag.tsx";
import {ReadMoreButton} from "../Buttons.tsx";


const examplePost: Post = {
    id: '1',
    title: 'The Art of Polite Conversation',
    content: `Mastering polite conversation is key to making a great impression. 
Always listen actively, avoid interrupting, and respond thoughtfully to what others say. 
Remember to use courteous language, maintain eye contact, and be mindful of your tone. 
Small gestures, like saying "please" and "thank you," go a long way in demonstrating respect and building meaningful connections.`,
    tags: [
        "Etiquette", "Politeness", "Communication", "Social-skills"
    ],
    slug: "polite-conversation",
    createdAt: Date.now(),
    img: IMG,
};
function LargePost() {
    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '…';
    };

    return (
        <div className='large-post'>
            <div className='image-container'>
                <img src={IMG} alt={examplePost.title} />
            </div>
            <div className='content-container'>
                <div className='content-header'>
                    <Tag tag={examplePost.tags[0]} />
                    <div className='content-date'>
                        <CiCalendar />
                        <p>{new Date(examplePost.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>

                <div>
                    <div className='content-title'>{examplePost.title}</div>
                    <p className='content-content'>
                        {truncateText(examplePost.content, 250)}
                    </p>
                </div>

                <div className='content-footer'>
                    <div className='profile'>
                        <div className='profile-initials'>LK</div>
                        <div className='profile-text'>
                            <p className='profile-name'>Louise Kingsley-Duru</p>
                            <p className='profile-title'>Founder & Etiquette Expert</p>
                        </div>
                    </div>

                    <ReadMoreButton />
                </div>
            </div>
        </div>
    );
}


export default LargePost;