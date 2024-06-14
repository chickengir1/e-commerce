import React from 'react';
import PersonalInfo from './PersonalInfo';
import PasswordChange from './PasswordChange';
import { Button, DelBtn } from "./styles/PasswordChangeStyles";
import useAccount from '../../hook/useAccount';

const Account = ({ user, Mockuser }) => {
  const { deleteAccount, loading, error } = useAccount();

  if (loading) return <p>로딩 중...</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <PersonalInfo user={user} Mockuser={Mockuser} />
      <PasswordChange user={user} />
      <div style={{ display: "flex", width: "95%", margin: "0 auto", justifyContent: "end", marginBottom: "5rem" }}>
        <Button type="button">회원 정보 변경</Button>
        <DelBtn type="button" onClick={deleteAccount}>회원 탈퇴하기</DelBtn>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Account;
