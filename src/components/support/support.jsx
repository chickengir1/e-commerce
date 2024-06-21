import React from "react";
import {
    ContentLayout,
    MainContent,
    CartContainer,
} from "../../GlobalStyles/LayoutStyles";
import { Input, TextArea, Button, Label } from './supportStyles';

const Support = () => {
    return (
        <>
            <ContentLayout>
                <MainContent>
                    <CartContainer>
                        <h2>고객 지원</h2> <br />
                        <span>당사의 고객 지원 팀은 언제나 고객 여러분의 문의 사항을 친절하게 처리해 드리겠습니다. 아래에서 자주 묻는 질문들을 확인하시거나 문의 양식을 작성하여 보내주시기 바랍니다.</span>
                        <br /><br /><br />
                        <h3>자주 묻는 질문</h3> <br />
                        <p>배송 기간은 얼마나 걸리나요?</p>
                        <p>반품 및 환불 기간은 얼마나 걸리나요?</p>
                        <br /><br /><br />
                        <h3>문의하기</h3> <br />
                        <form>
                            <Label htmlFor="name">이름</Label>
                            <Input type="text" id="name" name="name" placeholder="이름을 입력하세요" />

                            <Label htmlFor="email">이메일</Label>
                            <Input type="email" id="email" name="email" placeholder="이메일을 입력하세요" />

                            <Label htmlFor="orderNumber">주문번호</Label>
                            <Input type="text" id="orderNumber" name="orderNumber" placeholder="주문번호를 입력하세요" />

                            <Label htmlFor="message">문의사항</Label>
                            <TextArea id="message" name="message" rows="4" placeholder="문의사항을 입력하세요"></TextArea>

                            <Button type="submit">제출</Button>
                        </form>
                    </CartContainer>
                </MainContent>
            </ContentLayout>
        </>
    );
}

export default Support;
