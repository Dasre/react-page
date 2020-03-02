import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import style from '../../stylesheets/Collection.module.scss';
import collectionJSON from './Collection.json';
import Carousel from './Carousel';
import DL from '../../img/DL.png';

class Collection extends Component {
  constructor(props) {
    super(props);
    const yeararray = Object.values(collectionJSON).map((item) => item.year);
    const titlearray = Object.values(collectionJSON).map((item) => item.title);
    const textarray = Object.values(collectionJSON).map((item) => item.text);
    this.state = {
      year: yeararray,
      title: titlearray,
      text: textarray,
    };
  }

  render() {
    const { year, title, text } = this.state;
    return (
      <div id="collection">
        <h2 className="text-center mb-4">作品</h2>
        <Container>
          <div className={style.timelineSection}>
            <Row className={`my_3 ${style.timelinePointer}`}>
              <Col md="6">
                <h3>{year[0]}</h3>
                <h5>{title[0]}</h5>
                <p>{text[0]}</p>
              </Col>
              <Col md="6">
                <a href="https://dasre.github.io/maskMap/" target="blank">我是連結</a>
              </Col>
            </Row>

            <Row className={`my_3 flex-row-reverse ${style.timelinePointer}`}>
              <Col md="6">
                <h3>{year[1]}</h3>
                <h5>{title[1]}</h5>
                <p>{text[1]}</p>
              </Col>
              <Col md="6">
                <img src={DL} className={style.img} alt="" />
              </Col>
            </Row>

            <Row className={`my_3 ${style.timelinePointer}`}>
              <Col md="6">
                <h3>{year[2]}</h3>
                <h5>{title[2]}</h5>
                <p>{text[2]}</p>
              </Col>
              <Col md="6">
                <Carousel />
                <div className={style.img} />
              </Col>
            </Row>

            <Row className={`my_3 flex-row-reverse ${style.timelinePointer}`}>
              <Col md="6">
                <h3>{year[3]}</h3>
                <h5>{title[3]}</h5>
                <p>{text[3]}</p>
              </Col>
              <Col md="6">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="game" className="embed-responsive-item" src="https://www.youtube.com/embed/LD9bSVSOgoQ" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Collection;
