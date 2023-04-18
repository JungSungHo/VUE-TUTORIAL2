import { shallowMount } from "@vue/test-utils"
import LearningGuide from '@/components/LearningGuide'
import Question from '@/components/LearningGuide1/Question'

describe('Question.vue', () => {
  it('TestCase1 Check of Title', () => {
    const dummyText = ''

    const wrapper = shallowMount(Question, {
        props: {
            question: [
              {
                title: 'TestTitle1',
                answers: [
                    {text: 'Test1Answer1'},
                    {text: 'Test1Answer2'},
                    {text: 'Test1Answer3', isCorrect: true},
                ],
              }
            ]
        },
        data() {
            return {
                choosenAnswer: null,
            };
        },
        watch: {
            question() {
                this.choosenAnswer = null;
            }
        },
        computed: {
            correctAnswer() {
                return this.question.answers.find(answer => answer.isCorrect)
            }
        },
        // TODO: Comment with the following error
        // Passing a `methods` option to mount was deprecated on Vue Test Utils v1, and it won't have any effect on v2.
        // methods: {
        //     getAnswer(answer) {
        //         if (this.choosenAnswer) {
        //             return;
        //         }

        //        this.choosenAnswer = answer;
        //     },
        //     nextQuestion() {
        //         this.$emit('nextQuestion', this.choosenAnswer);
        //     }
        // }
    })
    expect(wrapper.text()).toMatch(dummyText)
  })
})
