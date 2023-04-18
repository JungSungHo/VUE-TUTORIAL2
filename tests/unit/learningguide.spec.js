import { shallowMount } from "@vue/test-utils"
import LearningGuide from '@/components/LearningGuide'

describe(`LearningGuide.vue`, () => {
  it('TestCase1 Check of Section Text', () => {
    const dummySection = 'Question 1 out of 2'
    const wrapper = shallowMount(LearningGuide, {
      data() {
        return {
          questions: [
            {
              title: 'TestTitle1',
              answers: [
                  {text: 'Test1Answer1'},
                  {text: 'Test1Answer2'},
                  {text: 'Test1Answer3', isCorrect: true},
              ],
            },
            {
              title: 'TestTitle2',
              answers: [
                {text: 'Test1Answer1'},
                {text: 'Test1Answer2'},
                {text: 'Test1Answer3', isCorrect: true},
              ],
            },
          ]
        }
      }
    })

    expect(wrapper.find('section').text()).toMatch(dummySection)
  })
})