import React from "react";
import ReactDOM from "react-dom";
require('./sass/style.scss');
import configureStore from './store/store'
import { Provider } from 'react-redux';
import MovieListPage from './components/movie-list-page.jsx'
const store = configureStore();

const App = () => {
return (
    <Provider store={store}>
        <MovieListPage/>
    </Provider>);
};

ReactDOM.render(<App />, document.getElementById("index"));