const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"


let store = {

    _state: {

        profilePage: {

            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: 16 },
                { id: 2, message: "It's my first post", likesCount: 25 },
                { id: 4, message: "go go go", likesCount: 15 },
                { id: 5, message: "JS - power", likesCount: 115 },
            ],

            newPostText: "",
        },

        dialogsPage: {


            dialogData: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Iluha' },
                { id: 3, name: 'Anton' },
                { id: 4, name: 'Marry' },
                { id: 5, name: 'Galya' }
            ],

            messagesData: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'Привет друг' },
                { id: 3, message: 'Это твоя первая социальная сеть' },
                { id: 4, message: 'Дальше будет больше' },
                { id: 5, message: 'Привет конкурентам!' }
            ],
        }

    },

    _callSubscriber() {
        console.log('Стейт изменился')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}



export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (text) => ({type: "UPDATE-NEW-POST-TEXT", newText: text})



export default store;
window.store = store;