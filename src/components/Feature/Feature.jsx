import React from 'react';
import PropTypes from 'prop-types'
import { FaRegCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex gap-4 items-center' > <FaRegCheckCircle className='ml-2' />{ feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
}

export default Feature;