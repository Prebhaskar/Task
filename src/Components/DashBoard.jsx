import React from 'react';
import { Avatar, Card, CardHeader } from '@mui/material';
import styled from '@emotion/styled';
import { UsersThree } from '@phosphor-icons/react/dist/ssr';
import { ListChecks, Target } from '@phosphor-icons/react';

const DashBoard = () => {
    const DashBoardCard = styled(Card)`
    height: 100px;
    width: 1176px;
    margin: 20px 55px;
    border: 1px solid #0000001F;
    border-radius: 16px;
    box-shadow: none;
    display: flex;
  `;

    const EnrolledCard = styled(Card)`
    width: 391.33px;
  `;

    const EntrolledAvatar = styled(Avatar)`
    height: 52px;
    width: 52px;
    border-radius: 8px;
  `;

    const TitleText = styled('div')`
  font-size: 12px;
  height:20px;
  margin-bottom:-2px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.92px;
  letter-spacing: 0.4px;
  
  `;

    const SubheaderText = styled('div')`
    font-size: 24px;
    width:27px;
    height:32px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.016px;
    color:#000000DE;
  `;

    const QuestionsCard = styled(Card)`
    width: 391.33px;
  `;

    const AverageCard = styled(Card)`
    width: 391.33px;
  `;

    return (
        <>
            <DashBoardCard>
                <EnrolledCard>
                    <CardHeader sx={{ padding: '24px 24px' }}
                        avatar={<EntrolledAvatar sx={{ bgcolor: '#03A9F4' }}>
                            <UsersThree size={33} />
                        </EntrolledAvatar>}
                        title={<TitleText> Enrolled Students</TitleText>}
                        subheader={<SubheaderText>20</SubheaderText>}
                    />
                </EnrolledCard>
                <QuestionsCard>
                    <CardHeader sx={{ padding: '24px 24px' }}
                        avatar={<EntrolledAvatar sx={{ bgcolor: '#4CAF50' }}>
                            <ListChecks size={32} />
                        </EntrolledAvatar>}
                        title={<TitleText>Questions answered</TitleText>}
                        subheader={<SubheaderText>2001</SubheaderText>}
                    />
                </QuestionsCard>
                <AverageCard>
                    <CardHeader sx={{ padding: '24px 24px' }}
                        avatar={<EntrolledAvatar sx={{ bgcolor: '#3F51B5' }}>
                            <Target size={32} />
                        </EntrolledAvatar>}
                        title={<TitleText>Average accuracy</TitleText>}
                        subheader={<SubheaderText>62%</SubheaderText>}
                    />
                </AverageCard>
            </DashBoardCard>
        </>
    );
};

export default DashBoard;
