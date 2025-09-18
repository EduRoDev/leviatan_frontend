export interface DocumentResponse {
    document: {
        id: number,
        title: string,
    },
    summary: {
        id: number,
        content: string,
        document_id: number
    },
    flashcards: {
        id: number,
        question: string,
        answer: string,
        document_id: number
    },
    quiz: {
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
}

export interface DocumentRequest {
    id?: number,
    title?: string,
    content?: string,
    file_path?: string,
    user_id: number
}