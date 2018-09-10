import { shallowMount } from '@vue/test-utils'
import VueTable from '../src/components/Index.vue'

describe('Index.vue', () => {
  it('Rendered', () => {
    const wrapper = shallowMount(VueTable)
    expect(wrapper.find('div').exists()).to.equal(true)
  })
})
