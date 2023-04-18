import { shallowMount } from "@vue/test-utils"
import LG1_Result from '@/components/LearningGuide1/Result'

describe('Result.vue', () => {
  it('TestCase1 Check of Text', () => {
    const dummyText = "You've given 30% of correct answers. Don't give up and learn JavaScript!"
    const wrapper = shallowMount(LG1_Result, {
        props: {
          result: 30
        },
    })
    expect(wrapper.find('p').text()).toMatch(dummyText)
  })
  it('TestCase2 Check of Text', () => {
    const dummyText = "You've given 50% of correct answers. You can start your Junior Front-End Developer career at Dominos' Pizza!"
    const wrapper = shallowMount(LG1_Result, {
        props: {
          result: 50
        },
    })
    expect(wrapper.find('p').text()).toMatch(dummyText)
  })
  it('TestCase3 Check of Text', () => {
    const dummyText = "You've given 90% of correct answers. Well done! You're better than average!"
    const wrapper = shallowMount(LG1_Result, {
        props: {
          result: 90
        },
    })
    expect(wrapper.find('p').text()).toMatch(dummyText)
  })
  it('TestCase4 Check of Text', () => {
    const dummyText = "Your result: You've given 100% of correct answers. Send your CV to Google right now!"
    const wrapper = shallowMount(LG1_Result, {
        props: {
          result: 100
        },
    })
    expect(wrapper.text()).toMatch(dummyText)
  })
})
