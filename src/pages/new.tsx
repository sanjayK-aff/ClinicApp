import React from 'react';
import styled from 'styled-components';

// Define styled-components for various sections of the layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px; /* Mobile screen size */
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-left: 10px;
`;

const UrgentCareButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border-radius: 25px;
  padding: 8px 20px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EcareServicesContainer = styled.section`
  margin-top: 20px;
`;

const EcareServicesTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ServiceIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const ServiceIcon = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ServiceText = styled.p`
  font-size: 12px;
  color: #333;
  margin-top: 5px;
`;

const AppointmentSection = styled.section`
  margin-top: 30px;
`;

const AppointmentTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const AppointmentCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AppointmentInfo = styled.div`
  display: flex;
  align-items: center;
`;

const DoctorPic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AppointmentText = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaymentStatus = styled.div`
  background-color: #ffcc00;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  color: #fff;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const IconButton = styled.button`
  background-color: #0066cc;
  color: white;
  border-radius: 50%;
  padding: 12px;
  width: 60px;
  height: 60px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <ProfilePic src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Profile" />
        <Title>Welcome Back! Zhafira Azalea</Title>
      </Header>

      {/* Urgent Care Button */}
      <UrgentCareButton>Urgent Care</UrgentCareButton>

      {/* Ecare Services */}
      <EcareServicesContainer>
        <EcareServicesTitle>Ecare Services</EcareServicesTitle>
        <ServiceIcons>
          <ServiceIcon>
            <img src="https://img.icons8.com/ios-filled/50/000000/doctor.png" alt="Consultation" width={30} />
            <ServiceText>Consultation</ServiceText>
          </ServiceIcon>
          <ServiceIcon>
            <img src="https://img.icons8.com/ios-filled/50/000000/medicine.png" alt="Medicines" width={30} />
            <ServiceText>Medicines</ServiceText>
          </ServiceIcon>
          <ServiceIcon>
            <img src="https://img.icons8.com/ios-filled/50/000000/ambulance.png" alt="Ambulance" width={30} />
            <ServiceText>Ambulance</ServiceText>
          </ServiceIcon>
        </ServiceIcons>
      </EcareServicesContainer>

      {/* Appointment Section */}
      <AppointmentSection>
        <AppointmentTitle>My Appointment</AppointmentTitle>
        <AppointmentCard>
          <AppointmentInfo>
            <DoctorPic src="https://randomuser.me/api/portraits/women/3.jpg" alt="Doctor" />
            <AppointmentText>
              <span>dr. Nirmala Azalea</span>
              <span>Orthopedic</span>
            </AppointmentText>
          </AppointmentInfo>
          <PaymentStatus>Pending Payment</PaymentStatus>
        </AppointmentCard>
      </AppointmentSection>

      {/* Footer */}
      <Footer>
        <IconButton>+</IconButton>
      </Footer>
    </Container>
  );
};

export default App;
