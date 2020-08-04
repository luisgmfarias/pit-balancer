import React from 'react';
import { Asset, AddAsset, AssetType } from '../components/Utils';
import styled from 'styled-components'

const MainContainer = styled.div`
  width:100vw;
  height:100vh;
  margin:0;
  display:flex;
  flex-direction:row;
`;

const Main = styled.div`
  background-color:#4E529E;
  width:75%;
  padding:50px;
  display:flex;
  flex-direction:column;
  h1{
    font-weight:lighter;
    color:white;
    margin:0;
    font-size:50px;
  }
`;

const AssetsContainer = styled.div`
  width:100%;
  height:90%;
  background-color:#4E528E;
  border-radius:10px;
  padding:10px 0;
  display:flex;
  flex-direction:row;
`;

const Tab = styled.div`
  background-color:white;
  width:25%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:10px 20px;
  div{
    color:white;
    font-size:17px;
    text-align:center;
    border-radius:50%;
    background:#4E529E;
    width:100px;
    height:100px;
  }
`;



function App() {
  return (
    <MainContainer>
      <Main>
        <h1>Seus ativos</h1>
        <AssetsContainer>
          <Asset>
            <AssetType>
              <span>Ação</span>
            </AssetType>
            <h3>ITSA4</h3>
            <h4>Itausa Investimentos Itau SA</h4>
          </Asset>
          <AddAsset></AddAsset>

        </AssetsContainer>
      </Main>

      <Tab>
        <div>
          <h1>LF</h1>
        </div>

      </Tab>

    </MainContainer>
  );
}

export default App;
