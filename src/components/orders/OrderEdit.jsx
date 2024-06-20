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
  Button,
} from "./styles/OrderEditStyles";
import { useUpdate } from "../../hook/useUpdate";

const OrderEdit = ({ order, closeModal }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [address1, setAddress1] = useState(order.address1 || "");
  const [address2, setAddress2] = useState(order.address2 || "");
  const [postalCode, setPostalCode] = useState(order.postalCode || "");
  const { loading, updateRequest } = useUpdate();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (order.id) {
      const updatedData = {
        address: {
          address1,
          address2,
          postalCode,
        },
      };
      const response = await updateRequest(order.id, updatedData);
      if (response && response.message) {
        alert(response.message);
      }
      setIsEditing(false);
      closeModal();
    } else {
      console.error("Order ID is undefined");
    }
  };

  return (
    <Card>
      <CardHeader>
        <Grid>
          <CardTitle>주문 수정</CardTitle>
          <CardDescription>배송지 변경만 가능합니다.</CardDescription>
        </Grid>
      </CardHeader>
      <CardContent>
        <Grid>
          <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
            배송지 정보
          </div>
          <Address>
            {isEditing ? (
              <form onSubmit={handleSave}>
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
                <Separator />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button type="submit" disabled={loading}>
                    {loading ? "저장 중..." : "저장하기"}
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <div className="address">주소 1: {address1}</div>
                <div className="address">주소 2: {address2}</div>
                <div className="address">우편 번호: {postalCode}</div>
                <Separator />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={handleEdit}>수정하기</Button>
                </div>
              </>
            )}
          </Address>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrderEdit;
