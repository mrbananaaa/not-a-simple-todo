import create from "zustand";
import { persist } from "zustand/middleware"

const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: () => set({ isLogin: true }),
      profile: { name: "guest" },
      setProfileName: (payload) => set({ profile: { name: payload } })
    }),
    {
      name: 'todo-react-pwa-auth',
      version: 1.0
    }
  )
)

export default useAuthStore