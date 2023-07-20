import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    padding: 32px;
    height: 250px;
    background-color: ${({ theme }) => theme.COLORS.PINK_DARK};

    border-radius: 16px;
    border: none;

    margin-bottom: 24px;

    >h1 {
        flex: 1;
        text-align: left;
        font-size: 24px;
        font-weight: 700;
    }

    .Stars {
        margin-top: 8px;
    display: flex;
    gap: 6px;
    svg {
        font-size: 17px;
        fill: ${({ theme }) => theme.COLORS.PINK};
    }
    }

    >.p {
        font-size: 16px;
        text-align: justify;
        margin-top: 15px;
    }

    >footer {
        display: flex;
        margin-top: 30px;
    }
`

