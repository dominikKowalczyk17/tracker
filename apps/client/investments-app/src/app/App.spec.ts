import { describe, it, expect } from 'vitest';
import router from '../router';
import { mount } from '@vue/test-utils';
import App from './RemoteInvestmentsApp.vue';

describe('App', () => {
  it('renders properly', async () => {
    const wrapper = mount(App, { global: { plugins: [router] } });
    await router.isReady();
    expect(wrapper.text()).toContain('Welcome @tracker/investments-app 👋');
  });
});
