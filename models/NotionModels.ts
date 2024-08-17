export interface BlogMeta{
    id : string,
    title : string
    createdAt : string,
    tags : Tag[]
    description : string
    published : boolean
    publishingDate : string
    slug : string
    coverImage : string | null
}

export interface Tag{
    id : string,
    name :string,
    color : string
}