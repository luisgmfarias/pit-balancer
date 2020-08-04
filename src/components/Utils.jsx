import React from 'react';
import styled from 'styled-components';

export const Asset = styled.div`
    background-color:white;
    width:200px;
    height:200px;
    border-radius:10px;
    padding:0 10px;
    margin:0 10px;
    display:flex;
    flex-direction:column;
    h3{
        margin:0;
        font-weight:300;
        font-size:40px;
    }
    h4{
        margin:0;
        font-weight:300;
        font-size:10px;
    }
`;

export const AddAsset = styled.div`
    background-color:transparent;
    width:200px;
    height:200px;
    border:2px solid white;
    border-radius:10px;
    margin:0 10px;
    padding:0 10px;
`;

export const AssetType = styled.div`
    background:#50B5A8;
    font-size:15px;
    width:60px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    margin:0 auto;
    text-align:center;
`;

