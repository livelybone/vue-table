import { shallowMount } from '@vue/test-utils'
import * as VueTable from '../src/index.js'

describe('Index.vue', () => {
  it('Rendered', () => {
    const wrapper = shallowMount(VueTable.TableExtend)
    expect(wrapper.find('div').exists()).to.equal(true)
  })
})
