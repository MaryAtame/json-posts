import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import {BASE_URL} from "@/constants/constants";

const usePostStore = defineStore("postStore", () => {
    const loader = ref(false);
    const posts = ref([]);
    const todoes = ref([]);
    const searchQuery = ref('');

    const getPosts = async () => {
        try {
            loader.value = true;
            let urls = [
                `${BASE_URL}posts?_limit=10`,
                `${BASE_URL}users`
            ]

            const requests = urls.map((url) => axios.get(url));

            axios.all(requests).then((responses) => {
                let postsList = responses[0].data;
                let usersList = responses[1].data;

                const usersById = {};
                usersList.forEach(user => {
                    usersById[user.id] = user;
                });

                postsList.forEach(post => {
                    post.user = usersById[post.id];
                });

                posts.value = postsList

            })
        } catch (e) {
            console.log(e.message)
        } finally {
            loader.value = false;
        }
    }
    const getTodoes = async () => {
        try {
            loader.value = true;
            let url = `${BASE_URL}todos?_limit=10`;

            axios({
                method: 'get',
                url: url,
            })
                .then(function (response) {
                    todoes.value = response.data
                });
        } catch (e) {
            console.log(e.message)
        } finally {
            loader.value = false;
        }
    }

    const sortPosts = (searchQuery) => {
        posts.value = posts.value.filter(post => post.user.name.toLowerCase().includes(searchQuery.toLowerCase()));
        if (searchQuery === '') {
            posts.value = getPosts()
        }
    }

    return {
        loader,
        posts,
        todoes,
        getPosts,
        getTodoes,
        sortPosts,
    };
});

export default usePostStore;