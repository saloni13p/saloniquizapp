/* export class Quiz {
    constructor(public question_id: number,
        public question: string,
        public answers: Answers[]) { }
}

export class Answers {
    constructor(public answer_id: number,
        public answer: string,
        public is_correct: boolean) { }
} */

export class Quiz {
    constructor(
        public question_id: number,
        public question: string,
        public answers: Answers[]) { }
}

export class Answers {
    constructor(
        public name: string,
        public correct: boolean
       ) { }
}