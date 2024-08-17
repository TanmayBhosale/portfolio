import { BlogMeta } from "@/models/NotionModels";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const client = new Client({
  auth: process.env.NOTION_KEY,
});

export async function getAllBlogsMeta(){
    try{
        const blogsMeta = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE_BLOGS}`,
            filter:{
                property: "published",
                checkbox:{
                    equals: true
                }
            },
            sorts: [
                {
                    property: "publishing date",
                    direction: "descending"
                }
            ]
        })

        return blogsMeta.results.map(r => getBlogMeta(r))
    }catch(e){
        console.log(e)
        Promise.reject(e)
    }
}

function getBlogMeta(result: any){
    const blogMeta: BlogMeta = {
        id : result.id,
        title : result.properties.Name.title.map((t:any) => t.plain_text).join(""),
        createdAt : result.created_time,
        coverImage : result.cover === null ? null : result.cover[result.cover.type].url,
        slug : result.properties.slug.formula.string,
        publishingDate : result.properties["publishing date"].date.start,
        published : result.properties.published.checkbox,
        tags : result.properties.tags.multi_select.length > 0 ? result.properties.tags.multi_select.map((tag:any) =>tag) : [],
        description : result.properties.description.rich_text.map((rt:any) => rt.plain_text).join(""),
    }

    return blogMeta
}