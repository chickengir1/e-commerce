export const validateForm = (formData, user = {}) => {
  const { name, email, phoneNumber, password, confirmPassword } = formData;

  if (!name || !email || !phoneNumber) {
    return "모든 필드를 입력해주세요.";
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return "유효한 이메일 주소를 입력해주세요.";
  }

  const cleanedPhoneNumber = phoneNumber.replace(/-/g, "");
  const phonePattern = /^[0-9]{10,11}$/;
  if (!phonePattern.test(cleanedPhoneNumber)) {
    return "유효한 핸드폰 번호를 입력하세요.";
  }

  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }

  const cleanedUserPhoneNumber = user.phoneNumber
    ? user.phoneNumber.replace(/-/g, "")
    : "";
  if (
    user &&
    name === user.name &&
    email === user.email &&
    cleanedPhoneNumber === cleanedUserPhoneNumber
  ) {
    return "회원정보가 변경되지 않았습니다.";
  }

  return "";
};
