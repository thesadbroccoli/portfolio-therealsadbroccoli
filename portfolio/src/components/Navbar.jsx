import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: left;
`;

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px; 
`;


const Navbar = () => {
    const [isTransparent, setTransparent] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setTransparent(false);
        } else {
          setTransparent(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <Container transparent={isTransparent}>
        <Wrapper>
          <Logo>
            TheSadBroccoli.
          </Logo>
          <MenuContainer>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contacts</MenuItem>
          </MenuContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar