export interface Post {
    id: string;
    title: string;
    content: string;
    img: string;
    slug: string;
    createdAt: number;
    tags: string[];
}