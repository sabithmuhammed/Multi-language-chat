import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            user: null, // { userId, token, name, ... }
            loading: false,
            setUser: (user) => set({ user }),
            setLoading: (loading) => set({ loading }),
        }),
        {
            name: "auth-storage", // storage key name
            partialize: (state) => ({ user: state.user }), // only persist user, not loading
        }
    )
);

export default useAuthStore;
