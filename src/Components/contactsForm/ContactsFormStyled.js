import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    .formLabel {
        margin-bottom: 20px;
    }

    .formInput {
        background-color: #fff;
        border: 1px solid #d5d9d9;
        border-radius: 8px;
        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
        box-sizing: border-box;
        color: #0f1111;
        cursor: pointer;
        height: 25px;
    }

    .formText {
        margin-bottom: 7px;
        font-size: 18px;
        line-height: 29px;
    }

    .addContactBtn {
        width: 100px;
    }

`