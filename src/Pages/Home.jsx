import React from 'react';
import NavBarMini from '../Components/NavBarMini';
import PostMini from '../Components/PostMini';

function Home() {
    return (
        <>
            <section style={{

            }}>
                <div></div>
                <div>
                    <div>
                        <div>Fine Finesse</div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </section>
            <section>
                <div>Recent Posts</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "70%"
                }}>
                    <PostMini content={"some content"} title={"some title"} />
                </div>
            </section>
            <section>
                <div>Popular Post</div>
            </section>
            <section>
                <div></div>
                <div>

                </div>
            </section>
            <NavBarMini />
        </>
    )
}



export default Home