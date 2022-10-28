import React from 'react';
import CommonLayout from '../../components/shop/common-layout'
import GridTwoPage from './common/grid-2-page';

const GridFour = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <GridTwoPage colClass="col-lg-3 col-sm-6" limit='12' />
        </CommonLayout>
    )
}

export default GridFour;