import styled from "styled-components";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export const LoginCard = styled(Card)`
    width: 30%;

    position: absolute;
    top: 50%; left: 50%;
    transform: translateX(20%) translateY(-40%);

    @media screen and (max-width: 768px){
        margin-left:auto;
        margin-right:auto;
    }
`
