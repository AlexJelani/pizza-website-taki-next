// StyledHeader.jsx
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 23px 15%;
  transition: all 0.38s ease;

  &.sticky {
    padding: 10px 15%;
    background: var(--bg-color);
    box-shadow: 0px 4px 15px rgb(0 0 0 / 8%);
  }

 
`;

// Now, you can use StyledHeader in your Header component
