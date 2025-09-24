import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useLinkUpStore = create()(
    persist(
        (set, get) => ({
            something: 1,
            setSomething(diff) {
                const state = get();
                const newSomething = state.something + diff;
                set({ something: newSomething });
            },

            access_token: null,
            setAccessToken(access_token) {
                set({ access_token });
            },

            user: null,
            setUser(user) {
                set({ user });
            },

            isModalOn: false,
            setIsModalOn(isModalOn) {
                set({ isModalOn });
            },

            selectedArtist: null,
            setSelectedArtist(selectedArtist) {
                set({ selectedArtist });
            },

            eventArray: [],
            setEventArray(eventArray) {
                set({ eventArray });
            },

            artistArray: [],
            setArtistArray(artistArray) {
                set({ artistArray });
            },

            fanPostArray: [],
            setFanPostArray: (arr) => set({ fanPostArray: arr }),

            addFanPost: (newPost) => {
                const prev = get().fanPostArray;
                set({ fanPostArray: [newPost, ...prev] });
            },
        }),
        {
            name: "linkup-session-storage", // Name for your storage item
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                access_token: state.access_token,
                user: state.user,
            }),
        }
    )
);

export default useLinkUpStore;
