import React from 'react';
import styled from '@emotion/styled';
import { Close, Undo } from '@material-ui/icons';
import { ListChecks } from '@phosphor-icons/react';

const CardMain = styled('div')`
  height: 574px;
  width: 1176px;
  border: 1px solid #0000001F;
  margin: 10px 60px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CheckLogo = styled('div')`
  height: 24px;
  width: 24px;
  padding: 16px 16px 16px 16px;
  border-radius: 50%;
  background-color: #F5F5F5;
`;

const Title = styled('div')`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
`;

const SubTitle = styled('div')`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.02px;
  letter-spacing: 0.17px;
  color: #00000099;
`;

const SnackbarContent = styled('div')`
  display: flex;
  align-items: center;
`;

const StyledUndoIcon = styled(Undo)`
  cursor: pointer;
  margin-right: 8px;
`;

const StyledCloseIcon = styled(Close)`
  cursor: pointer;
`;

const EmptyCard = () => {


    return (
        <>
            <CardMain>
                <CheckLogo>
                    <ListChecks style={{ height: '24px', width: '24px' }} />
                </CheckLogo>
                <Title>You don't have any classes yet!</Title>
                <SubTitle>Here you will find your classes,</SubTitle>
            </CardMain>
        </>
    );
};

export default EmptyCard;
