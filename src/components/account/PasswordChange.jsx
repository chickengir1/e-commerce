import React from "react";
import {
  Container,
  Section,
  Title,
  InputGroup,
  Label,
  FlexContainer,
  InputSection,
  InstructionsSection,
} from "./styles/commonStyles";
import { Input, ReadOnlyInput, Button } from "./styles/PasswordChangeStyles";
import Notification from "../notification/Notification";
import usePasswordChange from "../../hook/usePasswordChange";
import API_PATHS from "../../utils/apiPaths";

const PasswordChange = ({ user }) => {
  const {
    newPassword,
    confirmPassword,
    notification,
    setNewPassword,
    setConfirmPassword,
    handleSubmit,
  } = usePasswordChange(API_PATHS.USER);

  return (
    <Container>
      <Section>
        <Title>{user.name} 님의 비밀번호</Title>
        <form onSubmit={handleSubmit}>
          <FlexContainer>
            <InputSection>
              <InputGroup>
                <ReadOnlyInput>
                  보안을 위해 주기적으로 비밀번호를 변경해주세요.
                </ReadOnlyInput>
              </InputGroup>
              <InputGroup>
                <Label>새 비밀번호</Label>
                <Input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요."
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>새 비밀번호 확인</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
              {notification && <Notification message={notification} />}
            </InputSection>
            <InstructionsSection>
              <Label>안녕하세요 {user.name}님,</Label>
              <span style={{ lineHeight: "1.6", marginTop: "10px" }}>
                보안을 위해 정기적으로 비밀번호를 변경해 주시기 바랍니다.
              </span>
              <span style={{ lineHeight: "1.6", marginTop: "10px" }}>
                마지막 비밀번호 변경 이후 오랜 시간이 경과되었습니다.
              </span>
              <span style={{ lineHeight: "1.6", marginTop: "10px" }}>
                지금 비밀번호를 변경하셔서 귀하의 계정을 보호해 주시기 바랍니다.
              </span>
            </InstructionsSection>
          </FlexContainer>
          <Button style={{ height: "3rem", marginTop: "8px" }} type="submit">
            비밀번호 변경
          </Button>
        </form>
      </Section>
    </Container>
  );
};

export default PasswordChange;
