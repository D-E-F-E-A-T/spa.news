import React from 'react';
import PropTypes from 'prop-types';
import { Connect } from '@gik/redux-factory';

import { Actions as ActionsItems, Types as TypesItems } from '~/stores/items';
import Style from './index.module.scss';

export const Component = ({ dispatch }) => {
    dispatch(ActionsItems.fetch());
    return <React.Fragment >
        <h1 className={ Style.Test }>Hola Mundo</h1>
    </React.Fragment>;
};

Object.defineProperty(Component, 'name', { value: 'Pages.Index' });

Component.propTypes = {
    items: TypesItems,
    dispatch: PropTypes.func.isRequired,
};

export default Connect(
    state => ({ items: state.items }),
)(Component);
