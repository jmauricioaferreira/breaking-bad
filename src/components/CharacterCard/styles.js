import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 300px;
  cursor: pointer;
  perspective: 1000px;

  div:hover {
    transform: rotateY(180deg);
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    div {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    div:nth-child(2) {
      padding: 1rem;
      background-color: #333;
      transform: rotateY(180deg);

      h1 {
        font-size: 1.75rem;
        border-bottom: 1px solid #fff;
      }

      ul {
        padding-top: 1rem;

        li {
          padding-bottom: 0.5rem;
          color: #fff;

          strong {
            color: #e1e1e1;
          }
        }
      }
    }
  }
`;
