import styled from 'vue-styled-components'

const StyledPitchSlate = styled.section`
  padding-bottom: 60px;
  flex-direction: column;

  .primary__content,
  .bottom__content {
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    margin-top: ${props => props.theme.header.height};
  }

  .cavalier {
    h1 span {
      color: #fff;
    }

    p {
      font-size: 1.3em;
    }
  }

  .visage {
    width: 23.334em;
    height: 24.67em;
    border: 1.5px solid #fff;
    margin-right: ${props => `calc(${props.theme.header.padding} + 4em)`};

    div {
      width: inherit;
      height: inherit;
      margin-top: -35px;
      margin-left: -30px;
      background-color: #fff;
      background-size: cover;
      /* background-image: url(/img/olaolu.jpg); */
    }
  }

  .bottom__content {
    margin-top: auto;
    padding-right: ${props => props.theme.header.padding};

    > * {
      display: flex;
    }
  }

  .deux__points {
    width: 500px;
    line-height: 1.5;
    font-size: 0.98em;
    justify-content: space-between;
    color: ${props => props.theme.colors.lime};

    li {
      width: calc(50% - 20px);
    }
  }
`
StyledPitchSlate.name = 'StyledPitchSlate'

export default StyledPitchSlate
