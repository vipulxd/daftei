export interface InterfaceCollection {
    user: {
        user_id?: string,
        username?: string,
        email?: string,
        age?: number,
        avatar_id?: number,
        isVerified?: boolean,
        created_at?: string,
        updated_at?: string
    },
    story: {
        story_id ?: string,
        content ?: string,
        created_at ?: string,
        updated_at ?: string,
        published_at ?: string,
        user_id ?: string
    }

}


export interface UserNotesProps {
    user_id?: string,
    username?: string,
    email?: string,
    age?: number,
    avatar_id?: number,
    isVerified?: boolean,
    created_at?: string,
    updated_at?: string
}