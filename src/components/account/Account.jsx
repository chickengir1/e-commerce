import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import PasswordChange from './PasswordChange';
import { DelBtn } from "./styles/PasswordChangeStyles";
import { deleteUserAccount } from '../../utils/api';
import Notification from '../notification/Notification';
import { useNavigate } from 'react-router-dom';
import usePostRequest from '../../hook/usePostRequest';
import API_PATHS from '../../utils/apiPaths';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Account = ({ user, mockUser }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState("");
  const { postData } = usePostRequest(API_PATHS.LOGOUT);

  const handleDeleteAccount = async () => {
    if (window.confirm("정말로 회원 탈퇴를 하시겠습니까?")) {
      try {
        await Promise.all([
          deleteUserAccount(),
          postData(),
        ]);
        sessionStorage.removeItem('session');
        setNotification("회원 탈퇴가 완료되었습니다.");
      } catch (error) {
        setNotification("회원 탈퇴에 실패했습니다. 다시 시도해주세요.");
      } finally {
        await delay(1500);
        setNotification("");
        navigate("/");
      }
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      {notification && <Notification message={notification} />}
      <PersonalInfo user={user} mockUser={mockUser} />
      <PasswordChange user={user} />
      <div style={{ display: "flex", width: "95%", margin: "0 auto", justifyContent: "end", marginBottom: "5rem" }}>
        <DelBtn type="button" onClick={handleDeleteAccount}>회원 탈퇴하기</DelBtn>
      </div>
    </div>
  );
};

export default Account;
