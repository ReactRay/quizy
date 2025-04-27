import { create } from 'zustand'
import { myAxios } from '../lib/axios.js'
import toast from 'react-hot-toast'

import { questions } from '../lib/questions.js'

const BASE_URL =
  import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '/'

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isLoading: false,
  isCheckingAuth: true,
  questions: [...questions],
  currentIndex: 0,
  finishScreen: false,
  currentAnswer: null,
  score: 0,

  checkAuth: async () => {
    try {
      const res = await myAxios.get('/auth/check')

      set({ authUser: res.data })
    } catch (error) {
      console.log('Error in checkAuth:', error)
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {
    console.log(data, 'sign up')
    set({ isLoading: true })
    try {
      const res = await myAxios.post('/auth/signup', data)
      set({ authUser: res.data })
      toast.success('Account created successfully')
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isLoading: false })
    }
  },

  login: async (data) => {
    set({ isLoading: true })
    try {
      const res = await myAxios.post('/auth/login', data)
      set({ authUser: res.data })
      toast.success('Logged in successfully')
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isLoading: false })
    }
  },

  logout: async () => {
    try {
      await myAxios.post('/auth/logout')
      set({ authUser: null })
      toast.success('Logged out successfully')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true })
    try {
      const res = await myAxios.put('/auth/update-profile', data)
      set({ authUser: res.data })
      toast.success('Profile updated successfully')
    } catch (error) {
      console.log('error in update profile:', error)
      toast.error(error.response.data.message)
    } finally {
      set({ isLoading: false })
    }
  },

  fetchQuestions: async (data) => {
    set({ isLoading: true })

    try {
      const res = await myAxios.post('/quizz/generate', data)
      console.log(res.data)
      set({ questions: res.data })
    } catch (error) {
      console.log('error in fetching questions', error)
      toast.error('could not fetch questions')
    } finally {
      set({ isLoading: false })
    }
  },

  nextQuestion: () => {
    set({ currentAnswer: null })
    set((state) => {
      const isLastQuestion = state.currentIndex + 1 >= 5
      if (isLastQuestion) {
        return { finishScreen: true }
      }
      return { currentIndex: state.currentIndex + 1 }
    })
  },

  resetQuiz: () => {
    set({
      currentIndex: 0,
      finishScreen: false,
      score: 0,
    })
  },
  goToFinishScreen: () => {
    set({ finishScreen: true })
  },

  pickAnswer: (index) => {
    const { questions, currentIndex, checkAnswer } = get()
    const correctIndex = questions[currentIndex].correctOption

    set({ currentAnswer: index })
    checkAnswer(index, correctIndex)
  },

  goHome: () => {
    set({ questions: [], finishScreen: false, score: 0 })
  },
  checkAnswer: (selectedIndex, correctIndex) => {
    if (selectedIndex === correctIndex) {
      set((state) => ({
        score: state.score + 1,
      }))
    }
  },
}))
