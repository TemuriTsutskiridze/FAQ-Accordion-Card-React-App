interface IQuestionAnswer {
    question: string,
    answer: string
}

const DATA: IQuestionAnswer[] = [
    {
        question: "How many team members can I invite?",
        answer: "You can invite 5 people maximum, but if you purchase pro membership, you will abel to invite 15 people"
    },
    {
        question: "What is the maximum file upload size?",
        answer: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
        question: "How do I reset my password?",
        answer: "You can find that information on our website"
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can. But keep in mind that there are no refunds if you cancel it in the middle of month"
    },
    {
        question: "Do you provide additional support?",
        answer: "Yes, we do. You can find that information on our website"
    },
]

export default DATA;