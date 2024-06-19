import React from "react";
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

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, orderState: newStatus } : order
      )
    );
  };

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
              <ProductTh>제품 번호</ProductTh>
              <OrderTh>주문 내역</OrderTh>
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
                    {new Date(
                      order.orderDate.$date || order.orderDate
                    ).toLocaleString()}
                  </Td>
                  <Td>
                    {order.name}
                    <br />
                    {order.phone}
                  </Td>
                  <Td>{order._id}</Td>
                  <Td>
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.item.$oid} (Size: {item.size}) x {item.quantity}
                      </div>
                    ))}
                  </Td>
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
