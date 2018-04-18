import PropTypes from 'prop-types';
import { Factory } from '@gik/redux-factory';

export const Name = 'ITEM';

export const Types = PropTypes.shape({
    test: PropTypes.bool,
});

export const State = {
    test: true,
};

export const { Actions, Reducers } = Factory(State, {

    fetch: {
        action: type => dispatch => dispatch({ type }),
        reducer: prevState => prevState,
    },

}, Name);
