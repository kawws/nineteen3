// index.tsx
import {
  Body,
  Container,
  Html,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
      <Body style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
          <Container>
              <Section>
                  <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>New Contact Message</Text>
              </Section>
              <Section>
                  <Text><strong>Name:</strong> {name}</Text>
                  <Text><strong>Email:</strong> {email}</Text>
                  <Text><strong>Message:</strong></Text>
                  <Text>{message}</Text>
              </Section>
          </Container>
      </Body>
  </Html>
);

export default ContactEmail;
