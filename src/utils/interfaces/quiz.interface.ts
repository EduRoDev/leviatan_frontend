export interface Quiz {
    id: number,
    title: string,
    document_id: number,
    questions: [
        {
            id: number,
            question_text: string,
            correct_option: string,
            options: [
                {
                    id: number,
                    text: string
                }
            ]
        }
    ]
}


