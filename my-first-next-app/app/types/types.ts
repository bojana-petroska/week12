export interface Post {
    id: number;
    title: string;
    content?: string;
    creationDate?: Date;
    user: User 
};

export interface User {
    name: string;
    surname: string;
    age: number
}



