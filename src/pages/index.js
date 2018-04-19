import React from 'react';
import PropTypes from 'prop-types';
import { Connect } from '@gik/redux-factory';
import { List, Row, Col, Icon } from 'antd';

import { Actions as ActionsItems, Types as TypesItems } from '~/stores/items';
import Style from './index.module.scss';

const State = {};

export class Component extends React.Component {

    state = State;

    componentDidMount() {
        this.props.dispatch(ActionsItems.fetch());
    }

    render() {
        return <List
            itemLayout="horizontal"
            grid={{ gutter: 10, column: 1 }}
            dataSource={this.props.items}
            className={Style.List}
            renderItem={item =>
                <List.Item key={item.key} className={Style.Item}>
                    <Row
                        type="flex"
                        justify="space-between"
                        align="middle"
                        gutter={10}
                        className={Style.ItemRow}>
                        <Col xs={4} sm={2} xl={1} className={Style.ItemCol}>
                            <div>
                                <Icon type="like-o"/>
                                {item.score}
                            </div>
                            <div>
                                <Icon type="message"/>
                                <a href={item.original}>{item.descendants}</a>
                            </div>
                        </Col>
                        <Col xs={20} sm={22} xl={23} className={Style.ItemCol}>
                            <a href={item.url}>{item.title}</a>
                        </Col>
                    </Row>
                </List.Item>
            }
        />;
    }
}

Object.defineProperty(Component, 'name', { value: 'Pages.Index' });

Component.propTypes = {
    items: TypesItems,
    dispatch: PropTypes.func.isRequired,
};

export default Connect(
    state => ({ items: state.items }),
)(Component);
