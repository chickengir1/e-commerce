import React, { useState } from "react";
import {
    Card,
    CardHeader,
    Grid,
    CardTitle,
    CardDescription,
    CardContent,
    Address,
    Input,
    Separator,
    Button
} from "./styles/OrderEditStyles";

const OrderEdit = ({ order, closeModal }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [address1, setAddress1] = useState(order.address1 || '');
    const [address2, setAddress2] = useState(order.address2 || '');
    const [postalCode, setPostalCode] = useState(order.postalCode || '');

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        console.log("주소1:", address1);
        console.log("주소2:", address2);
        console.log("우편 번호:", postalCode);
        setIsEditing(false);
        closeModal();
    };

    return (
        <Card>
            <CardHeader>
                <Grid>
                    <CardTitle>
                        주문 수정
                    </CardTitle>
                    <CardDescription>배송지 변경만 가능합니다.</CardDescription>
                </Grid>
            </CardHeader>
            <CardContent>
                <Grid>
                    <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>배송지 정보</div>
                    <Address>
                        {isEditing ? (
                            <>
                                <Input
                                    type="text"
                                    value={address1}
                                    onChange={(e) => setAddress1(e.target.value)}
                                    placeholder="주소1 입력"
                                />
                                <Input
                                    type="text"
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                    placeholder="주소2 입력"
                                />
                                <Input
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    placeholder="우편 번호 입력"
                                />
                            </>
                        ) : (
                            <>
                                <div className="address">주소 1{address1}</div>
                                <div className="address">주소 2{address2}</div>
                                <div className="address">우편 번호{postalCode}</div>
                            </>
                        )}
                    </Address>
                </Grid>
                <Separator />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {isEditing ? (
                        <Button onClick={handleSave}>
                            저장하기
                        </Button>
                    ) : (
                        <Button onClick={handleEdit}>
                            수정하기
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderEdit;
