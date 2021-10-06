import styled from 'styled-components';

const ContactsListItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 29px;

    .deleteBtn {
        width: 65px;
        margin-left: 10px;
        margin-bottom: 0;
    }
`;

export default ContactsListItemContainer;