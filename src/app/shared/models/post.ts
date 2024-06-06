export interface Post
    {
        id: number;
        author_name: string;
        author_id: number;
        title: string;
        excerpt: string;
        team_name: string;
        team_id: number;
        timestamp: string;
        comments: number;
        likes: number;
        permission: {
            PUBLIC: string;
            AUTHOR:string;
            TEAM:string;
            AUTHENTICATED:string;
        },
        edit: boolean;
        liked:boolean;
    }
