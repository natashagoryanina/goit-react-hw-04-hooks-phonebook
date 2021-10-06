import styled from 'styled-components';

const FilterContainer = styled.label`
    display: flex;
    flex-direction: column;

    .filterText {
        margin-bottom: 7px;
        font-size: 18px;
        line-height: 29px;
    }

    .filterInput{
        height: 25px;
        width: 151px;
        background-color: #fff;
        border: 1px solid #d5d9d9;
        border-radius: 8px;
        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
        box-sizing: border-box;
        color: #0f1111;
        cursor: pointer;
        margin-bottom: 20px;
    }
`;

export default FilterContainer;