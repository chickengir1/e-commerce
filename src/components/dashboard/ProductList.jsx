import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableHeader, TableHeaderImg, TableCell, TableCellImg, TableRow, ImagePlaceholder, ActionButton } from './styles/ProductLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductList = ({ productList, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderImg>이미지</TableHeaderImg>
            <TableHeader>이름</TableHeader>
            <TableHeader>브랜드</TableHeader>
            <TableHeader>카테고리</TableHeader>
            <TableHeader>가격</TableHeader>
            <TableHeader>정보 수정</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {productList.map((product) => (
            <TableRow key={product._id}>
              <TableCellImg>
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0]} alt={product.name} width="50" height="50" />
                ) : (
                  <ImagePlaceholder />
                )}
              </TableCellImg>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.brand.name}</TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell>{product.price.toLocaleString('ko-KR')} 원</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleEdit(product._id)}>
                  <FontAwesomeIcon icon={faEdit} /> 수정
                </ActionButton>
                <ActionButton onClick={() => onDelete(product._id)}>
                  <FontAwesomeIcon icon={faTrash} /> 삭제
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
