import React from 'react';
import { Container, Media } from 'reactstrap';

const Job = () => (
  <Container className="mb-5">
    <h2 className="text-center mb-4">工作經歷</h2>
    <Media>
      <Media body>
        <Media heading>
          行果整合有限公司 2019/11 - 2020/02
        </Media>
        曾負責過個專案
        <br />
        (1)將原使用VB攥寫的程式改使用Laravel框架呈現，並將原T-SQL改寫成MySQL。
        <br />
        (2)將使用Codeigniter框架的後台系統進行BUG處理與新功能開發。
        <br />
        (3)義大醫院內部專案前端頁面開發。
        <br />
        (4)土城醫院電子收據系統前後台頁面開發。
      </Media>
    </Media>
  </Container>
);

export default Job;
