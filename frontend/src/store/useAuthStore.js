import { create } from 'zustand'
import { myAxios } from '../lib/axios.js'
import toast from 'react-hot-toast'

const BASE_URL =
  import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '/'

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isLoading: false,
  isCheckingAuth: true,

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
}))
