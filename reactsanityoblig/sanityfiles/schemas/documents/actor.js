const actor = {
    title: "Actor",
    name: "actor",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Navn",
            description :"Dette er navnet",
            validation: (Rule) => Rule.required(),
        }
        
    ]
}

export default actor;