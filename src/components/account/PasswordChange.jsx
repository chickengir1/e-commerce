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
import {
  Input,
  ReadOnlyInput
} from "./styles/PasswordChangeStyles";

const PasswordChange = ({ user }) => {
  return (
    <Container>
      <Section>
        <Title>{user.name} 님의 비밀번호</Title>
        <FlexContainer>
          <InputSection>
            <InputGroup>
              <ReadOnlyInput>보안을 위해 주기적으로 비밀번호를 변경해주세요.</ReadOnlyInput>
            </InputGroup>
            <form>
              <InputGroup>
                <Label>새 비밀번호</Label>
                <Input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요."
                />
              </InputGroup>
              <InputGroup>
                <Label>새 비밀번호 확인</Label>
                <Input
                  type="password"
                />
              </InputGroup>
            </form>
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
      </Section>
    </Container>
  );
};

export default PasswordChange;
