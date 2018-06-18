import api from '@/services/api';

const INITIAL_STATE = {
  user: {
    birthday: {},
    credit_card: {},
  },
};

const getters = {
  GET_NAME({ user }) {
    return user.name ? [user.name, user.surname].join(' ') : '';
  },

  GET_USER({ user }) {
    return user;
  },
};

const actions = {
  async FETCH_USER({ commit }) {
    try {
      const response = await api.get('?ext');
      const { data } = response;
      commit('SET_USER', data);
    } catch (e) {
      commit('SET_USER', { birthday: {}, credit_card: {} });
    }
  },
};

const mutations = {
  SET_USER(state, data) {
    state.user = data;
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
