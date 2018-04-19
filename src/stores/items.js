import PropTypes from 'prop-types';
import { Factory } from '@gik/redux-factory';

export const Name = 'ITEMS';

export const Types = PropTypes.array.isRequired;

export const State = [];

const hackernews = {
    api: 'https://hacker-news.firebaseio.com/v0',
    url: 'https://news.ycombinator.com',
};

export const { Actions, Reducers } = Factory(State, {

    hide: {
        action: (type, item) => (dispatch) => {
            localStorage.setItem(item.id, JSON.stringify({ ...item, hidden: true }));
            return dispatch({ type, payload: item.id });
        },
        reducer: (prevState, id) => prevState.filter(item => item.id !== id),
    },

    fetch: {
        action: type => dispatch => fetch(`${hackernews.api}/beststories.json`)
            .then(response => response.json())
            // Iterate each item to see if exists on local storage
            .then(items => items
                // converts each item into a closure that resolves a promise
                .map(id => () => {
                    {
                        const item = localStorage.getItem(id);
                        if (item) return Promise.resolve(JSON.parse(item));
                    }
                    return fetch(`${hackernews.api}/item/${id}.json`)
                        .then(response => response.json())
                        .then((json) => {
                            const item = {
                                ...json,
                                hidden: false,
                                original: `${hackernews.url}/item?id=${id}`,
                            };
                            localStorage.setItem(id, JSON.stringify(item));
                            return item;
                        });
                })
                // Resolve all the promises sequentially
                .reduce(
                    (promise, resolve) => promise
                        .then(result => resolve()
                            .then(Array.prototype.concat.bind(result)),
                        ),
                    Promise.resolve([]),
                ),
            )
            // sort items
            .then(items => items.sort((a, b) =>
                a.score < b.score ? 1 : (a.score > b.score ? -1 : 0),
            ))
            // filter hidden items
            .then(items => items.filter(item => !item.hidden))
            // Dispatch to the reducer
            .then(payload => dispatch({ type, payload })),
        reducer: (prevState, items) => items,
    },

}, Name);
