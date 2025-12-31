import {
    FiBriefcase,
    FiHeart,
    FiTrendingUp,
    FiCoffee,
    FiBookOpen,
} from 'react-icons/fi';
import { IoSparklesOutline } from "react-icons/io5";

import '../../styles/home.css';
import '../../styles/Home/Explore.css';

const topics = [
    { icon: <IoSparklesOutline />, title: 'Modern Etiquette', count: 24 },
    { icon: <FiBriefcase />, title: 'Career Advancement', count: 18 },
    { icon: <FiHeart />, title: 'Personal Branding', count: 32 },
    { icon: <FiTrendingUp />, title: 'Professional Growth', count: 21 },
    { icon: <FiCoffee />, title: 'Lifestyle Polish', count: 15 },
    { icon: <FiBookOpen />, title: 'Self-Improvement', count: 28 },
];

function Explore() {
    return (
        <section className="explore">
            <div className="explore-header">
                <h2 className='title'>Explore Topics</h2>
                <p>Browse our curated collection of articles across different categories</p>
            </div>

            <div className="explore-grid">
                {topics.map((topic, index) => (
                    <div key={index} className="explore-card">
                        <div className="explore-icon">{topic.icon}</div>
                        <h3>{topic.title}</h3>
                        <p>{topic.count} articles</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Explore;
