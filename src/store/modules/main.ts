import { defineStore } from 'pinia';

interface IMainState {}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({}),
  actions: {}
});

export default useMainStore;
