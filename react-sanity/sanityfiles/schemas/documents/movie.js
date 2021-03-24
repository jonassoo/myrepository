const movie = {
    title: "Movie",
    name: "movie",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Tittel",
            description :"Dette er tittelen",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "actor",
            type: "reference",
            title: "Actor",
            to: [{type: "actor"}]
           
            
            
        }
    ],
    preview: {
        select: {
        title: "title",
        actor: "actor.title"
        },
        prepare(selection) {
            const {title, actor} = selection;
            return {
                title,
                subtitle: `Actor: ${actor}`
            }
        }
    }
}

export default movie;