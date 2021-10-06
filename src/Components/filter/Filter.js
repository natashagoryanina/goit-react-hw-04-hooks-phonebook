import React from 'react';
import PropTypes from 'prop-types';
import FilterContainer from './FilterStyled';


const Filter = ({value, onChange}) => {
    return (
        <FilterContainer>
            <span className="filterText">Find contacts by name</span>
            <input 
                className="filterInput"
                type="text" 
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FilterContainer>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Filter;