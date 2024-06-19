import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  TableWrapper,
  Table,
  Thead,
  Th,
  DateTh,
  UserTh,
  ProductTh,
  OrderTh,
  Tr,
  Td,
  NumTd,
  StatusTd,
  BtnTd,
  Select,
  Button,
} from "./mg";
import useFetchData from "../../hook/useFetchData";

export default function Component() {
  const {
    data: orders,
    loading,
    error,
    setData: setOrders,
  } = useFetchData("/api/orders");
  const [orderName, setOrderName] = useState([]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, orderState: newStatus } : order
      )
    );
  };

  useEffect(() => {
    if (orders) {
      const productName = orders.flatMap((order) =>
        order.items.map((item) => {
          if (!item || !item.item || !item.item.productId) {
            return `Product ${item._id}`;
          }
          return item.item.productId.name;
        })
      );
      setOrderName(productName);
    }
  }, [orders]);

  const handleDelete = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order._id !== orderId)
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Title>주문 내역 관리</Title>
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <DateTh>주문 날짜</DateTh>
              <UserTh>주문자 정보</UserTh>
              <ProductTh>제품 이름</ProductTh>
              <Th>배송 상태</Th>
              <Th>주문 내역 삭제</Th>
            </Tr>
          </Thead>
          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((order, index) => (
                <Tr key={order._id}>
                  <NumTd>{`${index + 1}`}</NumTd>
                  <Td>
                    {new Date(order.orderDate).toISOString().split("T")[0]}
                  </Td>
                  <Td>{order.name}</Td>
                  <Td>{orderName[index]}</Td>
                  <StatusTd>
                    <Select
                      value={order.orderState}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option value="OrderComplete">주문 완료</option>
                      <option value="Pending">배송 준비 중</option>
                      <option value="Shipped">배송 중</option>
                      <option value="Delivered">배송 완료</option>
                    </Select>
                  </StatusTd>
                  <BtnTd>
                    <Button onClick={() => handleDelete(order._id)}>
                      삭제
                    </Button>
                  </BtnTd>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="7">주문 내역 없음</Td>
              </Tr>
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}
