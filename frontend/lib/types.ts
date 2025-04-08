
export interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    mainImage?: {
        asset: {
            url: string;
        };
    };
    excerpt: string;
    categories?: string[];
}