import { ADD_ARTICLE } from "./types";

const initialState = {
    articles: []
}

const returnState = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            let articles = {...state, articles: state.articles.concat(action.payload)};
            return articles;
        default: 
            return state
    }
}

export default returnState