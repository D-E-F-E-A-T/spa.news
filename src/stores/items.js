import PropTypes from 'prop-types';
import { Factory } from '@gik/redux-factory';

export const Name = 'ITEMS';

export const Types = PropTypes.array.isRequired;

export const State = [
    {
        type: 'story',
        id: 8863,
        score: 111,
        time: 1175714200,
        title: 'My YC app: Dropbox - Throw away your USB drive',
        url: 'http://www.getdropbox.com/u/2/screencast.html',
        descendants: 71,
        kids: [],
    },
    {
        type: 'story',
        id: 8863,
        score: 111,
        time: 1175714200,
        title: 'My YC app: Dropbox - Throw away your USB drive',
        url: 'http://www.getdropbox.com/u/2/screencast.html',
        descendants: 71,
        kids: [],
    },
];

export const { Actions, Reducers } = Factory(State, {

    fetch: {
        action: type => dispatch => dispatch({ type }),
        reducer: prevState => prevState,
    },

}, Name);
