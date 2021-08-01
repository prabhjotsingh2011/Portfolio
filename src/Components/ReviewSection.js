import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';
function ReviewSection() {
    return (
     
        <ReviewSectionStyled>
            <Title title={'Reviews'} span={'Reviews'}/>
            <InnerLayout>
           
                <div className="reviews">
                    <ReviewItem text={' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto iure fugiat doloremque eveniet?'}/>
                    <ReviewItem text={' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto iure fugiat doloremque eveniet?ewejciwqq wqdid qiqq dqiwdhqdq wdqiwdqiw qwdihw'}/>
                </div>
            </InnerLayout>
        </ReviewSectionStyled>
    
    )
}
const ReviewSectionStyled=styled.section`
    .reviews{
        display: flex;
    }
`;
export default ReviewSection
