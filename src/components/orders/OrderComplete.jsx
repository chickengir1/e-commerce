import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Title, Status, StatusText, Grid, Section, SectionTitle, InfoList, InfoItem, Label, Value, OrderList, OrderItem, OrderDetails, OrderTitle, OrderQuantity, Total, Footer, Contact, Button } from './styles/OrderCompleteStyles';

function OrderComplete() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 가짜 데이터
        setTimeout(() => {
            setData({
                name: "홍길동",
                address: {
                    address1: "서울특별시 강남구",
                    address2: "테헤란로 123",
                    postalCode: "12345"
                },
                items: [
                    {
                        _id: { $oid: "1" },
                        item: { $oid: "A1" },
                        quantity: 2,
                        size: "M",
                        price: 10000
                    },
                    {
                        _id: { $oid: "2" },
                        item: { $oid: "B2" },
                        quantity: 1,
                        size: "L",
                        price: 20000
                    }
                ],
                totalPrice: 40000
            });
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <OrderDetailsComponent data={data} />;
}

const OrderDetailsComponent = ({ data }) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => () => {
        navigate(path);
    };

    const orderData = data || {};
    const items = orderData.items || [];

    return (
        <Container>
            <Header>
                <Title>주문 완료</Title>
                <Status>
                    <StatusText>주문이 완료되었습니다.</StatusText>
                </Status>
            </Header>
            <Grid>
                <Section>
                    <SectionTitle>주문 정보</SectionTitle>
                    <InfoList>
                        <InfoItem>
                            <Label>주문 번호</Label>
                            <Value>db에 주문 번호 들어가게 해야됌</Value>
                        </InfoItem>
                        <InfoItem>
                            <Label>배송지</Label>
                            <address style={{ textAlign: 'right' }}>
                                {orderData.name || "이름 없음"}
                                <br />
                                {orderData.address ? `${orderData.address.address1} ${orderData.address.address2}` : "주소 없음"}
                                <br />
                                {orderData.address ? `(우) ${orderData.address.postalCode}` : ""}
                            </address>
                        </InfoItem>
                    </InfoList>
                </Section>
                <Section>
                    <SectionTitle>주문 내역</SectionTitle>
                    <OrderList>
                        {items.map((item, index) => (
                            <OrderItem key={item._id ? item._id.$oid : index}>
                                <OrderDetails>
                                    <OrderTitle>상품 ID: {item.item ? item.item.$oid : "N/A"}</OrderTitle>
                                    <OrderQuantity>{item.quantity || 0}개 (사이즈: {item.size || "N/A"})</OrderQuantity>
                                </OrderDetails>
                                <Value>{item.price || 0}원</Value>
                            </OrderItem>
                        ))}
                        <Total>
                            <span>총 결제 금액</span>
                            <Value>{orderData.totalPrice || 0}원</Value>
                        </Total>
                    </OrderList>
                </Section>
            </Grid>
            <Footer>
                <Contact>
                    <span>고객 서비스: 1234-1234</span>
                </Contact>
                <Button onClick={handleNavigate('/products')}>추가 주문하기</Button>
            </Footer>
        </Container >
    );
};

export default OrderComplete;
