import React, { useState } from "react";
import {
  Container,
  Section,
  Title,
  InputGroup,
  Label,
  FlexContainer,
  InputSection,
} from "./styles/commonStyles";
import {
  Input,
  Avatar,
  AvatarSection,
} from "./styles/PersonalInfoStyles";

const handleChange = (e, setFormData, formData) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const PersonalInfo = ({ user, Mockuser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber
  });

  return (
    <Container>
      <Section>
        <Title>{formData.name} 님의 정보</Title>
        <FlexContainer>
          <InputSection>
            <InputGroup>
              <Label>이름</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e, setFormData, formData)}
              />
            </InputGroup>
            <InputGroup>
              <Label>이메일</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e, setFormData, formData)}
              />
            </InputGroup>
            <InputGroup>
              <Label>전화번호</Label>
              <Input
                type="tel"
                id="phone"
                name="phoneNumber"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                required
                value={formData.phoneNumber}
                onChange={(e) => handleChange(e, setFormData, formData)}
              />
            </InputGroup>
          </InputSection>
          <AvatarSection>
            <Avatar src={Mockuser.avatar} alt={`${formData.name} 님의 아바타`} />
          </AvatarSection>
        </FlexContainer>
      </Section>
    </Container>
  );
};

export default PersonalInfo;
