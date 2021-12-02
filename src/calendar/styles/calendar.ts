import styled from "@emotion/styled";

export const CalendarWrapper = styled.div`
    border: 1px solid #DDDEDF;
    border-radius: 4px;
    .fxs_insights_calendar_name{
        color: #1B1C23;
    }
    &:hover {
        cursor: pointer;
        .fxs_insights_calendar_name{
            color: #e4871b;
        }
    }
`;

export const CalendarEventName = styled.span`
`;
export const CalendarHeader = styled.header`
    background-color: #F0F0F1;
    text-indent: 1rem;
    &.fxs_txt_size_xsmall{
        line-height: 1.8rem;
    }
`
export const CalendarBody = styled.header`
    padding: 1rem;
`;
export const CalendarFirstLine = styled.p`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
export const CalendarFirstLineLeft = styled.span`
display:flex;
justify-content: space-between;
align-items: center;
`;
export const CountryIcon = styled.span<{ countryUrl: string }>`
    display:inline-block;
    width: 25px;
    height: 25px;
    border-radius:50%;
    background-image: url(${props => props.countryUrl});
    background-position: 50% ;
    background-size: cover;
    margin-right: 10px;
    flex: 0 0 25px;
`;

export const CalendarBottom = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
    flex-wrap:wrap;
    @media(min-width:680px){
        flex-wrap: nowrap;
    }
`;
export const CalendarData = styled.table`
    width:100%; 
    flex: 0 0  100%;
    @media(min-width:680px){
        width:auto;
        flex: 1 1 auto;
        margin-left: 1rem;
    }
    border: 1px solid #DDDEDF;
    border-radius:3px;
    thead{
        tr{
            th{
                text-align:right;
                line-height:30px;
                padding: 0 20px;
            }
        }
    }
    tbody{
        tr{
            td{
                text-align:right;
                line-height:30px;
                padding: 0 20px;
            }
        }
    }
`;
export const CalendarImpact = styled.span`
    display:flex;
`;
export const CalendarImpactIcon = styled.span`
    height: 12px;
    width: 36px;
    display: inline-block;
    background-color: #fff;
    position: relative;
    margin-left:10px;
    &:before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
    height: 12px;
        display: block;
    }
    &.medium {
        border: 1px solid #e4871b;
        &:before {
            background-color: #e4871b;
            width: 66%;
        }
    }
    &.high {
        background-color: #d25746;
        border: #d25746;
        &:before {
            background-color: #d25746;
            width: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
    
        }
    }
    &.low {
        border: 1px solid #f5c861;
        &:before {
            background-color: #f5c861;
            width: 33%;
        }
    }
`;

