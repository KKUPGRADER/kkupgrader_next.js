import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;
export const StyledHeading = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 1px;
`;
export const StyledSubHeading = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
    letter-spacing: 1px;
`;
export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin-bottom: 8px;
    gap: 5px;
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(var(--grey-rgb), 0.1);
    &:focus-within{
        box-shadow: 0 0 10px rgba(var(--theme-rgb), 0.1);
    }
    
`;
export const StyledInput = styled.input`
    width: 100%;
    padding: 10px 50px;
    background-color: var(--form-bg);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
`;
export const StyledButton = styled.button`
    position: absolute;
    left: 2px;
    inset-block: 2px;
    flex: 1 1 auto;
    padding: 0.625rem;
    border:none;
    outline: none;
    border-radius: 50%;
    background-color: rgba(var(--theme-rgb), 0.1);
    color: rgba(var(--text-rgb), 0.9);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    transition: all 0.2s ease-in-out;
    &:has(~ ${StyledInput}:focus){
        background-color: rgba(var(--theme-rgb), 0.25);
        color: rgba(var(--grey-rgb), 1);

    }
`;
export const Suggestions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: inherit;
    font-size: 0.875rem;
    &>span{
        &:first-child{
            margin-right: 5px;
        }
        &:not(:first-child){
            cursor: pointer;
            &:hover{
                text-decoration: underline;
                color: rgba(var(--theme-rgb), 1);
            }

            &:not(:last-child){
                &:after{
                    content: ",";
                }
            }
        }
    }
`;