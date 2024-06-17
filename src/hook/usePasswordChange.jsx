import { useState } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const usePasswordChange = (apiUrl) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notification, setNotification] = useState("");

  const delayNotification = async (message) => {
    setNotification(message);
    await delay(1500);
    setNotification("");
  };

  const validatePasswords = async () => {
    if (newPassword === "" || confirmPassword === "") {
      await delayNotification("모든 필드를 입력해주세요.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      await delayNotification("비밀번호가 일치하지 않습니다.");
      return false;
    }
    if (newPassword.length < 8) {
      await delayNotification("비밀번호는 최소 8자리여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await validatePasswords()) {
      try {
        const response = await fetch(apiUrl, { 
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: newPassword }),
        });

        if (!response.ok) {
          throw new Error("Failed to update password");
        }

        await delayNotification("비밀번호가 성공적으로 변경되었습니다.");
      } catch (error) {
        await delayNotification("비밀번호 변경에 실패했습니다.");
      }
    }
  };

  return {
    newPassword,
    confirmPassword,
    notification,
    setNewPassword,
    setConfirmPassword,
    handleSubmit,
  };
};

export default usePasswordChange;
