"use server"

import { getAllBlogsMeta } from "@/helpers/notion"

export default async function Blogs(){
    const blogs = await getAllBlogsMeta()
    return(
        <div>
            These are blogs:
            {blogs?.length}
        </div>
    )
}