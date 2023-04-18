<template>
    <div id="learningguide">
        <article>
            <header>
                <h1>How good are you at front-end development?</h1>
            </header>
            <template v-if="!isEnd">
                <section>
                    <p>Question {{ currentQuestion + 1 }} out of {{ questions.length }}</p>
                    <LG1_Question :question="questions[currentQuestion]" @nextQuestion="nextQuestion" />
                </section>
            </template>
            <template v-else>
                <LG1_Result :result="result" />
            </template>
        </article>
    </div>
</template>

<script>
import LG1_Question from './LearningGuide1/Question';
import LG1_Result from './LearningGuide1/Result';

export default {
    name: 'LearningGuide',
    components: {
        LG1_Question,
        LG1_Result
    },
    data() {
        return {
            questions: [
                {
                    title: 'What is CSS?',
                    answers: [
                        {text: 'Controlled Sporadic Spasms'},
                        {text: 'Critical Stylish Severity'},
                        {text: 'Cascading Style Sheets', isCorrect: true},
                    ],
                },
                {
                    title: 'What is not a front-end  tool?',
                    answers: [
                        {text: 'Webpack'},
                        {text: 'Tortilla', isCorrect: true},
                        {text: 'Gulp'},
                    ],
                },
                {
                    title: 'What is an HTML tag for an ordered list?',
                    answers: [
                        {text: '<ol>', isCorrect: true},
                        {text: '<list>'},
                        {text: '<ul>'},
                    ],
                },
            ],
            currentQuestion: 0,
            correctAnswers: 0,
        };
    },

    computed: {
        isEnd() {
            return this.questions.length <= this.currentQuestion;
        },

        result() {
            return Math.round((this.correctAnswers / this.questions.length) * 100);
        }
    },
    
    methods: {
        nextQuestion(answer) {
            if (answer.isCorrect) {
                this.correctAnswers++;
            }

            this.currentQuestion++;
        }
    },
};
</script>

<style scoped></style>